import React, { memo, useState } from 'react';
import { FaFileImage } from 'react-icons/fa';
import { Image } from './styles';

interface PropsFromComponent {
  src: string;
  alt: string;
  className?: string;
}

type Props = PropsFromComponent;

const Loader: React.FC<Props> = ({ className, src, alt }) => {
  const [error, setError] = useState(false);

  if (error) {
    return (
    <FaFileImage/>
    );
  }

  return (
    <Image
     className={className}
     onError={() => setError(true)}
     src={src}
     alt={alt} />
  );
};

export default memo(Loader);
