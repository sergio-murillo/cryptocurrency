import { memo, useState, FC } from 'react';
import { FaFileImage } from 'react-icons/fa';
import { ImageContainer } from './styles';

/**
 * Properties from component
 */
interface PropsFromComponent {
  /**
   * Image path
   * @type {string}
   */
  src: string;
  /**
   * Image alt text
   * @type {string}
   */
  alt: string;
  /**
   * Image classname
   * @type {string}
   * @ignore
   */
  className?: string;
}

export type Props = PropsFromComponent;

/**
 * Generic image to use fallbacks
 */
export const Image: FC<Props> = ({ className, src, alt }) => {
  const [error, setError] = useState(false);

  if (error) {
    return (
    <FaFileImage/>
    );
  }

  return (
    <ImageContainer
      data-testid="image"
      className={className}
      onError={() => setError(true)}
      src={src}
      alt={alt} />
  );
};

export default memo(Image);
