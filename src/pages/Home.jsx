import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";
import API from "../utils/API";
import SearchForm from "../components/SearchForm";
import Hero from "../components/Hero"
import "./Home.css"



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

  const formValidation = () => {
    const formError = {};
    let isValid = true;

    if (search <= 0 || search > 10) {
        formError.formNumber = "Enter a number between 1-10 you must."
        isValid = false;
    }

    setFormError(formError);
    return isValid;
  }


 
  return (
    <>
    <Hero />
    <section className="results">
      <div className="container">
          <div className="row justify-content-center">
              <div className="col-6 text-center">
                    <h1>nuuawh!</h1>
                    <h6>(That's Wookiee for hello.)</h6>
                    <h6>Use Hypersearch to find your favorite Star Wars characters. Select the number of characters you want displayed by using the form below.</h6>
              </div>
          </div>
        
        
        <div className="row justify-content-center">
          <div className="col-6">
            <SearchForm
              handleInputChange={handleInputChange}
              result={search}
              handleFormSubmit={handleFormSubmit}
            />
          
          {Object.keys(formError).map((key)=> {
              return <div className="justify-content-center" style={{color: "red"}}>{formError[key]}</div>
          })}
          </div>
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
      </section>
    </>
  );
};

export default Home;
