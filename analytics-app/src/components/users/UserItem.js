import React, {Component} from "react";

class UserItem extends Component{
    state = {
        id: "id",
        login: "malhotra-parul",
        avatar_url: "https://avatars1.githubusercontent.com/u/48578815?v=4",
        html_url: "https://github.com/malhotra-parul"
    };

    render(){
        return(
            <div className="card text-center">
                <img src={this.state.avatar_url} alt="" className="round-img" 
                style={{width: "120px"}} />
                <h3>
                    {this.state.login}
                </h3>
                <div>
                    <a href={this.state.html_url} className="btn btn-dark btn-sm my-1">
                        {' '}
                        Git Profile
                    </a>
                </div>
            </div>
        );
    }
}

export default UserItem;