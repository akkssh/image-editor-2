import React, { useRef } from "react";
import PropTypes from "prop-types";
import { IconButton } from "@chakra-ui/react";

import { UploadIcon } from "../assets/icons";

const UploadButton = (props) => {
    const { isLoading, onImageUpload } = props;
    const fileRef = useRef();

    const handleChange = (e) => {
        const [file] = e.target.files;
        onImageUpload && onImageUpload(file);
    };

    return (
        <div>
            <IconButton
                isLoading={isLoading}
                colorScheme="blue"
                aria-label="Search database"
                icon={<UploadIcon />}
                onClick={() => fileRef.current.click()}
            />
            <input
                ref={fileRef}
                onChange={handleChange}
                multiple={false}
                type="file"
                hidden
            />
        </div>
    );
};

UploadButton.propTypes = {
    isLoading: PropTypes.bool,
    onImageUpload: PropTypes.func.isRequired,
};
UploadButton.defaultProps = {
    isLoading: false,
};

export default UploadButton;
