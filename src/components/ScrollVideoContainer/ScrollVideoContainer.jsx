import { useEffect, useRef, useState } from 'react';

export function ScrollVideoContainer({ children }) {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const [videoTime, setVideoTime] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const targetTimeRef = useRef(0);
  const animationFrameId = useRef(null);

  // Parse children to separate Hero and About
  // We assume children[0] is Hero and children[1] is About
  const [heroChild, aboutChild] = children;

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleLoadedMetadata = () => {
      setIsLoaded(true);
    };

    if (video.readyState >= 1) {
      handleLoadedMetadata();
    } else {
      video.addEventListener('loadedmetadata', handleLoadedMetadata);
    }

    return () => {
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !videoRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const totalScrollableHeight = rect.height - window.innerHeight;
      
      // Avoid division by zero
      if (totalScrollableHeight <= 0) return;

      // Calculate scroll progress within the container
      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / totalScrollableHeight));
      
      const videoDuration = videoRef.current.duration || 10;
      targetTimeRef.current = progress * videoDuration;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    
    // Initial call
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  // Smooth interpolation loop (Lerp)
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let lastTime = 0;

    const updateVideoProgress = () => {
      // Prevent overloading the browser with seek requests if it's already seeking
      if (!video.seeking) {
        const diff = targetTimeRef.current - video.currentTime;
        
        if (Math.abs(diff) < 0.01) {
          video.currentTime = targetTimeRef.current;
        } else {
          // Adjust lerp speed (e.g. 0.08) for maximum smoothness
          video.currentTime += diff * 0.08;
        }
      }

      // Throttle React state updates to save rendering cycles
      if (Math.abs(video.currentTime - lastTime) > 0.05) {
        lastTime = video.currentTime;
        setVideoTime(video.currentTime);
      }

      animationFrameId.current = requestAnimationFrame(updateVideoProgress);
    };

    animationFrameId.current = requestAnimationFrame(updateVideoProgress);

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  // Calculate opacities based on current video time
  // Transition is between 5.4s and 6.6s (centered around 6.0s)
  const transitionStart = 5.4;
  const transitionEnd = 6.6;

  let heroOpacity = 1;
  let aboutOpacity = 0;

  if (videoTime < transitionStart) {
    heroOpacity = 1;
    aboutOpacity = 0;
  } else if (videoTime >= transitionStart && videoTime <= transitionEnd) {
    const p = (videoTime - transitionStart) / (transitionEnd - transitionStart);
    heroOpacity = 1 - p;
    aboutOpacity = p;
  } else {
    heroOpacity = 0;
    aboutOpacity = 1;
  }

  // Linear interpolation for overlay transition
  // Hero gradient overlay to About background/overlay (white/dark bg with some transparency)
  const overlayProgress = Math.max(0, Math.min(1, (videoTime - transitionStart) / (transitionEnd - transitionStart)));

  return (
    <div ref={containerRef} className="relative w-full bg-primary-950" style={{ height: '300vh' }}>
      {/* Scroll anchors */}
      <div id="hero" className="absolute top-0 left-0 w-1 h-1 pointer-events-none" />
      <div id="about" className="absolute left-0 w-1 h-1 pointer-events-none" style={{ top: '180vh' }} />
      <div id="tentang" className="absolute left-0 w-1 h-1 pointer-events-none" style={{ top: '180vh' }} />

      {/* Sticky viewport container */}
      <div className="sticky top-0 w-full h-screen overflow-hidden">
        {/* Background video */}
        <video
          ref={videoRef}
          src="/video.mp4"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
          style={{ willChange: 'transform', transform: 'translate3d(0, 0, 0)' }}
          muted
          playsInline
          preload="auto"
        />

        {/* Existing Overlays */}
        {/* Hero Overlay (always active or fading out during transition) */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#283f54]/70 via-[#355872]/75 to-[#1c2e3e]/80 z-10 transition-opacity duration-300"
          style={{ opacity: 1 - overlayProgress }}
        />

        {/* About Overlay (fading in during transition: dark mode is dark, light mode is light) */}
        <div
          className="absolute inset-0 bg-white/40 dark:bg-primary-950/40 z-10 transition-opacity duration-300"
          style={{ opacity: overlayProgress }}
        />

        {/* Foreground Content: Hero */}
        <div
          className="absolute inset-0 z-20 flex items-center justify-center transition-opacity duration-300"
          style={{
            opacity: heroOpacity,
            pointerEvents: heroOpacity > 0.1 ? 'auto' : 'none'
          }}
        >
          {heroChild}
        </div>

        {/* Foreground Content: About */}
        <div
          className="absolute inset-0 z-20 overflow-y-auto flex items-center justify-center transition-opacity duration-300"
          style={{
            opacity: aboutOpacity,
            pointerEvents: aboutOpacity > 0.1 ? 'auto' : 'none'
          }}
        >
          <div className="w-full h-full">
            {aboutChild}
          </div>
        </div>
      </div>
    </div>
  );
}
