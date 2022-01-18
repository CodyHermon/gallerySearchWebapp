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
      templateColumns='repeat(4, 1fr)' 
      gap={6}
    >
        {images.map((image: any) => (
          <ImageCard key={image.id} image={image} />
        ))}
    </Grid>
  );
};

export { ImageList };