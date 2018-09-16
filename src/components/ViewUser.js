import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../Actions/fetchUsers'

class ViewUser extends Component {
componentDidMount(){

    this.props.fetchUsers();
}

componentWillReceiveProps(nextProps){
    console.log("nextProps are");
    console.log(nextProps.usern);
    this.props.users.unshift(nextProps.usern);
    
}
    render() {
        const userp=this.props.users.map(user =>(
            <div key={user.id}>
            <p>{user.name}</p>
            </div>
        ))
        return (
            <div>
             {userp}
            </div>
        );
    }
}

function mapStateToProps(state) {
    console.log(state);
    return {
        users: state.Users.UsersData,
        usern:state.Users.user
    };
}
export default connect(mapStateToProps,{fetchUsers})(ViewUser) ;