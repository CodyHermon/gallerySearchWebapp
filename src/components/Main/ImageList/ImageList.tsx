import { Grid } from '@chakra-ui/react';

import { ImageCard } from './ImageCard';
import classes from './imageList.module.css';

interface Props {
    images: any;
}

const ImageList = ({ images }: Props) => {
  return (
    <Grid 
      className={classes.imageList}
      templateRows='repeat(2, 1fr)'
      templateColumns='repeat(5, 1fr)' 
      gap={4}
    >
        {images.map((image: any) => (
          <ImageCard key={image.id} image={image} />
        ))}
    </Grid>
  );
};

export { ImageList };