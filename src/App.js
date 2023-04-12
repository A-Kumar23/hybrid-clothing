
import { Route, Routes } from "react-router-dom";
import "./app.styles.scss";
import Home from "./routes/Home/Home.component"
import Navigation from "./routes/Navigation/Navigation.component";
import Authentication from "./routes/authentication/authentication.component";

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
