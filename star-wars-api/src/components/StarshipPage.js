import {useState, useEffect } from "react";
import { useParams } from "react-router";


const StarshipPage = () => {

    const {ship} = useParams();

    const url = 'https://swapi.dev/api/starships'

    const [starship, setShip] = useState(null);

    const getShip = async () => {
        try{
            const response = await fetch(url);
            const data = await response.json()
            console.log(data);
            setShip(data)
        }catch(err){
            console.log(err);
        }
    }

    useEffect(() =>{
        getShip();
    }, []);

    const loaded = () => {
        console.log(ship)
        return(
            <div>
                <h1>This ship is called: {ship.asset_is_base} and is number ${ship.rate}</h1>
            </div>
        )
    }
   return(
    <h1>Starship: {ship}</h1>
    
    ) 
}

export default StarshipPage;
