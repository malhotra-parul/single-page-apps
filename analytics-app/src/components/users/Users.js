import React, { Component } from "react";
import UserItem from "./UserItem";

class Users extends Component{
    state= {
        users: [
            {
                id: "id",
                login: "malhotra-parul",
                avatar_url: "https://avatars1.githubusercontent.com/u/48578815?v=4",
                html_url: "https://github.com/malhotra-parul"
            },
            {
                id: '2',
                login: 'ry',
                avatar_url: 'https://avatars1.githubusercontent.com/u/80?v=4',
                html_url: 'https://github.com/ry'
            },
            {
                id: '3',
                login: 'dan',
                avatar_url: 'https://avatars1.githubusercontent.com/u/219?v=4',
                html_url: 'https://github.com/dan'
            }
        ]
    };

    render(){
        return(
            <div style={userStyle}>
                {
                    this.state.users.map(user => (

                    <UserItem key={user.id} user={user}/>
                    ))
                }
            </div>
        );
    }
}

const userStyle = {
    display : 'grid',
    gridTemplateColumns : 'repeat(3,1fr)',
    gridGap : '1rem'
};

export default Users;