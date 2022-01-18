
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Sections from "./components/Sections";
const App  = ()=>{
  return(
    <div className="container">
          <Router>
        <Header/>
            <Routes>
                <Route exact path="/" element={<Sections/>}/>
            </Routes>
              
              </Router>
      </div>
  )

}
export default App;
