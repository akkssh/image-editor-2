import { Button, Flex, Heading, Spacer } from "@chakra-ui/react";

const NavBar = () => {
    let navbarPosition = "absolute";
    let navbarFilter = "none";
    let navbarBackdrop = "none";
    let navbarShadow = "none";
    let navbarBg = "none";
    let navbarBorder = "transparent";
    let secondaryMargin = "0px";
    let paddingX = "15px";

    return (
        <Flex
            position={navbarPosition}
            boxShadow={navbarShadow}
            bg={navbarBg}
            borderColor={navbarBorder}
            filter={navbarFilter}
            backdropFilter={navbarBackdrop}
            borderWidth="1.5px"
            borderStyle="solid"
            transitionDelay="0s, 0s, 0s, 0s"
            transitionDuration=" 0.25s, 0.25s, 0.25s, 0s"
            transition-property="box-shadow, background-color, filter, border"
            transitionTimingFunction="linear, linear, linear, linear"
            alignItems={{ xl: "center" }}
            borderRadius="16px"
            display="flex"
            minH="75px"
            justifyContent={{ xl: "center" }}
            lineHeight="25.6px"
            mx="auto"
            mt={secondaryMargin}
            pb="8px"
            left=""
            right="30px"
            px={{
                sm: paddingX,
                md: "30px",
            }}
            ps={{
                xl: "12px",
            }}
            pt="8px"
            top="18px"
            w={{ sm: "calc(100vw - 30px)", xl: "calc(100vw - 75px - 275px)" }}
        >
            <Flex
                w="100%"
                flexDirection={{
                    sm: "column",
                    md: "row",
                }}
                alignItems={{ xl: "center" }}
            >
                <Heading size="lg" color="white">
                    Dashboard
                </Heading>
                <Spacer />
                <Button size="lg" variant="ghost" color="white">
                    Logout
                </Button>
            </Flex>
        </Flex>
    );
};

export default NavBar;
