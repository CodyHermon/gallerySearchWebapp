import { 
    Box,
    GridItem, 
    useDisclosure,
} from '@chakra-ui/react';

import { Image } from './Image';

import classes from './imageCard.module.css';

interface Props {
    image: any;
}

const ImageCard = ({ image }: Props) => {
    const { onOpen, isOpen, onClose } = useDisclosure();

    const {
        id,
        description,
        urls,
        alt_description: altDescription,
    } = image;

  return (
    <>
        <Box key={id} className={classes.gridItem} height='100px'>
            <img className={classes.image} alt={description} src={urls.thumb} onClick={onOpen} />
            <p className={classes.description}>{altDescription}</p>
        </Box>
        <Image image={image} isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export { ImageCard };