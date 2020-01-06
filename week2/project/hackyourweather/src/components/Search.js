import React from 'react';
import ReactDOM from 'react-dom';

const Search = (props) => {

    return (
      <form onSubmit={props.submitHandler}>
       <label for="search">
         <input type="text" name="search" id="search" placeholder="Enter the city name" required />&nbsp;
         <button type="submit">Submit</button>
       </label>
      </form>
    );
}
export default Search;
