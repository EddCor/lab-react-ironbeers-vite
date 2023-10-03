import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom';



function AllBeersPage() {
const [beers, setBeers] = useState([])

async function fetchAllBeers() {
    try {
    const response = await fetch('https://ih-beers-api2.herokuapp.com/beers')
    if (response.ok) {
        const parsed = await response.json()
        setBeers(parsed) 
    }
} catch (error) {
    console.error('Error fetching beers:', error);
  }
}
    useEffect(() => { fetchAllBeers()

    }, []
        
    );
console.log (beers)
    return (
        <>
          <div >
           
            <ul className="list-group">
              {beers.map((Beer) => (
                <li key={Beer._id}>
                  <Link className="navbar-brand" to={`/beers/${Beer._id}`}>
                   <img src= {Beer.image_url} style={{height: "100px"}}/> 
                    <p className="list-group-item list-group-item-action">{Beer.name}</p>
                    <p> {Beer.tagline} </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </>
      );
}


export default AllBeersPage;
