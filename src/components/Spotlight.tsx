import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface SpotlightProps {
  className?: string;
}

const Spotlight: React.FC<SpotlightProps> = ({ className }) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.setProperty("--spotlight-x", `${e.clientX}px`);
        el.style.setProperty("--spotlight-y", `${e.clientY}px`);
      });
    };

    window.addEventListener("pointermove", onMove);
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <div ref={ref} className={cn("spotlight", className)} aria-hidden="true"/>;
};

export default Spotlight;
