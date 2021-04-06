import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";
import API from "../utils/API";

const Home = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    API.getPeople()
      .then((res) => {
        console.log(res.data.results);
        setPeople(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      
      <div className="container">
        <h1 className="justify-content-center">Hypersearch</h1>
        <h6 className="justify-content-center">A hyper fast search engine for hyperspace</h6>
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
