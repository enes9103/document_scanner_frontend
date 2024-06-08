import React from 'react';

interface ContentBoxHeaderProps {
  title: string;
  actionTitle: string;
  description: string;
}

const ContentBoxHeader: React.FC<ContentBoxHeaderProps> = ({
  title,
  actionTitle,
  description,
}) => (
  <>
    <p className="font-bold uppercase text-secondary lg:mb-6 mb-3">
      {actionTitle}
    </p>
    <h1 className="text-3xl font-bold lg:mb-6 mb-3">{title}</h1>
    <p className="text-4 leading-7 lg:mb-8 lg:text-xl lg:leading-8 mb-3">
      {description}
    </p>
  </>
);

export default ContentBoxHeader;
