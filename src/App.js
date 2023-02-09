import Header from "./components/Header"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes,Route} from 'react-router-dom'
import CardDetails from "./components/CardDetails";
import Card from "./components/Cards"
import  './components/style.css'
function App() {
  
  return (
    <>
    <Header/>
    <Routes>
    <Route path="/" element={<Card/>}/>
    <Route path="/cart/:id" element={<CardDetails/>}/>
    </Routes>
    </>
  )
}

export default App
