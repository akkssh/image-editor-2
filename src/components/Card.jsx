import PropTypes from "prop-types";

import { Box, useColorModeValue } from "@chakra-ui/react";

const Card = ({ hideCardTitle, children, ...others }) => {
    return (
        <Box
            {...others}
            maxW={"250px"}
            w={"full"}
            h="250px"
            m="4"
            bg={useColorModeValue("white", "gray.900")}
            boxShadow={"lg"}
            rounded={"lg"}
            p={1}
            textAlign={"center"}
        >
            {/* {!hideCardTitle && (
                <Heading fontSize="xl" fontFamily="body" textAlign="left">
                    Card Title
                </Heading>
            )} */}
            <Box>{children}</Box>
        </Box>
    );
};

Card.propTypes = {
    hideCardTitle: PropTypes.bool,
    children: PropTypes.node,
};
Card.defaultProps = {
    hideCardTitle: false,
    children: null,
};

export default Card;
