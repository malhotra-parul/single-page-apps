import React from "react";
import PropTypes from "prop-types";

class Search extends React.Component{
    state={
        text : ""
    }

    static propTypes = {
        searchUsers: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired
    };

    onChange = (e)=>{
        this.setState({[e.target.name] : e.target.value});
    };

    onSubmit = (e)=>{
        e.preventDefault();
        this.props.searchUsers(this.state.text);
        this.setState({text: ""})
    }
    render(){
        return(
            <div>
                <form className="form" onSubmit={this.onSubmit}>
                    <input type="text" 
                    name="text" 
                    placeholder="Search for users..." 
                    value={this.state.text}
                    onChange={this.onChange}/>
                    <input type="submit" 
                           value="Search" 
                           className="btn btn-dark btn-block"
                           onClick={this.props.searchUsers}/>
                </form>
                <button className="btn btn-light btn-block" 
                        onClick={this.props.clearUsers}>Clear</button>
            </div>
        )
    }
};



export default Search;