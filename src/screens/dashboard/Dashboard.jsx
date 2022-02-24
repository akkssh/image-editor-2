import React, { Component } from "react";

import DashboardLayout from "../../layouts/Dashboard.layout";
import DashbaordView from "./Dashboard.view";
import SupabaseService from "../../services/supabase.service";

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: null,
            renderView: false,
            isImageUploading: false,
        };
    }

    componentDidMount() {
        this.getImages();
    }

    getImages = () => {
        SupabaseService.getImages().then(
            (res) => {
                this.setState({ images: res.data, renderView: true });
            },
            (err) => {
                this.setState({ renderView: true });
                console.log({ err });
            }
        );
    };

    addNewImage = (file) => {
        console.log({ file });
        SupabaseService.uploadImage(file);
    };

    render() {
        const { images, renderView, isImageUploading } = this.state;

        return (
            <DashboardLayout
                isImageLoading={isImageUploading}
                onImageUpload={this.addNewImage}
            >
                {renderView && <DashbaordView images={images} />}
            </DashboardLayout>
        );
    }
}

export default Dashboard;
