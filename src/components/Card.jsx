import PropTypes from "prop-types";

import { Box, useColorModeValue } from "@chakra-ui/react";

const Card = ({ children, onClick, ...others }) => {
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
            cursor="pointer"
            onClick={onClick}
        >
            <Box>{children}</Box>
        </Box>
    );
};

Card.propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func.isRequired,
};
Card.defaultProps = {
    children: null,
};

export default Card;
