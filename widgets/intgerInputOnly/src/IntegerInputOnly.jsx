import { Component, createElement } from "react";

import { HelloWorldSample } from "./components/HelloWorldSample";
import "./ui/IntegerInputOnly.css";

export default class IntegerInputOnly extends Component {
    render() {
        return <HelloWorldSample sampleText={this.props.sampleText} />;
    }
}
