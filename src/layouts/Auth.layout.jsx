import {
    Box,
    Button,
    Container,
    Heading,
    HStack,
    Stack,
    Text,
    useBreakpointValue,
    useColorModeValue,
} from "@chakra-ui/react";
import PropTypes from "prop-types";

import { Logo } from "../assets/icons";

const AuthLayout = (props) => {
    const { children, toggleAuthView } = props;

    return (
        <div style={{ backgroundColor: "rgb(247, 250, 252)" }}>
            <Container
                maxW="lg"
                h="100vh"
                py={{ base: "12", md: "24" }}
                px={{ base: "0", sm: "8" }}
            >
                <Stack spacing="8">
                    <Stack spacing="6">
                        <Logo />
                        <Stack
                            spacing={{ base: "2", md: "3" }}
                            textAlign="center"
                        >
                            <Heading
                                size={useBreakpointValue({
                                    base: "xs",
                                    md: "sm",
                                })}
                            >
                                Log in to your account
                            </Heading>
                            <HStack spacing="1" justify="center">
                                <Text color="muted">
                                    Don&apos;t have an account?
                                </Text>
                                <Button
                                    variant="link"
                                    colorScheme="blue"
                                    onClick={toggleAuthView}
                                >
                                    Sign up
                                </Button>
                            </HStack>
                        </Stack>
                    </Stack>
                    <Box
                        py={{ base: "0", sm: "8" }}
                        px={{ base: "4", sm: "10" }}
                        bg={useBreakpointValue({
                            base: "transparent",
                            sm: "bg-surface",
                        })}
                        boxShadow={{
                            base: "none",
                            sm: useColorModeValue("md", "md-dark"),
                        }}
                        borderRadius={{ base: "none", sm: "xl" }}
                    >
                        {children}
                    </Box>
                </Stack>
            </Container>
        </div>
    );
};

AuthLayout.propTypes = {
    chidlren: PropTypes.node.isRequired,
    toggleAuthView: PropTypes.func.isRequired,
};

export default AuthLayout;
