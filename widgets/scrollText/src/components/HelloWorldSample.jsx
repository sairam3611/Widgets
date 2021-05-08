import { Component, createElement } from "react";


export class HelloWorldSample extends Component {
    constructor(props){
        super(props);
        this.scrolltext='';
        this.source=this.props.dataSourceVal;
        this.dsource= this.props.dynamicTextVal;
        this.ssource = this.props.staticTextVal;    
        this.getVal= this.getVal.bind(this);    
    }
    // function used to get scroll text based on the source selected.....
    getVal=()=>{
        
        if(this.source ==="static")
        return this.ssource
        else{
            
        return this.props.dynamicTextVal
    }
    }
    render() {
        const {staticTextVal,scrollDirectionVal,dataSourceVal,dynamicTextVal}= this.props;
        
        return <div className="widget-hello-world"> 
                  
                      <marquee  behavior="scroll" direction={scrollDirectionVal} onmouseover="this.stop()" onmouseout="this.start()"> {this.getVal()}</marquee>
                  
        </div>;
    }
}
