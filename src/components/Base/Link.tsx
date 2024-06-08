import PropTypes from 'prop-types';

export interface LinkProps {
  linkUrl: string;
  linkTitle: string;
  target?: '_self' | '_blank' | '_parent' | '_top';
  rel?: string;
  className?: string;
}

const Link = ({
  linkUrl,
  linkTitle,
  target = '_self',
  rel,
  className,
}: LinkProps) => {
  return (
    <a
      href={linkUrl}
      target={target}
      rel={rel}
      className={`link-style ${className}`}
    >
      {linkTitle}
    </a>
  );
};

Link.propTypes = {
  linkUrl: PropTypes.string.isRequired,
  linkTitle: PropTypes.string.isRequired,
  target: PropTypes.oneOf(['_self', '_blank', '_parent', '_top']),
  rel: PropTypes.string,
  className: PropTypes.string,
};

export default Link;
