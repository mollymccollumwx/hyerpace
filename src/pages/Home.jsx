import React, { useEffect, useState } from "react";
import Cards from "../components/Cards/Cards";
import API from "../utils/API";
import SearchForm from "../components/SearchForm/SearchForm";
import Hero from "../components/Hero/Hero";
import "./Home.css";


const Home = () => {
  // react hooks
  const [people, setPeople] = useState([]);
  const [search, setSearch] = useState("");
  const [formError, setFormError] = useState({});

  // API GET request to SWAPI on page load
  useEffect(() => {
    API.getPeople()
      .then((res) => {
        // console.log(res.data.results);
        setPeople(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // custom functions

  // gets the value inputed by the user for the search form
  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  // API GET request based on user input
  const handleFormSubmit = (e) => {
    e.preventDefault();
    formValidation();

    API.getPeople()
      .then((res) => {
        const people = res.data.results;
        const slicedArray = people.slice(0, search);
        setPeople(slicedArray);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // simple for validation and error message if form input is correct
  const formValidation = () => {
    const formError = {};
    let isValid = true;

    if (search <= 0 || search > 10) {
      formError.formNumber = "Enter a number between 1-10 you must.";
      isValid = false;
    } 

    setFormError(formError);
    return isValid;
  };

  return (
    <>
      {/* hero and site instructions */}
      <Hero />
      <section className="results">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6 mt-4 text-center">
            <div><i className="fas fa-journal-whills fa-5x"></i></div>
              <h1 className="fw-bold">nuuawh!</h1>
              <h6 className="fw-light">(That's Wookiee for hello.)</h6>
              <h6 className="mt-5 mb-3 fs-5 fw-bold">
                Use Hypersearch to find your favorite Star Wars characters.
                Select the number of characters you want displayed by using the
                form below.
              </h6>
            </div>
          </div>

          {/* search form component with props */}
          <div className="row justify-content-center">
            <div className="col-6">
              <SearchForm
                handleInputChange={handleInputChange}
                result={search}
                handleFormSubmit={handleFormSubmit}
              />
              {/* form error message */}
              {Object.keys(formError).map((key) => {
                return (
                  <div
                    className="justify-content-center"
                    style={{ color: "red" }}
                  >
                    {formError[key]}
                  </div>
                );
              })}
            </div>
          </div>

          {/* maps over card component */}
          <div className="row">
            {/* used index for the unique ID */}
            {people.map(function (person, index) {
              return (
                <div className="col-12 col-md-6 col-lg-4 mt-4" key={index}>
                  <Cards
                    name={person.name}
                    gender={person.gender}
                    birthYear={person.birth_year}
                    hairColor={person.hair_color}
                    skinColor={person.skin_color}
                    eyeColor={person.eye_color}
                    homeworld={person.homeworld}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
