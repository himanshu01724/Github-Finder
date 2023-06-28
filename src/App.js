import { BrowserRouter, Routes,Route } from "react-router-dom";
import Navbar from './Components/Layout/Navbar'



function App() {
  return (
    <BrowserRouter >
        <div className="flex flex-col justify-between h-screen">
          <Navbar/>
          <main>
            Project Content
          </main>
        </div>
    </BrowserRouter>
  );
}

export default App;


// <Route exact path = "/" element = {
//           <Navbar/>
//         }>
//         </Route>
        