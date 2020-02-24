import React, { Component } from "react";

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
            <div>
                {
                    this.state.users.map(user => (

                    <div key={user.id}>{user.login}</div>
                    ))
                }
            </div>
        );
    }

}

export default Users;