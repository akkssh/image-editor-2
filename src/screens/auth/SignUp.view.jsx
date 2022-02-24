import {
    Button,
    FormControl,
    FormLabel,
    FormErrorMessage,
    Input,
    Stack,
} from "@chakra-ui/react";
import { useState } from "react";
import PropTypes from "prop-types";

const REQUIRED_FIELDS = ["email", "password"];

const SignUpView = (props) => {
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
                <Stack spacing="6">
                    <Button
                        type="submit"
                        colorScheme="blue"
                        isLoading={isLoading}
                        loadingText="Signing Up"
                    >
                        Sign Up
                    </Button>
                    {/* <HStack>
                        <Divider />
                        <Text fontSize="sm" whiteSpace="nowrap" color="muted">
                            or continue with
                        </Text>
                        <Divider />
                    </HStack>
                    <Button isFullWidth>
                        <GoogleIcon boxSize="6" />
                        <Text>Sign in with Google</Text>
                    </Button> */}
                </Stack>
            </Stack>
        </form>
    );
};

SignUpView.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default SignUpView;
