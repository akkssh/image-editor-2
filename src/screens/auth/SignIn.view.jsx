import {
    Button,
    Divider,
    FormControl,
    FormLabel,
    FormErrorMessage,
    HStack,
    Input,
    Stack,
    Text,
} from "@chakra-ui/react";
import { useState } from "react";
import PropTypes from "prop-types";

import { GoogleIcon } from "../../assets/icons";

const REQUIRED_FIELDS = ["email", "password"];

const SignInView = (props) => {
    const { isLoading, onSubmit } = props;

    const [data, setData] = useState({});
    const [errors, setErrors] = useState({});

    const validateFields = (formObj) => {
        const fieldErrors = {};
        let hasErrors = false;
        for (let i = 0; i < REQUIRED_FIELDS.length; i += 1) {
            const field = REQUIRED_FIELDS[i];
            if (!formObj[field]) {
                hasErrors = true;
                fieldErrors[field] = "This field is required.";
            }
        }

        setErrors(fieldErrors);
        return hasErrors;
    };

    const handleChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event && event.preventDefault && event.preventDefault();
        const hasErrors = validateFields(data);
        if (!hasErrors) {
            onSubmit({ ...data });
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <Stack spacing="6">
                <Stack spacing="5">
                    <FormControl isRequired>
                        <FormLabel htmlFor="email">Email</FormLabel>
                        <Input
                            id="email"
                            type="email"
                            name="email"
                            onChange={handleChange}
                        />
                        {errors.email && (
                            <FormErrorMessage>
                                Email is required.
                            </FormErrorMessage>
                        )}
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel htmlFor="password">Password</FormLabel>
                        <Input
                            id="password"
                            type="password"
                            name="password"
                            onChange={handleChange}
                        />
                        {errors.password && (
                            <FormErrorMessage>
                                Password is required.
                            </FormErrorMessage>
                        )}
                    </FormControl>
                </Stack>
                <HStack justify="space-between">
                    <Button
                        type="button"
                        variant="link"
                        colorScheme="blue"
                        size="sm"
                    >
                        Forgot password?
                    </Button>
                </HStack>
                <Stack spacing="6">
                    <Button
                        type="submit"
                        colorScheme="blue"
                        isLoading={isLoading}
                        loadingText="Signing In"
                    >
                        Sign In
                    </Button>
                    <HStack>
                        <Divider />
                        <Text fontSize="sm" whiteSpace="nowrap" color="muted">
                            or continue with
                        </Text>
                        <Divider />
                    </HStack>
                    <Button isFullWidth>
                        <GoogleIcon boxSize="6" />
                        <Text>Sign in with Google</Text>
                    </Button>
                </Stack>
            </Stack>
        </form>
    );
};

SignInView.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    onSubmit: PropTypes.func.isRequired,
};

export default SignInView;
