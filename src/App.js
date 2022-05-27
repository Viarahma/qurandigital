import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes} from "react-router-dom"
import NavbarCom from "./component/navbar";
import FooterCom from "./component/footer";
import HomeCOm from "./page/home";
import SurahCom from "./page/surah";
import InfoCOm from "./page/info";
import JuzCOm from "./page/juz";
import AboutCom from "./page/about";

function App() {
  return (
    <div className="App">
      <NavbarCom/>
      <Routes>
        <Route path="/" element={<HomeCOm/>}/>
        <Route path="surah/:id" element={<SurahCom/>}/>
        <Route path="juz/:id" element={<JuzCOm/>}/>
        <Route path="info/:id" element={<InfoCOm/>}/>
        <Route path="about" element={<AboutCom/>}/>
          <Route path="*" element={<HomeCOm/>}/>
      </Routes>
      <FooterCom/>
    </div>
  );
}

export default App;
