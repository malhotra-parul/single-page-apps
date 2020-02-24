import React from "react";
import UserItem from "./UserItem";
import Spinners from "../layouts/Spinner";
import PropTypes from "prop-types";

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

Users.propTypes = {
    users : PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
};

const userStyle = {
    display : 'grid',
    gridTemplateColumns : 'repeat(3,1fr)',
    gridGap : '1rem'
};

export default Users;