import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Create from "./Components/Create";
import Detail from "./Components/Detail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}>
          <Route path="detail/:id" element={<Detail/>}></Route>
        </Route>
        <Route path="create" element={<Create/>}/>
        
      </Routes>
      
    </div>
  );
}

export default App;
