import React, {Component} from "react";

class Quote extends Component{
    render(){
        return (
            <div>
                <img src={this.props.image}/>
                <h1>
                    {this.props.firstName}
                </h1>
            </div>
        );
    }
}
export default Quote;