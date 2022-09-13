import { Link } from "react-router-dom"


const StarshipList = ([ URL]) => {
    cosnt [starships, setStarships] = useState([]);

    useEffect(() =>{
        const getStarships = async () => {
            try{
                const res = await fetch(URL);
            }catch(err){
                console.log(err)
            }
        }
        getStarships();
    }, []);

    starshipsUrls = starships.map((ship, index) => {
        const
    })

    const starships = [
        {name: "starship", number:"1"},
        {name: "spaceship", number:"2"},
        {name: "moonship", number:"3"},
        {name: "marship", number:"4"},
    ];


    return(
        <div className="shipList">
            {starships.map((boat, idx) => {
                const { name, number } = boat;
                boat.key =idx;
                console.log(boat)

                return(
                <Link to={`/starships/${number}`}>
                    <h2>{name}</h2>
                </Link>
                );    
            })}
            
        </div>
    )
}
export default StarshipList;