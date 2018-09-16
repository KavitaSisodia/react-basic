import React, { Component } from 'react';
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
import { addUser } from '../Actions/fetchUsers'
import { connect } from 'react-redux';

class Registration extends Component {
constructor(props){
    super(props);
    this.state={
        uname:'',
        unameerror:'',
        ufname:'',
        ufnameerror:'',
        uemail:'',
        uemailerror:'',
        uaddstreet:'',
        uaddcity:'',
        uaddzip:'',
        uphone:'',
        uphoneerror:'',
        isuseradded:''
    }
}
onChange(event){
    this.setState({[event.target.name]:[event.target.value]})
    }

 validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

validateForm= () =>
{
let isError= false;
const errors={};


if(String(this.state.uname).length < 5)
{
    isError=true;
    console.log(this.state.uname.length)
    errors.unameerror='username should not be blank and have alleast 5 characters';
}
if (String(this.state.ufname).length < 5 )
{
    isError=true;
    console.log(this.state.ufname.length)
    errors.ufnameerror='user full name should not be blank and have atleast 5 char';
}
if(!this.validateEmail(this.state.uemail))
{
    isError=true;

    errors.uemailerror='not a valid Email id';
}

if(String(this.state.uphone).length!==10)
{
    isError=true;
    errors.uphoneerror='not a valid Phone number';
}
if(isError)
{
    this.setState({...this.state,...errors});
}
return isError;
}

onSubmit= (e) => {
e.preventDefault();
let err=this.validateForm();

const nuser={
    name:this.state.uname,
    username:this.state.ufname,
    uemail:this.state.uemail,
    uaddcity:this.state.uaddcity,
    uaddstreet:this.state.uaddstreet,
    uaddzip:this.state.uaddzip,
    uphone:this.state.uphone
}
if(!err)
{
this.props.addUser(nuser);
console.log('user added');
this.props.history.push({pathname:'/viewuser', state:{nuser}})
}

}
    
    render() {
        return (
            <div>
                <TextField type='text' name='uname' hintText='Enter Name' value={this.state.uname}
                 onChange={(e) =>this.onChange(e)} errorText={this.state.unameerror} />
                <br/>
                 <TextField type='text' name='ufname' hintText='Enter Full Name' value={this.state.ufname}
                 onChange={(e) =>this.onChange(e)} errorText={this.state.ufnameerror} />
                 <br/>
                 <TextField type='text' name='uemail' hintText='Enter Email' value={this.state.uemail}
                 onChange={(e) =>this.onChange(e)} errorText={this.state.uemailerror} />
                 <br/>
                 <TextField type='text' name='uaddstreet' hintText='Enter Street' value={this.state.uaddstreet}
                 onChange={(e) =>this.onChange(e)}  />
                 <br/>
                 <TextField type='text' name='uaddcity' hintText='Enter City' value={this.state.uaddcity}
                 onChange={(e) =>this.onChange(e)} />
                 <br/>
                 <TextField type='text' name='uaddzip' hintText='Enter Zip Code' value={this.state.uaddzip}
                 onChange={(e) =>this.onChange(e)}  />
                 <br/>
                 <TextField type='text' name='uphone' hintText='Enter Phone number' value={this.state.uphone}
                 onChange={(e) =>this.onChange(e)}  errorText={this.state.uphoneerror} />
                 <br/>
                 <RaisedButton label='Submit' onClick={(e) => this.onSubmit(e)} primary/>
            </div>
        );
    }
}

export default connect(null,{addUser}) (Registration);