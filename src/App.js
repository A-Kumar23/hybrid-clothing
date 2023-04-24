
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home/Home.component"
import Navigation from "./routes/Navigation/Navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import "./app.styles.scss";

function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={ <Navigation/> } > 
            <Route index  element={<Home/>} />
            <Route path="shop" element='I am the Shop'/>
            <Route path="auth" element= {<Authentication/>} />
          </Route>
      </Routes>
    </>
    
  );
}

export default App;
