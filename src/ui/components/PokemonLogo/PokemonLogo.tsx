import Image from 'next/image';
import * as React from 'react';

export type ImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  testid?: string;
  width?: number;
  height?: number;
};

const PokemonLogo = ({
  className,
  testid,
  width = 170,
  height = 62,
  ...props
}: ImageProps) => (
  <Image
    src="/assets/pokemonlogo.png"
    alt="Pokemon Logo"
    quality={100}
    width={width}
    height={height}
    {...props}
  />
);

export default PokemonLogo;
