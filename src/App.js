
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
const App  = ()=>{
  return(
    <div className="container">
          <Router>
            <Routes>
                <Route exact path="/" element={<Main/>}/>
            </Routes>
              
              </Router>
      </div>
  )

}
export default App;
