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
                {this.state.isForm1 ? null :
                    <div>
                        <h3>Checkout Form</h3>
                        <input type="submit" value="Search" onClick={this.chekoutClick} />
                    </div>
                }
                {this.state.isForm1 ? <F1 /> : null}
            </div>

        )
    }
}

class F1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isForm2: false,
            userName: ''
        }

        this.nextForm1 = this.nextForm1.bind(this);
        this.handleUserChange = this.handleUserChange.bind(this)
    }

    nextForm1() {
        this.setState({
            isForm2: true
        });
    }
    handleUserChange(e) {
        this.setState({
            userName: e.target.value
        });
    }

    render() {
        return (
            <div>
                {this.state.isForm2 ? null :
                    <div>
                        <h3>User Info Form</h3>
                        <label>Name: </label>
                        <input type="text" name="name" id="username" onChange={this.handleUserChange} />
                        <br /> <br />
                        <label>Email: </label>
                        <input type="email" id="useremail" />
                        <br /> <br />
                        <label>Password: </label>
                        <input type="password" id="userpassword" />
                        <br /> <br />
                        <input type="submit" value="Next" onClick={this.nextForm1} />
                    </div>
                }
                {this.state.isForm2 ? <F2 /> : null}
            </div >
        )
    }
}


class F2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isForm3: false
        }
        this.nextForm2 = this.nextForm2.bind(this);
    }
    nextForm2() {
        this.setState({
            isForm3: true
        });
    }

    render() {
        return (
            <div>
                {
                    this.state.isForm3 ? null :
                        <div>
                            <h3>User Ship address Form</h3>
                            <label>ShipAddres 1: </label>
                            <input type="text" name="name" id="shipAddr1" />
                            <br /> <br />
                            <label>ShipAddres 2: </label>
                            <input type="text" id="shipAddr2" />
                            <br /> <br />
                            <label>City: </label>
                            <input type="text" id="city" />
                            <br /> <br />
                            <label>State: </label>
                            <input type="text" id="state" />
                            <br /> <br />
                            <label>Zip: </label>
                            <input type="text" pattern="[0-9]{5}" title="Five digit zip code" />
                            <br /> <br />
                            <label>Phone: </label>
                            <input id="telNo" name="telNo" type="tel" />
                            <br /> <br />
                            <input type="submit" value="Next" onClick={this.nextForm2} />
                        </div>
                }
                {this.state.isForm3 ? <F3 /> : null}
            </div>
        )
    }
}


class F3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isForm4: false
        }
        this.nextForm3 = this.nextForm3.bind(this);
    }
    nextForm3() {
        this.setState({
            isForm4: true
        });
    }
    render() {
        return (
            <div>
                {
                    this.state.isForm4 ? null :
                        <div>
                            <h3>User Credit Card Form</h3>
                            <label>Credit card number: </label>
                            <input type="text" id="ccnum" name="cardnumber" placeholder="1111-2222-3333-4444" />
                            <br /> <br />
                            <label>Exp Month: </label>
                            <input type="text" id="expmonth" name="expmonth" placeholder="September" />
                            <br /> <br />
                            <label>Exp Year: </label>
                            <input type="text" id="expyear" name="expyear" placeholder="2018" />
                            <br /> <br />
                            <label>CVV: </label>
                            <input type="text" id="cvv" name="cvv" placeholder="352" />
                            <br /><br />
                            <input type="submit" value="Next" onClick={this.nextForm3} />
                        </div>
                }
                {this.state.isForm4 ? <App /> : null}
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("app"));