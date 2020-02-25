import React from "react";

class Search extends React.Component{
    render(){
        return(
            <div>
                <form className="form">
                    <input type="text" name="text" placeholder="Search for users..." />
                    <input type="submit" value="Search" className="btn btn-dark btn-block"/>
                </form>
            </div>
        )
    }
};

export default Search;