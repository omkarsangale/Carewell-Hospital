"use client";
import Image, { type ImageProps } from "next/image";
import { useState } from "react";

// A local fallback keeps layouts intact when a remote photo is unavailable.
export function SafeImage({ src, alt, ...props }: ImageProps) {
  const [failedSource, setFailedSource] = useState<ImageProps["src"] | null>(null);
  const failed = failedSource === src;
  return <Image {...props} src={failed ? "/images/image-fallback.svg" : src} alt={failed ? alt + " (illustration)" : alt} onError={() => setFailedSource(src)} />;
}
