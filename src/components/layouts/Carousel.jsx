import React from 'react';

const Carousel = () => {
    return (
        <>
            <section className="d-flex justify-content-center mb-5">
                <div id="carouselExampleIndicators" className="carousel slide mb-5 w-100" data-bs-ride="true">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} aria-label="Slide 2" />
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="size-carousel" src="../img/carousel.webp" alt="amorchunis" />
                        </div>
                        <div className="carousel-item">
                            <div className="container-iratienda">
                                <a href="../pages/perros.html"><button className="iratienda">IR A TIENDA</button></a>
                            </div>
                            <img className="size-carousel" src="../img/banner.webp" alt="accesorios" />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </section>
        </>
    );
}

export default Carousel;
