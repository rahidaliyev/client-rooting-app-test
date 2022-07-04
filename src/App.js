import React from "react";
import {BrowserRouter,
  Route,
  Link,
  useParams,
  useLocation,
  useNavigate,
  Routes} from "react-router-dom";

function CatId() {
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  console.log(params, navigate, location);
  return <span>Cat {params.id}</span>;
}

function Cat() {
  return (
    <article>
      <img alt="cat" src="/cat.png" />
    </article>
  );
}

function Plant() {
  return (
    <article>
      <img alt="cat" src="/plant.png" />
    </article>
  );
}

function PlantId() {
  
    
    return <span>Plant 456</span>;
  
}

function Person() {
  return (
    <article>
      <img alt="cat" src="/person.png" width="300" />
    </article>
  );
}

function Nav() {
  return (
    <header>
      <nav className="nav">
        <Link className="nav-link" to="/animals">
          Animals
        </Link>
        <Link className="nav-link" to="/plants">
          Plants
        </Link>
        <Link className="nav-link" to="/people">
          People
        </Link>
      </nav>
      <nav>
        <Link className="nav-link" to="/animals/123">
          id: 123
        </Link>
        <Link className="nav-link" to="/plants/456">
          id: 456
        </Link>
      </nav>
    </header>
  );
}

function Page() {
  return (
    <main>
      <Routes>
     
      <Route path="/animals" element={   <Cat />}>
     
      </Route>
      <Route path="/animals/:id" element={<CatId />}>
        
      </Route>
      <Route path="/plants" element={<Plant />}>
        
      </Route>
      <Route path="/plants/:id" element={<PlantId />} />
      <Route path="/people" element={ <Person />}>
       
      </Route>
      </Routes>
    </main>
  );
}

function App() {
  return (
    <>
    <BrowserRouter>
      <Nav />
      <Page />
    </BrowserRouter>
    </>
  );
}

export default App;
