import { BrowserRouter, Routes,Route } from "react-router-dom";
import Navbar from './Components/Layout/Navbar'
import Footer from './Components/Layout/Footer'
import Home from './Components/Pages/Home'
import About from './Components/Pages/About'
import Notfound from "./Components/Pages/Notfound";



function App() {
  return (
    <BrowserRouter >
        <div className="flex flex-col justify-between h-screen">
          <Navbar/>
          <main className = "container mx-auto px-3 pb-12">
          <Routes>
          <Route path = "/home" element = {<Home/>}/>
          <Route path = "/about" element = {<About/>}/>
          <Route path = "/nf" element = {<Notfound/>}/>
          <Route path = "/*" element = {<Notfound/>}/>
          </Routes>
          </main>
          <Footer/>
        </div>
    </BrowserRouter>
  );
}

export default App;


// <Route exact path = "/" element = {
//           <Navbar/>
//         }>
//         </Route>
        