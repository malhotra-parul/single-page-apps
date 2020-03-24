import React, { Fragment, Component } from "react";

class AutoCompleteSearch extends Component{
    state = {
        query : "",
        filteredSuggestions : [],
        showSuggestions : false
    };

    onSubmit = (event)=>{
        this.setState({
            query : "",
            filteredSuggestions : [],
            showSuggestions: false
        });
        event.preventDefault();
    };

    onChange = (event)=>{
        const value = event.target.value;
        const { items } = this.props;
        const regex = new RegExp(`^${value}`, "i");
        
        const filteredSuggestions = items.sort().filter(element => regex.test(element));
        console.log(filteredSuggestions);
        this.setState({
            query : value,
            filteredSuggestions : filteredSuggestions
        });
    };

    

    render(){
        const {
            onChange,
            onClick,
            onSubmit,
            state : { query }
        } = this;
        let suggestionsList;
    return (
        <Fragment>
            <div>
            <form onSubmit={onSubmit}>
            <input type="text" 
                   placeholder="Search..."
                   onChange={onChange}
                   value={query}
                   />
            <button type="submit">Submit</button>
            </form>
            {suggestionsList}
            </div>
        </Fragment>
    );
    }

};

export default AutoCompleteSearch;