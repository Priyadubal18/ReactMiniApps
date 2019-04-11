class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isForm1: false
        }
        this.chekoutClick = this.chekoutClick.bind(this);
    }
    chekoutClick() {
        this.setState({
            isForm1: true
        });
    }
    render() {
        return (
            <div>
                {this.state.isForm1 ? null : <input type="submit" value="Search" onClick={this.chekoutClick} />}
                {this.state.isForm1 ? <F1 /> : null}
            </div >

        )
    }
}

class F1 extends React.Component {
    render() {
        return (
            <div>Hmm....</div>
        );
    }
}
ReactDOM.render(<App />, document.getElementById("app"));