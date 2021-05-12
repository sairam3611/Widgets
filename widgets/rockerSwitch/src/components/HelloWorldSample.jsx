import { Component, createElement } from "react";

export class HelloWorldSample extends Component {
    render() {
        return <div className="widget-hello-world">Hello {this.props.sampleText}
                      <label class="rocker">
                            <input type="checkbox"/>
                            <span class="switch-left">On</span>
                            <span class="switch-right">Off</span>
                        </label>
        
        
               </div>;
    }
}
