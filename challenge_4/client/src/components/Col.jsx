import React from "react";


class Col extends React.Component {
    constructor(props) {
        super(props);
        this.play = this.play.bind(this);
    }

    play(col) {
        debugger;
        this.props.playgame(col);
    }

    render() {

        return (
            <td>
                <div className="cell" onClick={() => { this.play(this.props.columnIndex) }}>
                    <div>{this.props.value}</div>
                </div>
            </td >
        );
    }
}

export default Col;