import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function BeerDetailsPage() {
  const { beerId } = useParams();
  const [beer, setBeer] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchBeerDetails() {
    try {
      const response = await fetch(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`);
      if (response.ok) {
        const parsed = await response.json();
        setBeer(parsed);
      } else {
        console.error('Error fetching beer details:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching beer details:', error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchBeerDetails();
  }, [beerId]);

  
        return  (
            <>
              {isLoading ? (
                <h1>Loading...</h1>
              ) : (
                <>
                  <img src={beer?.image_url} alt={beer?.name} style={{ height: '100px' }} />
                  <p className="list-group-item list-group-item-action">{beer?.name}</p>
                  <p>{beer?.tagline}</p>
                </>
              )}
            </>
          );
        }

export default BeerDetailsPage;
