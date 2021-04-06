import React from "react";

function SearchForm(props) {
  return (
    <form onSubmit={props.handleFormSubmit}>
      <div className="mb-3">
        <input
          value={props.search}
          onChange={props.handleInputChange}
          list="term"
          type="text"
          className="form-control"
          id="term"
          aria-describedby="form"
          placeholder="Please enter a number between 1-10"
        />
      </div>

      <button
        type="submit"
        className="btn btn-primary"
        
      >
        Submit
      </button>
    </form>
  );
}

export default SearchForm;
