import React from "react";

import { Flex, Image } from "@chakra-ui/react";

import { Card } from "../../components";

const DashbaordView = (props) => {
    const { images } = props;

    return (
        <Flex>
            {images.map((image) => (
                <Card key={image.id}>
                    <Image src={image.url} alt="Dan Abramov" rounded={"lg"} />
                </Card>
            ))}
        </Flex>
    );
};

export default DashbaordView;
