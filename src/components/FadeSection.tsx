
import React from "react";

interface FadeSectionProps {
  children: React.ReactNode;
  className?: string;
}

const FadeSection: React.FC<FadeSectionProps> = ({ children, className }) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    function handle(entries: IntersectionObserverEntry[]) {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
    const observer = new window.IntersectionObserver(handle, {
      root: null,
      rootMargin: "0px",
      threshold: 0.15,
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-opacity duration-700 ${visible ? "opacity-100" : "opacity-0"} ${className || ""}`}
    >
      {children}
    </div>
  );
};

export default FadeSection;
