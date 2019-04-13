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
            userId: ''
        }

        this.nextForm1 = this.nextForm1.bind(this);

    }

    nextForm1(e) {
        let rm = this;
        e.preventDefault();
        $.ajax({
            method: 'POST',
            url: '/upload_user',
            data: $("#userForm").serialize(),
            success: function (data) {
                debugger;
                console.log("posted user info", data);
                rm.setState({
                    userId: data,
                    isForm2: true
                });
            }
        });

    }

    render() {
        return (
            <div>
                {this.state.isForm2 ? null :
                    <div>
                        <form id="userForm" onSubmit={this.nextForm1}>
                            <h3>User Info Form</h3>
                            <label>Name: </label>
                            <input type="text" name="username" id="username" />
                            <br /> <br />
                            <label>Email: </label>
                            <input type="email" name="useremail" id="useremail" />
                            <br /> <br />
                            <label>Password: </label>
                            <input type="password" name="userpassword" id="userpassword" />

                            <br /> <br />
                            <button>Next</button>
                        </form>
                    </div>
                }
                {this.state.isForm2 ? <F2 userId={this.state.userId} /> : null}
            </div >
        )
    }
}


class F2 extends React.Component {
    constructor(props) {
        debugger;
        super(props);
        this.state = {
            isForm3: false,
            userId: props.userId
        }
        this.nextForm2 = this.nextForm2.bind(this);
    }
    nextForm2(e) {
        // this.setState({
        //     isForm3: true
        // });

        let rm = this;
        e.preventDefault();
        $.ajax({
            method: 'POST',
            url: '/upload_addr',
            //data: { formdata: $("#addrForm").serialize(), userId: this.state.userId },
            data: $("#addrForm").serialize(),
            success: function (data) {
                debugger;
                console.log("posted user address", data);
                rm.setState({
                    isForm3: true
                });
            }
        });
    }

    render() {
        return (
            <div>
                {
                    this.state.isForm3 ? null :
                        <div>
                            <form id="addrForm" onSubmit={this.nextForm2}>
                                <h3>User Ship address Form</h3>
                                <label>ShipAddres 1: </label>
                                <input type="text" name="shipAddr1" id="shipAddr1" />
                                <br /> <br />
                                <label>ShipAddres 2: </label>
                                <input type="text" name="shipAddr2" id="shipAddr2" />
                                <br /> <br />
                                <label>City: </label>
                                <input type="text" name="city" id="city" />
                                <br /> <br />
                                <label>State: </label>
                                <input type="text" name="state" id="state" />
                                <br /> <br />
                                <label>Zip: </label>
                                <input type="text" name="zip" id="zip" pattern="[0-9]{5}" title="Five digit zip code" />
                                <br /> <br />
                                <label>Phone: </label>
                                <input id="telNo" name="telNo" id="telNo" type="tel" />
                                <input type="hidden" name="userID" id="userID" value={this.state.userId} />
                                <br /> <br />
                                <button>Next</button>
                            </form>
                        </div>
                }
                {this.state.isForm3 ? <F3 userId={this.state.userId} /> : null}
            </div>
        )
    }
}


class F3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isForm4: false,
            userId: props.userId
        }
        this.nextForm3 = this.nextForm3.bind(this);

    }

    nextForm3(e) {
        let rm = this;
        e.preventDefault();
        $.ajax({
            method: 'POST',
            url: '/upload_creditcard',
            //data: { formdata: $("#addrForm").serialize(), userId: this.state.userId },
            data: $("#ccForm").serialize(),
            success: function (data) {
                debugger;
                console.log("posted user cc", data);
                rm.setState({
                    isForm4: true
                });
            }
        });
    }
    render() {
        return (
            <div>
                {
                    this.state.isForm4 ? null :
                        <div>
                            <form id="ccForm" onSubmit={this.nextForm3}>
                                <h3> User Credit Card Form</h3>
                                <label>Credit card number: </label>
                                <input type="text" id="cardnumber" name="cardnumber" placeholder="1111-2222-3333-4444" />
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
                                <input type="hidden" name="userID" id="userID" value={this.state.userId} />
                                <br /> <br />
                                <button>Next</button>
                            </form>
                        </div>
                }
                {this.state.isForm4 ? <Checkout userId={this.state.userId} /> : null}
            </div>
        )
    }
}


class Checkout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isForm5: true,
            isForm6: false,
            userId: props.userId,
            userInfo: {}
        }
        this.Redirect = this.Redirect.bind(this);
        //this.nextForm4 = this.nextForm4.bind(this);
    }
    componentDidMount() {
        debugger;
        let rm = this;
        $.ajax({
            method: 'get',
            url: '/get_userInfo',
            data: rm.state.userId,
            success: function (data) {
                debugger;
                console.log("get user info", data);
                rm.setState({
                    isForm5: false,
                    userInfo: data
                });
            }
        });
    }
    Redirect() {
        debugger;
        this.setState({
            isForm6: true,
            isForm5: true
        })
    }
    render() {
        return (
            <div>
                {
                    this.state.isForm5 ? null :
                        <div>
                            <h3>User Info:</h3>
                            <label>UserName :  {this.state.userInfo.UserName}</label>
                            <br /> <br />
                            <label>UserEmail :  {this.state.userInfo.UserEmail}</label>
                            <br /> <br />
                            <label>UserPassword :  {this.state.userInfo.Password}</label>
                            <br /> <br />
                            <h3>User Info Ship Address:</h3>
                            <label>ShipAddress1 :  {this.state.userInfo.ShipAddress1}</label>
                            <br /> <br />
                            <label>ShipAddress2 :  {this.state.userInfo.ShipAddress2}</label>
                            <br /> <br />
                            <label>City :  {this.state.userInfo.City}</label>
                            <br /> <br />
                            <label>State :  {this.state.userInfo.State}</label>
                            <br /> <br />
                            <label>Zip :  {this.state.userInfo.Zip}</label>
                            <br /> <br />
                            <label>Phone :  {this.state.userInfo.Phone}</label>
                            <br /> <br />
                            <h3>User Info Credit Address:</h3>
                            <label>CreditCard :  {this.state.userInfo.CreditCard}</label>
                            <br /> <br />
                            <label>ExpMonth :  {this.state.userInfo.ExpMonth}</label>
                            <br /> <br />
                            <label>ExpYear :  {this.state.userInfo.ExpYear}</label>
                            <br /> <br />
                            <label>cvv :  {this.state.userInfo.cvv}</label>
                            <br /> <br />
                            <button onClick={this.Redirect}>Purchase </button>
                        </div>
                }
                {this.state.isForm6 ? <App /> : null}
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById("app"));