import './App.css'
import HeaderPart from './Components/HeaderPart/HeaderPart'
import Banner from './Components/BannerPart/Banner'
import Recipes from './Components/Recipes/Recipes'
import { ToastContainer, toast } from 'react-toastify';
function App() {

  return (
    <>
      <HeaderPart></HeaderPart>
      <Banner></Banner>
      <Recipes></Recipes>

    </>
  )
}

export default App
