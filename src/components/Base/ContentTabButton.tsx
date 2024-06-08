import React, { useRef } from 'react';
import { ReactSVG } from 'react-svg';

// Props for the SVG component used in the content tab button
interface ContentTabButtonSvgProps {
  svgPath: string;
}

// Props for the content tab button component
interface ContentTabButtonProps extends ContentTabButtonSvgProps {
  buttonLabel: string;
  isActive: boolean;
  onClick: () => void;
}

// SVG component for displaying the icon in the content tab button
const ContentTabButtonSvg: React.FC<ContentTabButtonSvgProps> = ({
  svgPath,
}) => <ReactSVG src={svgPath} />;

const ContentTabButton: React.FC<ContentTabButtonProps> = ({
  buttonLabel,
  svgPath,
  isActive,
  onClick,
}) => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  // Click event handler for the content change button
  const handleContentBtnClick = () => {
    onClick();
    buttonRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'center',
    });
  };

  return (
    <button
      ref={buttonRef}
      role="button"
      onClick={handleContentBtnClick}
      className={`flex h-20 w-full min-w-[280px] flex-1 cursor-pointer snap-center items-center justify-center gap-x-4 border-r border-neutral-300 px-6 py-4 transition-colors last:border-r-0 xl:min-w-[270px] ${isActive ? 'animate-svg bg-secondary/5' : 'bg-white'}`}
    >
      <ContentTabButtonSvg svgPath={svgPath} />
      {buttonLabel}
    </button>
  );
};

export default ContentTabButton;
