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
        const query = event.currentTarget.value;
        const { items } = this.props;
        const regex = new RegExp(`${query}`, "gi");
        
        const filteredSuggestions = items.sort().filter(element => regex.test(element));
        console.log(filteredSuggestions);
        this.setState({
            query,
            filteredSuggestions,
            showSuggestions: true,
            activeOption : 0
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
        const { state:{activeOption, filteredSuggestions}} = this;
        if(event.keyCode === 13){
            this.setState({
                activeOption: 0,
                showSuggestions: false,
                query: filteredSuggestions[activeOption]
              });
        }else if (event.keyCode === 38){
            if(activeOption === 0){
                return;
            }
            this.setState({
                activeOption: activeOption -1  
            })
        }else if(event.keyCode === "40"){
            console.log("event fired")
            if(activeOption - 1 === filteredSuggestions.length){
                return;
            }
            this.setState({
                activeOption : activeOption +1
            });
        }
    };

    render(){
        const {
            onChange,
            onClick,
            onSubmit,
            onKeyPress,
            state : { query, filteredSuggestions, showSuggestions }
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
                   onKeyDown={onKeyPress}
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