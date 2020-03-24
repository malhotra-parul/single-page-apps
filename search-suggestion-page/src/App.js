import React from "react";
import AutoCompleteSearch from "./AutoCompleteSearch";

 const App = ()=>{

    const items = ["Apple", "Banana", 
    "Cucumber", "Donughts", "Eggs", "Fish", "Goat", 
    "Goat Cheese", "Hamburger", "Ham", "Apes", "Boxes",
    "Coats", "Cats", "Deers", "Fast food"];

  return (
    <div>
        Hello from App component!
        <AutoCompleteSearch items={items}/>
    </div>
  );  
};

export default App;