import React from "react";

class FooterLink extends React.Component {
    render() {
        return (
            <a className="footer-link" href={this.props.href}>
                <img
                    src={this.props.img}
                    width="40px"
                    alt={this.props.name}
                />
            </a>
        )
    }
}

export default FooterLink