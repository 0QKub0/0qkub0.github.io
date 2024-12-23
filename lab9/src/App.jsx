import {BrowserRouter,Routes ,Route,Link} from 'react-router-dom';
import './App.css'
import Layout  from './components/layout';
import Interests from './components/interests';
import About from './components/about';
import Film from './components/film';
import Contact from './components/contact';
import NoPage from './components/noPage';
function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />} />
            <Route path='interests' element= {<Interests />} />
            <Route path='film' element= {<Film />} />
            <Route path='contact' element= {<Contact />} />
            <Route path='about' element= {<About />} />
            <Route path='*' element= {<NoPage />} />
        </Routes>
    </BrowserRouter>
  )
}

export default App
