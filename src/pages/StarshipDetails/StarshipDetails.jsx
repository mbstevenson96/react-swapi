import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { getStarshipDetails } from "../../services/sw-api";
// import { Link } from "react-router-dom";

const StarshipDetails = (props) => {
  const [starshipDetails, setStarshipDetails] = useState({})
  const location = useLocation()
  
  useEffect (() => {
    const fetchStarshipDetails = async () => {
      const starshipData = await getStarshipDetails(location.state.starship.url)
      setStarshipDetails(starshipData)
    }
    fetchStarshipDetails()
  }, [location.state.starship.url])



  return (
    <>
      <h3>StarshipDetails Component</h3>
      <h4>Name: {starshipDetails.name}</h4>
      <h4>Model: {starshipDetails.model}</h4>
    </>
  );
}

export default StarshipDetails;