import React from "react";
import UserItem from "./UserItem";
import Spinners from "../layouts/Spinner";

const Users = ({users, loading})=>{
        if(loading){
            return <Spinners />;
        }else{
            return(
                <div style={userStyle}>
                    {
                        users.map(user => (
    
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