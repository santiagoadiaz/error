import React from 'react';

const Publicidad = () => {
    return (
        <>
            <section className="container-publicity">
                <div className="container-card">
                    <img className="icon-publicity" src="../img/truck.svg" alt="car" />
                    <p className="text-publicity">ENVIOS A TODO EL PAIS</p>
                </div>
                <div className="container-card">
                    <img className="icon-publicity" src="../img/credit-card.svg" alt="card" />
                    <p className="text-publicity">3-6-12 CUOTAS SIN INTERES</p>
                </div>
                <div className="container-card">
                    <img className="icon-publicity" src="../img/shield-lock.svg" alt="card-2" />
                    <p className="text-publicity">PAGO RAPIDO Y SEGURO</p>
                </div>
            </section>
        </>
    );
}

export default Publicidad;
