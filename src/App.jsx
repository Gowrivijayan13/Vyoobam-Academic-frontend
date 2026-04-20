import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar.jsx";
import Footer from "./Components/Footer.jsx";
import Contact from "./Pages/Contact";
import Whoweare from "./Pages/Whoweare.jsx";
import Careerlaunchpad from "./Pages/Careerlaunchpad.jsx";
import Earn from "./Pages/Earn.jsx";
import Skill from "./Pages/Skill.jsx";
import FindLearning from "./Pages/FindLearning.jsx";
import Home from "./Pages/home/Home.jsx";
import DiscoverPath from "./Pages/Discoverpath.jsx";

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <div className="page-container">
        <Routes>
          <Route path="/contact" element={<Contact />} />
          <Route path="/who-we-are" element={<Whoweare />}></Route>
          <Route path="/career-launchpad" element={<Careerlaunchpad />}></Route>
          <Route path="/earn-credentials" element={<Earn />}></Route>
          <Route path="/skill-lab" element={<Skill />}></Route>
          <Route path="/find-learning" element={<FindLearning />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/discover-paths" element={<DiscoverPath />}></Route>
        </Routes>
      </div>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
