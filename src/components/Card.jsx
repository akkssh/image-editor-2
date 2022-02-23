import { Heading, Box, useColorModeValue } from "@chakra-ui/react";

const Card = () => {
    return (
        <Box
            maxW={"320px"}
            w={"full"}
            bg={useColorModeValue("white", "gray.900")}
            boxShadow={"2xl"}
            rounded={"lg"}
            p={6}
            textAlign={"center"}
        >
            <Heading fontSize="xl" fontFamily="body" textAlign="left">
                Card Title
            </Heading>
        </Box>
    );
};

export default Card;
