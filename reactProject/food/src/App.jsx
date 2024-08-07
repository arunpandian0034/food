
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Home from "./component/Home";
// import Admin from "./Admin";
// import Service from "./component/Service";
// import Carousel1 from "./component/Carousel1";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/Carousel1" element={<Carousel1/>}/>
//         <Route path="/Home" element={<Home />} />
//         <Route path="/Service" element={< Service/>}/>
//         <Route path="/admin" element={<Admin />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Admin from "./Admin";
import FormData from "./component/FormData";
import FormLogin from "./component/FormLogin"
import './App.css'
import Service from "./component/Service";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/Service" element={<Service/>}/>
        <Route path="/admin" element={<Admin />} />
        <Route path="/data" element={<FormData/>} />
        <Route path="/details" element={<FormLogin/>} />
        {/* <Route path="/Service" element={<Service/>} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
