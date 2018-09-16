import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../Actions/fetchUsers'
import { withRouter } from 'react-router';
import { Redirect, BrowserRouter, Route } from 'react-router-dom';
import Welcome from './Welcome';




class UserForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            useremail: '',
            isAuthorized: false,
            nameerror: '',
            emailerror: ''
        }
    }
    componentDidMount() {
        this.props.fetchUsers();
    }

    onSubmit = (e) => {
        e.preventDefault();
        // const authorized = {};
        console.log('Onsubmiit event occurs');
        console.log(this.props.users);
        console.log(this.state.username);
        let findUser = this.props.users.find((user) => {
            console.log(user.username)
            return (user.username == this.state.username) && (user.email == this.state.useremail)
        })
        console.log(findUser);
        if (findUser != undefined) {
            console.log("auth user");
            this.setState({
                isAuthorized: true
            }, this.changeState);
            console.log(this.state.isAuthorized);
        }
        else{
            console.log('after setstate' + this.state.isAuthorized);
            this.changeState();
        }
       


    }

    changeState() {
        if (this.state.isAuthorized == true) {
            console.log(this.state.isAuthorized + ' inside');
            return this.props.history.push({ pathname: '/Welcome', state: { data: this.state } });
        }
        console.log('else part');
        return this.props.history.push('/Register');

    }

    onChange(event) {
        this.setState({ [event.target.name]: [event.target.value] })
    }

    
    render() {
        return (
            <div>
            
                <form onSubmit={(e) => this.onSubmit(e)}>
                    <input type='text' name='username' placeholder='UserName' onChange={(e) => this.onChange(e)}
                        value={this.state.username} />
                    <br />
                    <input type='text' name='useremail' placeholder='UserEmail' onChange={(e) => this.onChange(e)}
                        value={this.state.useremail} />
                    <br />
                    <button type='submit'>Submit</button>

                </form>

            </div>
        );
    }
}



function mapStateToProps(state) {
    return {
        users: state.Users.UsersData
    };
}

export default
    withRouter(connect(
        mapStateToProps, { fetchUsers }
    )(UserForm));