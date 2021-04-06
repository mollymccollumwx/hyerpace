import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";
import API from "../utils/API";
import SearchForm from "../components/SearchForm";
import axios from "axios";

const Home = () => {
  const [people, setPeople] = useState([]);
  const [search, setSearch] = useState("");
  const [formError, setFormError] = useState({});

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

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const isValid = formValidation();
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

  const formValidation = () => {
    const formError = {};
    let isValid = true;

    if (search === ""){
        formError.formEmpty = "You must enter a number. This is the way."
        isValid = false;
    }

    if (search < 0 || search > 10) {
        formError.formNumber = "Enter a number between 1-10 you must"
        isValid = false;
    }

    setFormError(formError);
    return isValid;
  }
 
  return (
    <>
      <div className="container">
        <h1 className="justify-content-center">Hypersearch</h1>
        <h6 className="justify-content-center">
          A Star Wars search engine faster than lightspeed.
        </h6>
        <h6>
          <em>Seriously, we'll make your search in less than 12 parsecs.</em>
        </h6>
        <div className="row">
          <div className="col-4">
            <SearchForm
              handleInputChange={handleInputChange}
              result={search}
              handleFormSubmit={handleFormSubmit}
            />
          </div>
          {Object.keys(formError).map((key)=> {
              return <div style={{color: "red"}}>{formError[key]}</div>
          })}
        </div>

        <div className="row">
          {/* used index for the unique ID */}
          {people.map(function (person, index) {
            return (
              <div className="col-12 col-md-6 col-lg-4" key={index}>
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
    </>
  );
};

export default Home;
