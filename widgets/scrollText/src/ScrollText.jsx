import { Component, createElement } from "react";

import { HelloWorldSample } from "./components/HelloWorldSample";
import "./ui/ScrollText.css";

export default class ScrollText extends Component {
    render() {
        return <HelloWorldSample staticTextVal={this.props.staticText}
                                 scrollDirectionVal={this.props.scrollDirection}
                                 dataSourceVal={this.props.dataSource}
                                 dynamicTextVal={this.props.dynamicText.value}
                                 />;
    }
}
