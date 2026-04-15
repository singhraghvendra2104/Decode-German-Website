"use client";

import { Skeleton } from "@mantine/core";
import Image, { type ImageProps } from "next/image";
import { useState } from "react";

/**
 * Drop-in replacement for `next/image` that shows a Mantine `Skeleton`
 * placeholder until the image finishes loading, then cross-fades it in.
 *
 * Usage is identical to `next/image`:
 *   <ImageWithSkeleton src="..." alt="..." fill sizes="100vw" />
 *   <ImageWithSkeleton src="..." alt="..." width={600} height={600} />
 *
 * Notes:
 * - For `fill` images, the parent must be positioned (relative/absolute/fixed),
 *   same constraint as `next/image` itself. The skeleton is rendered as an
 *   absolute sibling that covers the parent.
 * - For sized (width/height) images, the Mantine Skeleton wraps the image and
 *   sizes itself to its content.
 */
export default function ImageWithSkeleton({
  className,
  onLoad,
  ...props
}: ImageProps) {
  const [loaded, setLoaded] = useState(false);
  const fadeClass = `transition-opacity duration-500 ${
    loaded ? "opacity-100" : "opacity-0"
  }`;

  const handleLoad: ImageProps["onLoad"] = (e) => {
    setLoaded(true);
    onLoad?.(e);
  };

  if (props.fill) {
    return (
      <>
        {!loaded && (
          <Skeleton
            className="absolute inset-0 z-0"
            radius={0}
            animate
          />
        )}
        <Image
          {...props}
          onLoad={handleLoad}
          className={`${className ?? ""} ${fadeClass}`}
        />
      </>
    );
  }

  return (
    <Skeleton visible={!loaded} radius={0} animate>
      <Image
        {...props}
        onLoad={handleLoad}
        className={`${className ?? ""} ${fadeClass}`}
      />
    </Skeleton>
  );
}
