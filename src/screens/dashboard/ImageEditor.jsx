import { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import {
    // VisuallyHidden,
    Box,
    FormControl,
    FormLabel,
    Switch,
} from "@chakra-ui/react";

const ImageEditor = ({ url }) => {
    // const [isGrayscale, setGrayscale] = useState(false);
    // const imageRef = useRef(null);
    const canvasRef = useRef(null);

    const makeGrayScale = () => {
        const canvas = document.getElementById("canvas");
        const context = canvas.getContext("2d");
        // const context = canvasRef.current.getContext("2d");
        let imgData = context.getImageData(
            0,
            0,
            context.canvas.width,
            context.canvas.height
        );

        let pixels = imgData.data;
        for (var i = 0; i < pixels.length; i += 4) {
            let lightness = parseInt(
                (pixels[i] + pixels[i + 1] + pixels[i + 2]) / 3
            );

            pixels[i] = lightness;
            pixels[i + 1] = lightness;
            pixels[i + 2] = lightness;
        }
        console.log({ pixels });
        // imageRef.current.onload = () => {
        //     context.putImageData(imgData, 0, 0);
        // };
        context.putImageData(imgData, 0, 0);
    };

    useEffect(() => {
        const context = canvasRef.current.getContext("2d");

        const image = new Image();
        image.src = url;
        image.crossOrigin = "*";
        image.onload = () => {
            context.drawImage(
                image,
                0,
                0,
                canvasRef.current.width,
                canvasRef.current.height
            );
        };
    }, [url]);

    return (
        <Box>
            <canvas id="canvas" ref={canvasRef} width="400" height="500" />
            {/* <VisuallyHidden>
                <Image
                    id="image"
                    boxSize="500px"
                    src={url}
                    alt="image"
                    rounded={"lg"}
                />
            </VisuallyHidden> */}
            <FormControl display="flex" alignItems="center" mt="4">
                <FormLabel htmlFor="greyscale" mb="0">
                    Convert to Greyscale
                </FormLabel>
                <Switch id="greyscale" onChange={() => makeGrayScale()} />
            </FormControl>
        </Box>
    );
};

ImageEditor.propTypes = {
    url: PropTypes.string.isRequired,
};

export default ImageEditor;
