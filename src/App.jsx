import { } from 'react'


// Import Styles and Images
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Sections/Header/Header';
import Home from './Sections/Main/Home';
import Service from './Sections/Services/Service';
import Design from './Sections/Designing/Design';

function App() {
  return (
    <>
      {/* Start Header */}
      <Header />
      {/* End Header */}

      {/* Start Home  */}
      <Home />
      {/* End Home  */}

      {/* Start Service */}
      <Service />
      {/* End Service */}

      {/* Start Design */}
      <Design />
      {/* End Design */}
    </>
  )
}

export default App