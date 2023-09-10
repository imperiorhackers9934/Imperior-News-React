import './App.css'
import {useState} from 'react'
import Mynavbar from './components/Navbar.jsx'
import Mypage from './components/MyPage.jsx';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
export default function App() {
	//Setting Default country to India
	const [country,setCountry] = useState("in")
  return (
    <>
      <Router>
        <Mynavbar setCountry={setCountry}/>
        <Routes>
          <Route exact path="/" element={<Mypage country={country} type="general" key={"general"+country}/>}></Route>
          <Route exact path="/business" element={<Mypage country={country} type="business" key={"business"+country}/>}></Route>
          <Route exact path="/health" element={<Mypage country={country} type="health" key={"health"+country}/>}></Route>
          <Route exact path="/science" element={<Mypage country={country} type="science" key={"science"+country}/>}></Route>
          <Route exact path="/sports" element={<Mypage country={country} type="sports" key={"sports"+country}/>}></Route>
          <Route exact path="/technology" element={<Mypage country={country} type={"technology"+country} key="technology"/>}></Route>
          <Route exact path="/entertainment" element={<Mypage country={country} type="entertainment" key={"entertainment"+country}/>}></Route>
        </Routes>
      </Router>
    </>
  )
};
