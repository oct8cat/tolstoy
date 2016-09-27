import React from 'react';

export default class Chatik extends React.Component {
    state = {toggled: false, open: false};

    toggle() {
        if (!this.state.toggled) {
            setTimeout(() => {
                this.setState({toggled: true})
            }, 550)
        }
        this.setState({
            open: !this.state.open
        });
    }

    link() {
        return this.state.toggled
            ? "https://chat.golos.io"
            : ""
    }

    iconUrl() {
        return "https://avatars1.githubusercontent.com/RocketChat?&s=48"
    }

    chatikClass() {
        return 'RocketChat '
    }

    stateClass() {
        return this.state.open
            ? "open"
            : ""
    }

    render() {
        return <div className={this.chatikClass() + this.stateClass()}>
            <button className={this.stateClass()} style={{

            }} onClick={this.toggle.bind(this)}><img src={this.iconUrl()}/></button>
            <div className="sidebar" style={{

            }}>
                <iframe src={this.link()} width="100%" height="100%"/>
            </div>
        </div>;
    }
}
