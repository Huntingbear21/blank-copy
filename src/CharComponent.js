import React from 'react';

class CharComponent extends React.Component {
    constructor(props) {
        super(props);
        this.buttonOnClick = this.buttonOnClick.bind(this);
        this.state = {
            copied: 0
        }
    }

    buttonOnClick() {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(this.props.char)
            .then(() => {
                this.setState({copied: 1});
            })
            .catch(() => {
                this.setState({copied: 2});
            })
        }
    }

    render() {
        return (
            <div className="char-container">
                <p className="char-view-text">{this.props.char}</p>
                <p className="char-name">{this.props.name}</p>
                <p className="char-unicode">{this.props.unicode}</p>
                <a
                onClick={this.buttonOnClick}>{this.state.copied === 0 ? "복사" : this.state.copied === 1 ? "복사 완료" : "복사 실패"}</a>
            </div>
        )
    }
}

export default CharComponent;
