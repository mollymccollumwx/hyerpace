import React, { useEffect, useState } from "react";
import Cards from "../components/Cards";
import API from "../utils/API";

const Home = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    API.getPeople()
      .then((res) => {
        console.log(res.data.results[0].name);
        setPeople(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <h1>Hyperspace</h1>
      <div>
        {people.map(function (person, index) {
          return (
            <div key={index}>
              {" "}
              <Cards
                name={person.name}
                homeworld={person.homeworld}
                birthYear={person.birth_year}
                hairColor={person.hair_color}
                skinColor={person.skin_color}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
