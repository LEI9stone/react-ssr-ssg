import {Routes, Route, Link} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About'

export default function App() {
  return <>
    <div>
      <Link to="/"> 首页 </Link>
      <Link to="/about"> 我的页面 </Link>
    </div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </>
}