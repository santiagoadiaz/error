import React, { useState, useEffect } from 'react';
import { consultarBDD } from '../../utils/funcionesUtiles';

import Carousel from '../layouts/Carousel';
import Dicotomia from '../layouts/Dicotomia';
import Publicidad from '../layouts/Publicidad';


const Home = () => {
    const [productos, setProductos] = useState([]);
    useEffect(() => {
        consultarBDD().then(producto => setProductos(producto))
    }, []);

    return (

        <>
            <Carousel />
            <Dicotomia />
            <Publicidad />
            <div className="container-product row pb-5 gy-5">
                {productos}
            </div>
        </>
    );
}

export default Home;