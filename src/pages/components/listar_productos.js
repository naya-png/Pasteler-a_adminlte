import React, { useState, useEffect } from 'react';
import Axios from 'axios';

function ListaProductos() {

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:3001/api/productos')
            .then((response) => setProductos(response.data))
            .catch((error) => console.log(error));
    }, []);

    return (
        <div 
            className="content-wrapper"
            style={{ 
                backgroundColor: "#fdf3f7",   // rosado pastel MUY suave
                minHeight: "100vh"
            }}
        >

            {/* Header */}
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1 style={{ color: "#d16b86", fontWeight: "bold" }}>
                                Tortas & Pasteles
                            </h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><a href="#" style={{ color: "#b75a70" }}>Inicio</a></li>
                                <li className="breadcrumb-item active" style={{ color: "#d16b86" }}>Productos</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main */}
            <section className="content">
                <div 
                    className="card card-solid"
                    style={{
                        backgroundColor: "#fde8ef",
                        borderRadius: "15px",
                        border: "1px solid #f7c8d4",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.05)"
                    }}
                >
                    <div className="card-body pb-0">
                        <div className="row">

                            {productos.map((producto) => (
                                <div key={producto.id} className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">

                                    <div 
                                        className="card bg-light d-flex flex-fill"
                                        style={{
                                            borderRadius: "18px",
                                            border: "2px solid #f7d6e0",
                                            background: "#fff5f8"
                                        }}
                                    >
                                        <div 
                                            className="card-header text-muted border-bottom-0"
                                            style={{
                                                backgroundColor: "#f9c8d7",
                                                borderTopLeftRadius: "18px",
                                                borderTopRightRadius: "18px",
                                                color: "#8a3d54",
                                                fontWeight: "bold"
                                            }}
                                        >
                                            {producto.tittle}
                                        </div>

                                        <div className="card-body pt-3">
                                            <div className="row">

                                                <div className="col-7">
                                                    <h2 
                                                        className="lead"
                                                        style={{ color: "#c75274" }}
                                                    >
                                                        <b>{producto.subtitle}</b>
                                                    </h2>

                                                    <p className="text-muted text-sm">
                                                        <b style={{ color: "#b84f6c" }}>Descripción: </b>
                                                        {producto.description}
                                                    </p>

                                                    <ul className="ml-4 mb-0 fa-ul text-muted">
                                                        <li className="small">
                                                            <span className="fa-li">
                                                                <i className="fas fa-lg fa-dollar-sign" style={{ color: "#d16b86" }}/>
                                                            </span>
                                                            Precio: ${producto.price}
                                                        </li>
                                                        <li className="small">
                                                            <span className="fa-li">
                                                                <i className="fas fa-lg fa-tag" style={{ color: "#d16b86" }}/>
                                                            </span>
                                                            Categoría: {producto.category}
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div className="col-5 text-center">
                                                    <img 
                                                        src={producto.image}
                                                        alt="producto"
                                                        className="img-circle img-fluid"
                                                        style={{
                                                            border: "4px solid #f7c8d4",
                                                            background: "#fff",
                                                        }}
                                                    />
                                                </div>

                                            </div>
                                        </div>

                                        <div 
                                            className="card-footer"
                                            style={{ backgroundColor: "#fde1ea" }}
                                        >
                                            <div className="text-right">

                                                <a 
                                                    href="#" 
                                                    className="btn btn-sm"
                                                    style={{ backgroundColor: "#d493a6", color: "white" }}
                                                >
                                                    <i className="fas fa-info-circle" />
                                                </a>

                                                <a 
                                                    href={`/productos/${producto.id}`} 
                                                    className="btn btn-sm"
                                                    style={{ backgroundColor: "#d16b86", color: "white", marginLeft: "5px" }}
                                                >
                                                    <i className="fas fa-eye" /> Ver Detalle
                                                </a>

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>

                    {/* Footer */}
                    <div 
                        className="card-footer"
                        style={{ backgroundColor: "#fdd6e1", borderRadius: "0 0 15px 15px" }}
                    >
                        <nav className="pagination justify-content-center m-0">
                            <ul className="pagination m-0">
                                <li className="page-item active">
                                    <a className="page-link" href="#" style={{ background: "#d16b86", borderColor: "#d16b86" }}>1</a>
                                </li>
                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                            </ul>
                        </nav>
                    </div>

                </div>
            </section>
        </div>
    );
}

export default ListaProductos;
