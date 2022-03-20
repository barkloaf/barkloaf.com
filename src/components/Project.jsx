import React from "react"

class Project extends React.Component {
    render() {
        return (
            <a className="item project" href={this.props.href}>
                <img
                    className="project-img"
                    src={this.props.img}
                    height={this.props.height || 100}
                    alt={this.props.title}
                />

                <p>
                    <span className="project-title">
                        <b><u>{this.props.title}</u></b>
                    </span>
                    <br />
                    <span>
                        {this.props.text}
                    </span>
                </p>
            </a>
        )
    }
}

export default Project