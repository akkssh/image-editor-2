import { useRef } from "react";
import PropTypes from "prop-types";
import {
    AlertDialog,
    AlertDialogOverlay,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogBody,
    AlertDialogFooter,
    Button,
} from "@chakra-ui/react";

const ConfirmationDialog = (props) => {
    const { isOpen, onClose, onConfirm, title, message } = props;
    const cancelRef = useRef(null);

    return (
        <AlertDialog
            isOpen={isOpen}
            leastDestructiveRef={cancelRef}
            onClose={onClose}
        >
            <AlertDialogOverlay>
                <AlertDialogContent>
                    <AlertDialogHeader fontSize="lg" fontWeight="bold">
                        {title}
                    </AlertDialogHeader>

                    <AlertDialogBody>{message}</AlertDialogBody>

                    <AlertDialogFooter>
                        <Button ref={cancelRef} onClick={onClose}>
                            Go Back
                        </Button>
                        <Button colorScheme="red" onClick={onConfirm} ml={3}>
                            Yes, Delete
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialogOverlay>
        </AlertDialog>
    );
};

ConfirmationDialog.propTypes = {
    isOpen: PropTypes.bool,
    onClose: PropTypes.func.isRequired,
    onConfirm: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
};
ConfirmationDialog.defaultProps = {
    isOpen: false,
};

export default ConfirmationDialog;
