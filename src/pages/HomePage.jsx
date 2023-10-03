import { Link } from "react-router-dom";


function HomePage() {
return (
<>
<Link to = "/beers"> 
<img src= "./src/assets/beers.png"></img>
<h1>ALL BEERS</h1>
</Link>

<Link to = "/random-beer"> 
<img src= "./src/assets/new-beer.png"></img>
<h1>RANDOM BEERS</h1>
</Link>

<Link to = "/new-beer"> 
<img src= "./src/assets/random-beer.png"></img>
<h1>NEW BEERS</h1>
</Link>

</>
)

}

export default HomePage;
