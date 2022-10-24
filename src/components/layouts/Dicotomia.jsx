import React from 'react';

const Dicotomia = () => {
    return (
        <>
            <section className="container-category">
                <div className="container-category-dog">
                    <div className="container-dog">
                        <div className="title-dog">
                            <h2>
                                PERROS
                            </h2>
                        </div>
                        <a className="text-dog" href="../pages/perros.html">Explora Categoria</a>
                    </div>
                </div>
                <div className="container-category-cat">
                    <div className="container-cat">
                        <div className="title-cat">
                            <h2>
                                GATOS
                            </h2>
                        </div>
                        <a className="text-cat" href="../pages/gatos.html">Explora Categoria</a>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Dicotomia;
