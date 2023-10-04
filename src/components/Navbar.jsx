import { Link } from "react-router-dom";



function Navbar() {
return  (
//     <div>
// <nav>
//  <Link to = "/" >
// <button>Home Page </button>
// </Link>

// </nav>
// </div>
// )
// }



//Matt way
    <nav>
      <ul style={{ display: 'flex', listStyle: 'none', gap: '20px' }}>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/beers'>All beers</Link>
        </li>
        <li>
          <Link to='/beers/random'>Random Beer</Link>
        </li>
        <li>
          <Link to='/beers/new'>Add Beer</Link>
        </li>
      </ul>
    </nav>
  )
}
  export default Navbar;