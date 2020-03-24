import React, { Fragment, Component } from "react";

class AutoCompleteSearch extends Component{
    state = {
        query : "",
        filteredSuggestions : [],
        showSuggestions : false,
        activeOption : 0
    };

    onSubmit = (event)=>{
        alert(`Search query submitted is : ${this.state.query}`);
        this.setState({
            query : "",
            filteredSuggestions : [],
            showSuggestions: false, 
            activeOption : 0
        });
        event.preventDefault();
    };

    onChange = (event)=>{
        const query = event.target.value;
        const { items } = this.props;
        const regex = new RegExp(`^${query}`, "i");
        
        const filteredSuggestions = items.sort().filter(element => regex.test(element));
        console.log(filteredSuggestions);
        this.setState({
            query,
            filteredSuggestions,
            showSuggestions: true
        });
    };

    onClick = (event)=>{
        this.setState({
            query: event.currentTarget.innerText,
            filteredSuggestions: [],
            showSuggestions: false,
            activeOption: 0
        });

    };

    onKeyPress = (event)=>{

    };

    render(){
        const {
            onChange,
            onClick,
            onSubmit,
            state : { query, filteredSuggestions, showSuggestions, activeOption }
        } = this;
        let suggestionsList;

        (showSuggestions && query.length)
        ? (
            (filteredSuggestions.length) ? 
                (
                    suggestionsList = <ul>
                        {filteredSuggestions.map(
                            (suggestion , index)=> <li key={index} onClick={onClick}>{suggestion}</li>)}
                    </ul>
                ) :
                (suggestionsList = <div>No suggestions found!</div>)
        ): suggestionsList = null;

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