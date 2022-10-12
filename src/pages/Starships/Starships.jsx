import { useState, useEffect } from "react"
import { getAllStarships } from "../../services/sw-api";
import { Link } from "react-router-dom"


const Starships = () => {
  const [starships, setStarships] = useState({})

  useEffect(() => {
    const fetchStarshipData = async () => {
      const starshipData = await getAllStarships()
      setStarships(starshipData.results)
      console.log(starshipData);
    }
    fetchStarshipData()
  }, [])



  return (
    <>
      <h3>This is my Starships component</h3>
      {starships.length ?
      <>
        {starships.map(starship => 
            <div key={starship.model}>
              <Link to='/' state={{starship}}>{starship.name}</Link>
            <br />
          </div>
        )}
      </>
      :
      <>
        <h3>Loading Starships...</h3>
      </>
      }
    </>
  );
}

export default Starships;