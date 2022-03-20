import React from "react";

class Tech extends React.Component {
    render() {
        return (
            <a className="tech" href={this.props.href} title={this.props.name}>
                <img
                    src={this.props.img}
                    width="50px"
                    alt={this.props.name}
                />
            </a>
        )
    }
}

export default Tech