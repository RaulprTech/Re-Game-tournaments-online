import React, { Component } from 'react';

class Button extends Component{
    render() {
        return (
            <div className="row text-center m-3">
                <div className="container">
                    <a type="button" href={this.props.link} className={"btn btn-lg btn-success text-white " + this.props.more}>{this.props.name}</a>
                </div>
            </div>
        );
    }
}
export default Button;