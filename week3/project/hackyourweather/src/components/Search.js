import React from 'react';
import ReactDOM from 'react-dom';

const Search = (props) => {

    return (
      <form onSubmit={props.submitHandler}>
       <label for="search">
         <input type="text" name="search" id="search" placeholder="Enter the city name" required onChange={props.changeHandler} />&nbsp;
         <button type="submit" disabled={!props.searchValue}>Submit</button>
       </label>
      </form>
    );
}
export default Search;
