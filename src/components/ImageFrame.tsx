import type { CSSProperties } from 'react';

interface ImageFrameProps {
  src?: string | null;
  alt: string;
  width: number;
  height: number;
  aspectRatio?: string;
  loading?: 'eager' | 'lazy';
  priority?: boolean;
  className?: string;
}

export function ImageFrame({
  src,
  alt,
  width,
  height,
  aspectRatio,
  loading = 'lazy',
  priority = false,
  className = '',
}: ImageFrameProps) {
  const frameStyle: CSSProperties = {
    aspectRatio: aspectRatio ?? `${width} / ${height}`,
  };
  const frameClassName = ['image-frame', className].filter(Boolean).join(' ');

  return (
    <div className={frameClassName} style={frameStyle}>
      {src ? (
        <img
          alt={alt}
          height={height}
          loading={priority ? 'eager' : loading}
          fetchPriority={priority ? 'high' : 'auto'}
          src={src}
          width={width}
        />
      ) : (
        <div className="image-frame__placeholder" role="img" aria-label={alt}>
          <span>Image pending</span>
        </div>
      )}
    </div>
  );
}