import { useState } from "react";

import { Flex, Text, Image } from "@chakra-ui/react";

import { Card } from "../../components";
import ImagePreview from "./ImagePreview";

const DashbaordView = (props) => {
    const { images } = props;
    const [selectedImageId, setSelectedImageId] = useState(null);

    const selectedImage = images.find((image) => image.id === selectedImageId);

    const getImageName = (url) => {
        const splittedUrl = url.split("/");
        return splittedUrl[splittedUrl.length - 1];
    };

    const handlePreviewImage = (imageId) => (event) => {
        event && event.preventDefault && event.preventDefault();
        setSelectedImageId(imageId);
    };

    const handleClosePreview = (event) => {
        event && event.preventDefault && event.preventDefault();
        setSelectedImageId(null);
    };

    return (
        <Flex>
            {images.map((image) => (
                <Card key={image.id} onClick={handlePreviewImage(image.id)}>
                    <Image
                        src={image.url}
                        alt={getImageName(image.url)}
                        rounded={"lg"}
                    />
                    <Text mt="2" fontSize="sm">
                        {getImageName(image.url)}
                    </Text>
                </Card>
            ))}
            <ImagePreview
                getImageName={getImageName}
                image={selectedImage}
                isOpen={!!selectedImageId}
                onClose={handleClosePreview}
            />
        </Flex>
    );
};

export default DashbaordView;
