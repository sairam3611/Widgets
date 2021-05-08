import { Component, createElement } from "react";

import { HelloWorldSample } from "./components/HelloWorldSample";
import "./ui/FileUploader.css";

export default class FileUploader extends Component {
    render() {
        return <HelloWorldSample sampleText={this.props.sampleText} />;
    }
}
