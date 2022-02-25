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

import ImageEditor from "./ImageEditor";

const ImagePreview = (props) => {
    const { getImageName, image, isOpen, onClose, onDelete } = props;
    const [showConfirmationDialog, setShowConfirmationDialog] = useState(false);
    const [isEditMode, setEditMode] = useState(false);

    if (!image) {
        return null;
    }
    const imageName = getImageName(image.url);

    const toggleConfirmationDialog = (event) => {
        event && event.preventDefault && event.preventDefault();
        setShowConfirmationDialog(!showConfirmationDialog);
    };

    const toggleEditMode = (event) => {
        event && event.preventDefault && event.preventDefault();
        setEditMode(!isEditMode);
    };

    const handleClose = (event) => {
        event && event.preventDefault && event.preventDefault();
        setEditMode(false);
        setShowConfirmationDialog(false);
        onClose();
    };

    return (
        <>
            <Modal isOpen={isOpen} onClose={handleClose} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>{imageName}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        {isEditMode ? (
                            <ImageEditor {...image} />
                        ) : (
                            <Image
                                boxSize="lg"
                                src={image.url}
                                alt={imageName}
                                rounded={"lg"}
                            />
                        )}
                    </ModalBody>

                    {isEditMode ? (
                        <ModalFooter>
                            <Button
                                colorScheme="blue"
                                mr={3}
                                onClick={toggleEditMode}
                            >
                                Save
                            </Button>
                            <Button colorScheme="red" onClick={toggleEditMode}>
                                Cancel
                            </Button>
                        </ModalFooter>
                    ) : (
                        <ModalFooter>
                            <Button
                                colorScheme="blue"
                                mr={3}
                                onClick={toggleEditMode}
                            >
                                Edit
                            </Button>
                            <Button
                                colorScheme="red"
                                onClick={toggleConfirmationDialog}
                            >
                                Delete
                            </Button>
                        </ModalFooter>
                    )}
                </ModalContent>
            </Modal>
            <ConfirmationDialog
                isOpen={showConfirmationDialog}
                onConfirm={toggleConfirmationDialog}
                onClose={toggleConfirmationDialog}
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
