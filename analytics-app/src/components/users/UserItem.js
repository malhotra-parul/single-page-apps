import React, {Component} from "react";

class UserItem extends Component{
    state = {
        id: "id",
        login: "malhotra-parul",
        avatar_url: "https://avatars1.githubusercontent.com/u/48578815?v=4",
        html_url: "https://github.com/malhotra-parul"
    };

    render(){
        const {login, avatar_url, html_url} = this.state;
        return(
            <div className="card text-center">
                <img src={avatar_url} alt="" className="round-img" 
                style={{width: "120px"}} />
                <h3>
                    {login}
                </h3>
                <div>
                    <a href={html_url} className="btn btn-dark btn-sm my-1">
                        {' '}
                        Git Profile
                    </a>
                </div>
            </div>
        );
    }
}

export default UserItem;