import { useState, useEffect } from "react"
import { getAllStarships } from "../../services/sw-api";
import { Link } from "react-router-dom"



const Starships = (props) => {
  const [starships, setStarships] = useState([])

  useEffect(() => {
    const fetchStarshipData = async () => {
      const starshipData = await getAllStarships()
      setStarships(starshipData.results)
    }
    fetchStarshipData()
  }, [])

  return (
    <>
      <h3 id='main-page-h3'>Star Wars Starships</h3>
      {starships.length ?
      <>
        {starships.map(starship => 
          <div key={starship.model} id="ship-container">
            <Link to='/starship' state={{starship}}> 
              <button>
                {starship.name}
              </button>
            </Link>
          </div>
        )}
      </>
      :
      <>
        <h3>Loading Starships...
        </h3>
      </>
      }
    </>
  );
}

export default Starships;