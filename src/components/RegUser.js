import React, { Component } from 'react';

export default function(CheckComponent){

    class RegUser extends Component {
        render() {
            return (
               <CheckComponent {...this.props}/>
            );
        }
    }
    
    return RegUser;
}
