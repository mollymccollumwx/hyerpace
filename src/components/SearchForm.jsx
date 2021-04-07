import React from "react";

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
          // max="10"
          className="form-control"
          id="term"
          aria-describedby="form"
          placeholder="Enter a number 1-10"
          
        />
        <button type="submit" className="btn btn-dark">
        Submit
      </button>
      </div>

      
    </form>
  );
}

export default SearchForm;
