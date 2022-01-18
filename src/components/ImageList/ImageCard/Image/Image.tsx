import { 
    useDisclosure, 
    Modal, 
    ModalOverlay,
    ModalContent,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
} from '@chakra-ui/react';

import classes from './image.module.css';

interface Props {
    image: any;
    isOpen: boolean;
    onClose: any;
}

const Image = ({ image, isOpen, onClose }: Props) => {

    const {
        urls,
        alt_description: altDescription,
    } = image;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent className={classes.modalContent} >
            <ModalBody>
                <img className={classes.fullImage} src={urls.full} />
            </ModalBody>
            <ModalCloseButton className={classes.modalCloseButton} />
            <ModalFooter className={classes.modalDescription}>
                {altDescription}
            </ModalFooter>
        </ModalContent>
    </Modal>
  );
};

export { Image };