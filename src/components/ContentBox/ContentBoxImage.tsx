import React, { useState } from 'react';

interface ContentBoxImageProps {
  mobileImageUrl: string;
  desktopImageUrl: string;
  alt: string;
}

const ContentBoxImage: React.FC<ContentBoxImageProps> = ({
  mobileImageUrl,
  desktopImageUrl,
  alt,
}) => {
  const [loaded, setLoaded] = useState(false);

  const handleLoading = () => setLoaded((prev) => !prev);

  return (
    <picture
      onLoad={handleLoading}
      className={`${loaded ? 'h-auto' : 'h-[246px] lg:h-[600px]'}`}
    >
      <source srcSet={desktopImageUrl} media="(min-width: 1024px)" />
      <img
        className="w-auto lg:order-1 lg:justify-self-start"
        alt={alt}
        src={mobileImageUrl}
      />
    </picture>
  );
};

export default ContentBoxImage;
