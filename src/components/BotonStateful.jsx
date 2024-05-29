import { Component } from "react";

class BotonStateful extends Component {
    constructor(props) {
        super(props);
        this.state = {
            styles: { background: 'blue', color: 'white' }
        };
    }

    render() {
        return (
            <button {...this.props} style={this.state.styles}>
                {this.props.children}
            </button>
        );
    }
}

export default BotonStateful;
