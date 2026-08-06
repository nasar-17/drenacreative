import { useEffect, useRef, useState } from 'react';

export function ScrollVideoContainer({ children }) {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const heroContentRef = useRef(null);
  const aboutContentRef = useRef(null);
  const aboutOverlayRef = useRef(null);

  const targetFrameRef = useRef(0);
  const currentFrameRef = useRef(0);
  const animationFrameId = useRef(null);
  const imagesRef = useRef([]);

  const totalFrames = 240;

  // Parse children to separate Hero and About
  const [heroChild, aboutChild] = children;

  // Preload all frames on mount
  useEffect(() => {
    const loadedImages = [];
    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      const frameNum = String(i).padStart(3, '0');
      img.src = `/frames/frame_${frameNum}.jpg`;
      loadedImages.push(img);
    }
    imagesRef.current = loadedImages;

    // Draw the very first frame initially when loaded
    loadedImages[0].onload = () => {
      drawFrame(0);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const totalScrollableHeight = rect.height - window.innerHeight;
      
      if (totalScrollableHeight <= 0) return;

      // Calculate scroll progress within the container
      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / totalScrollableHeight));
      
      targetFrameRef.current = progress * (totalFrames - 1);
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

  const drawFrame = (frameIndex) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const img = imagesRef.current[frameIndex];
    if (img && img.complete) {
      ctx.drawImage(img, 0, 0, 1280, 720);
    }
  };

  // Smooth interpolation loop (Lerp)
  useEffect(() => {
    const updateProgress = () => {
      const diff = targetFrameRef.current - currentFrameRef.current;
      
      if (Math.abs(diff) < 0.05) {
        currentFrameRef.current = targetFrameRef.current;
      } else {
        // Easing factor of 0.06 makes the transition ultra smooth
        currentFrameRef.current += diff * 0.06;
      }

      const currentFrame = currentFrameRef.current;
      const frameIndex = Math.max(0, Math.min(totalFrames - 1, Math.round(currentFrame)));
      
      // Draw frame on canvas
      drawFrame(frameIndex);

      // Calculate opacities based on frame numbers
      // Hero fades out from frame 72 to 96
      let heroOpacity = 1;
      if (currentFrame < 72) {
        heroOpacity = 1;
      } else if (currentFrame >= 72 && currentFrame <= 96) {
        heroOpacity = 1 - (currentFrame - 72) / 24;
      } else {
        heroOpacity = 0;
      }

      // About fades in from frame 144 to 172
      let aboutOpacity = 0;
      if (currentFrame < 144) {
        aboutOpacity = 0;
      } else if (currentFrame >= 144 && currentFrame <= 172) {
        aboutOpacity = (currentFrame - 144) / 28;
      } else {
        aboutOpacity = 1;
      }

      // Directly manipulate DOM styles for absolute 60+ FPS smooth rendering (0 React overhead)
      if (heroContentRef.current) {
        heroContentRef.current.style.opacity = heroOpacity;
        heroContentRef.current.style.pointerEvents = heroOpacity > 0.1 ? 'auto' : 'none';
      }

      if (aboutContentRef.current) {
        aboutContentRef.current.style.opacity = aboutOpacity;
        aboutContentRef.current.style.pointerEvents = aboutOpacity > 0.1 ? 'auto' : 'none';
      }

      if (aboutOverlayRef.current) {
        aboutOverlayRef.current.style.opacity = aboutOpacity;
      }

      animationFrameId.current = requestAnimationFrame(updateProgress);
    };

    animationFrameId.current = requestAnimationFrame(updateProgress);

    return () => {
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="relative w-full bg-primary-950" style={{ height: '500vh' }}>
      {/* Scroll anchors */}
      <div id="hero" className="absolute top-0 left-0 w-1 h-1 pointer-events-none" />
      <div id="about" className="absolute left-0 w-1 h-1 pointer-events-none" style={{ top: '300vh' }} />
      <div id="tentang" className="absolute left-0 w-1 h-1 pointer-events-none" style={{ top: '300vh' }} />

      {/* Sticky viewport container */}
      <div className="sticky top-0 w-full h-screen overflow-hidden">
        {/* Canvas for frame drawing */}
        <canvas
          ref={canvasRef}
          width={1280}
          height={720}
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
          style={{ willChange: 'transform', transform: 'translate3d(0, 0, 0)' }}
        />

        {/* Existing Overlays */}
        {/* About Overlay (fading in from frame 144 to 172) */}
        <div
          ref={aboutOverlayRef}
          className="absolute inset-0 bg-white/40 dark:bg-primary-950/40 z-10 transition-opacity duration-150"
          style={{ opacity: 0 }}
        />

        {/* Foreground Content: Hero */}
        <div
          ref={heroContentRef}
          className="absolute inset-0 z-20 flex items-center justify-center transition-opacity duration-150"
          style={{
            opacity: 1,
            pointerEvents: 'auto'
          }}
        >
          {heroChild}
        </div>

        {/* Foreground Content: About */}
        <div
          ref={aboutContentRef}
          className="absolute inset-0 z-20 overflow-y-auto flex items-center justify-center transition-opacity duration-150"
          style={{
            opacity: 0,
            pointerEvents: 'none'
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
