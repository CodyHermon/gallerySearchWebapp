import { SimpleGrid } from '@chakra-ui/react';

import { ImageCard } from './ImageCard';
import classes from './imageList.module.css';

interface Props {
    images: any;
}

const ImageList = ({ images }: Props) => {
  return (
    <SimpleGrid 
      className={classes.imageList}
      columns={4}
      spacingY='100px'
      spacingX='50px'
    >
        {images.map((image: any) => (
          <ImageCard key={image.id} image={image} />
        ))}
    </SimpleGrid>
  );
};

export { ImageList };