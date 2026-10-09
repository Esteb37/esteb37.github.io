import { useEffect, useRef, useState } from "react";
import type { VideoEmbed } from "@/lib/types";
import { asset } from "@/lib/asset";

type Props = {
  video: VideoEmbed;
};

function LazyMp4Video({ video }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const src = video.src.startsWith("http") ? video.src : asset(video.src);

  useEffect(() => {
    const container = containerRef.current;
    if (!container || shouldLoad) return;

    if (!("IntersectionObserver" in window)) {
      setShouldLoad(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setShouldLoad(true);
        observer.disconnect();
      },
      { rootMargin: "200px" },
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [shouldLoad]);

  return (
    <div
      ref={containerRef}
      className="aspect-video w-full overflow-hidden rounded-xl border border-border bg-black"
    >
      <video
        src={shouldLoad ? src : undefined}
        title={video.title}
        controls
        playsInline
        preload="metadata"
        className="h-full w-full"
      />
    </div>
  );
}

export default function VideoEmbedView({ video }: Props) {
  if (video.kind === "youtube") {
    const src = `https://www.youtube-nocookie.com/embed/${video.src}?rel=0&modestbranding=1`;
    return (
      <div className="aspect-video w-full overflow-hidden rounded-xl border border-border bg-black">
        <iframe
          src={src}
          title={video.title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="h-full w-full"
        />
      </div>
    );
  }

  return <LazyMp4Video video={video} />;
}
