import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './content/Navbar';
import Home from './content/Home';
import Pages from './content/Pages';
import Footer from './content/Footer';
import Producto from './content/Producto';
import Cart from './content/Cart';
import Perros from './content/Perros';
import Gatos from './content/Gatos';

import Carousel from './layouts/Carousel';
import Dicotomia from './layouts/Dicotomia';
import Publicidad from './layouts/Publicidad';

// styles
import '../font/fontello.css'
import '../styles/home.css'
import '../styles/App.css'
import '../styles/navbar.css'
import '../styles/pages.css'
import '../styles/footer.css'
import '../styles/perro.css'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Pages />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/category/dogs' element={<Perros />} />
          <Route path='/category/cats' element={<Gatos />} />
          <Route path='/category/:id' element={<Producto />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;