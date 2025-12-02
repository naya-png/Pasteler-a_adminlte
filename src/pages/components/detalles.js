import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Axios from 'axios';

function DetallesPastel() {

    const { id } = useParams();
    const [productoNombre, setProductoNombre] = useState('');
    const [productoSubtitulo, setProductoSubtitulo] = useState('');

    useEffect(() => {
        Axios.get('http://localhost:3001/api/productos/' + id)
            .then((response) => {
                setProductoNombre(response.data.title);
                setProductoSubtitulo(response.data.subtitle);
            })
            .catch((error) => console.log(error))
    }, [id]);

    return (
        <div>
            <div
                className="content-wrapper"
                style={{
                    backgroundColor: "#fdf3f7",   // rosado pastel de fondo
                    minHeight: "100vh",
                    paddingTop: "20px"
                }}
            >

                {/* Header */}
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 style={{ color: "#d16b86", fontWeight: "bold" }}>
                                    Detalle del Pastel
                                </h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item">
                                        <a href="#" style={{ color: "#b75a70" }}>Inicio</a>
                                    </li>
                                    <li
                                        className="breadcrumb-item active"
                                        style={{ color: "#d16b86" }}
                                    >
                                        Detalle
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contenido principal */}
                <section className="content">
                    <div className="container-fluid">
                        <div className="row">

                            {/* Columna izquierda */}
                            <div className="col-md-3">

                                {/* Tarjeta del pastel */}
                                <div
                                    className="card card-primary card-outline"
                                    style={{
                                        borderRadius: "18px",
                                        border: "2px solid #f7c8d4",
                                        backgroundColor: "#fff5f8",
                                        boxShadow: "0 4px 10px rgba(0,0,0,0.08)"
                                    }}
                                >
                                    <div className="card-body box-profile">

                                        <div className="text-center">
                                            <img
                                                className="profile-user-img img-fluid img-circle"
                                                src="https://i.imgur.com/VxQ9b8V.png"
                                                alt="Pastel"
                                                style={{
                                                    border: "4px solid #f7c8d4",
                                                    background: "#fff",
                                                }}
                                            />
                                        </div>

                                        <h3
                                            className="profile-username text-center"
                                            style={{ color: "#c75274", fontWeight: "bold" }}
                                        >
                                            {productoNombre}
                                        </h3>

                                        <p
                                            className="text-muted text-center"
                                            style={{ color: "#b75a70" }}
                                        >
                                            {productoSubtitulo}
                                        </p>

                                        <ul className="list-group list-group-unbordered mb-3">
                                            <li
                                                className="list-group-item"
                                                style={{ backgroundColor: "#fde1ea" }}
                                            >
                                                <b style={{ color: "#8a3d54" }}>Nivel:</b>
                                                <span className="float-right">Premium</span>
                                            </li>
                                            <li
                                                className="list-group-item"
                                                style={{ backgroundColor: "#fde1ea" }}
                                            >
                                                <b style={{ color: "#8a3d54" }}>Porciones:</b>
                                                <span className="float-right">12</span>
                                            </li>
                                            <li
                                                className="list-group-item"
                                                style={{ backgroundColor: "#fde1ea" }}
                                            >
                                                <b style={{ color: "#8a3d54" }}>Recomendado:</b>
                                                <span className="float-right">Fiestas</span>
                                            </li>
                                        </ul>

                                        <a
                                            href="#"
                                            className="btn btn-block"
                                            style={{
                                                backgroundColor: "#d16b86",
                                                color: "white",
                                                fontWeight: "bold",
                                                borderRadius: "10px"
                                            }}
                                        >
                                            Agregar al Carrito
                                        </a>
                                    </div>
                                </div>

                                {/* ABOUT ME pastel */}
                                <div
                                    className="card"
                                    style={{
                                        backgroundColor: "#fde8ef",
                                        borderRadius: "15px",
                                        border: "1.5px solid #f7c8d4"
                                    }}
                                >
                                    <div
                                        className="card-header"
                                        style={{
                                            backgroundColor: "#f9c8d7",
                                            borderRadius: "15px 15px 0 0"
                                        }}
                                    >
                                        <h3 className="card-title" style={{ color: "#8a3d54" }}>
                                            Información del Pastel
                                        </h3>
                                    </div>

                                    <div className="card-body">

                                        <strong style={{ color: "#b84f6c" }}>
                                            <i className="fas fa-book mr-1" /> Ingredientes
                                        </strong>
                                        <p className="text-muted">
                                            Bizcocho suave, crema chantilly, frutillas frescas.
                                        </p>
                                        <hr />

                                        <strong style={{ color: "#b84f6c" }}>
                                            <i className="fas fa-map-marker-alt mr-1" /> Origen
                                        </strong>
                                        <p className="text-muted">Pastelería Dulce Amor</p>
                                        <hr />

                                        <strong style={{ color: "#b84f6c" }}>
                                            <i className="fas fa-hand-holding-heart mr-1" /> Perfecto para
                                        </strong>
                                        <p className="text-muted">
                                            Cumpleaños, celebraciones y regalos románticos.
                                        </p>

                                    </div>
                                </div>
                            </div>

                            {/* Columna derecha */}
                            <div className="col-md-9">

                                <div
                                    className="card"
                                    style={{
                                        borderRadius: "18px",
                                        border: "2px solid #f7c8d4",
                                        backgroundColor: "#fff5f8",
                                        boxShadow: "0 4px 10px rgba(0,0,0,0.08)"
                                    }}
                                >
                                    <div
                                        className="card-header p-2"
                                        style={{
                                            backgroundColor: "#f9c8d7",
                                            borderRadius: "18px 18px 0 0"
                                        }}
                                    >
                                        <ul className="nav nav-pills">
                                            <li className="nav-item">
                                                <a className="nav-link active" href="#activity" data-toggle="tab">
                                                    Información
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="#timeline" data-toggle="tab">
                                                    Fotos
                                                </a>
                                            </li>
                                        </ul>
                                    </div>

                                    <div className="card-body">
                                        <div className="tab-content">

                                            {/* ACTIVITY */}
                                            <div className="active tab-pane" id="activity">
                                                <p style={{ color: "#8a3d54" }}>
                                                    Este pastel está elaborado con ingredientes frescos y la receta clásica de la casa.
                                                    Suave, húmedo y lleno de sabor.
                                                </p>
                                            </div>

                                            {/* TIMELINE --- aquí podrías poner fotos reales del pastel */}
                                            <div className="tab-pane" id="timeline">
                                                <div className="timeline timeline-inverse">
                                                    <div className="time-label">
                                                        <span className="bg-pink" style={{ backgroundColor: "#d16b86", color: "white" }}>
                                                            Galería
                                                        </span>
                                                    </div>

                                                    <div>
                                                        <img
                                                            src="https://i.imgur.com/FIKbE2H.jpeg"
                                                            className="img-fluid mb-3"
                                                            style={{ borderRadius: "15px", border: "3px solid #f7c8d4" }}
                                                        />
                                                    </div>

                                                    <div>
                                                        <img
                                                            src="https://i.imgur.com/Ft7q7bT.jpeg"
                                                            className="img-fluid"
                                                            style={{ borderRadius: "15px", border: "3px solid #f7c8d4" }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}

export default DetallesPastel;
