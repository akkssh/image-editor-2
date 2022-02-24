import React, { Component } from "react";
import { ChakraProvider } from "@chakra-ui/react";

import Routes from "./routes/Routes";
import SupabaseService from "./services/supabase.service";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            renderView: false,
        };
    }

    componentDidMount() {
        SupabaseService.initialize().then(
            (res) => {
                this.setState({ renderView: true });
            },
            (err) => {
                console.log({ err });
            }
        );
    }

    render() {
        const { renderView } = this.state;

        return <ChakraProvider>{renderView && <Routes />}</ChakraProvider>;
    }
}

export default App;
