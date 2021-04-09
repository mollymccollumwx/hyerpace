import React from "react";
import "./SearchForm.css"

// props passed down from Home.jsx 
function SearchForm(props) {
  return (
    <form onSubmit={props.handleFormSubmit}>
      <div className="mb-3 input-group">
        <input
          value={props.search}
          onChange={props.handleInputChange}
          list="term"
          type="number"
          min="1"
          className="form-control"
          id="term"
          aria-describedby="form"
          placeholder="Enter a number 1-10"
          
        />
        <button type="submit" className="btn btn-warning">
        Submit
      </button>
      </div>

      
    </form>
  );
}

export default SearchForm;
