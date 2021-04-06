import React, {useEffect} from 'react';
import API from "../utils/API"

const Home = () => {

    useEffect(() => {
    API.getPeople().then(res => {
        console.log(res.data)
    })
    }, [])
    return (
        <div>
            
        </div>
    );
};

export default Home;