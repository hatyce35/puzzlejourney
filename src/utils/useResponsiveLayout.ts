import { useState, useEffect } from 'react';

export interface ResponsiveLayout {
  width: number;
  height: number;
  isLandscape: boolean;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  useSideTray: boolean;
  boardSizePx: number;
  thumbSizePx: number;
}

export function useResponsiveLayout(): ResponsiveLayout {
  const [layout, setLayout] = useState<ResponsiveLayout>(() => calculateLayout());

  function calculateLayout(): ResponsiveLayout {
    if (typeof window === 'undefined') {
      return {
        width: 1024,
        height: 768,
        isLandscape: true,
        isMobile: false,
        isTablet: false,
        isDesktop: true,
        useSideTray: true,
        boardSizePx: 540,
        thumbSizePx: 80,
      };
    }

    const w = window.innerWidth;
    const h = window.innerHeight;
    const isLandscape = w > h;
    const isMobile = w < 640;
    const isTablet = w >= 640 && w < 1024;
    const isDesktop = w >= 1024;

    // Use side tray when:
    // 1. Desktop or Tablet in landscape (w >= 768 and isLandscape)
    // 2. Wide screens where side-by-side provides superior immersion
    const useSideTray = (w >= 840 && isLandscape) || (w >= 1024 && h >= 500);

    let boardSizePx = 360;
    let thumbSizePx = 72;

    if (useSideTray) {
      // In side-by-side layout:
      // Board height is constrained by (height - top header ~80px - padding)
      // Board width is constrained by (width - side tray width ~320px - padding)
      const maxH = Math.max(260, h - 90);
      const maxW = Math.max(260, w - 340);
      boardSizePx = Math.floor(Math.min(maxH, maxW, 640));
      thumbSizePx = isDesktop ? 82 : 74;
    } else {
      // In stacked vertical layout (e.g. phones, portrait tablets):
      // Board height must leave space for header (~80px) and bottom tray (~130px - 150px)
      const maxH = Math.max(240, h - 230);
      const maxW = Math.max(240, w - 24);
      const upperCap = isTablet ? 540 : 420;
      boardSizePx = Math.floor(Math.min(maxH, maxW, upperCap));

      // Thumb sizes: on tiny phone width (< 370px) scale to 64px, on normal 72px, on tablet 84px
      if (w < 370) {
        thumbSizePx = 64;
      } else if (isTablet) {
        thumbSizePx = 84;
      } else {
        thumbSizePx = 72;
      }
    }

    return {
      width: w,
      height: h,
      isLandscape,
      isMobile,
      isTablet,
      isDesktop,
      useSideTray,
      boardSizePx,
      thumbSizePx,
    };
  }

  useEffect(() => {
    let timeoutId: number | null = null;

    const handleResize = () => {
      // Debounce slightly for fluid resize performance
      if (timeoutId) window.clearTimeout(timeoutId);
      timeoutId = window.setTimeout(() => {
        setLayout(calculateLayout());
      }, 30);
    };

    window.addEventListener('resize', handleResize, { passive: true });
    window.addEventListener('orientationchange', handleResize, { passive: true });

    return () => {
      if (timeoutId) window.clearTimeout(timeoutId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, []);

  return layout;
}
