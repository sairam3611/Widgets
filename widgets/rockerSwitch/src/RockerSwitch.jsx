import { Component, createElement } from "react";

import { HelloWorldSample } from "./components/HelloWorldSample";
import "./ui/RockerSwitch.css";

export default class RockerSwitch extends Component {
    render() {
        return <HelloWorldSample sampleText={this.props.sampleText} />;
    }
}
