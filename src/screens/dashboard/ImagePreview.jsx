import PropTypes from "prop-types";

import {
    Image,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    ModalFooter,
    Button,
} from "@chakra-ui/react";
import { ConfirmationDialog } from "../../components";
import { useState } from "react";

const ImagePreview = (props) => {
    const { getImageName, image, isOpen, onClose, onDelete } = props;
    const [showConfirmationDialog, SetShowConfirmationDialog] = useState(false);

    if (!image) {
        return null;
    }
    const imageName = getImageName(image.url);

    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{imageName}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Image
                            boxSize="lg"
                            src={image.url}
                            alt={imageName}
                            rounded={"lg"}
                        />
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme="blue" mr={3}>
                            Edit
                        </Button>
                        <Button
                            colorScheme="red"
                            onClick={() => SetShowConfirmationDialog(true)}
                        >
                            Delete
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
            <ConfirmationDialog
                isOpen={showConfirmationDialog}
                onConfirm={() => SetShowConfirmationDialog(false)}
                onClose={() => SetShowConfirmationDialog(false)}
                title="Delete Image"
                message="Are you sure you want to delete this image? You cannot undo this action."
            />
        </>
    );
};

ImagePreview.propTypes = {
    isOpen: PropTypes.bool,
    image: PropTypes.shape(),
    getImageName: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired,
};
ImagePreview.defaultProps = {
    image: null,
    isOpen: false,
};

export default ImagePreview;
