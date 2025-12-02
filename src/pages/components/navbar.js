import React from "react";

function NavbarPrincipal() {
    return (
        <nav
            className="main-header navbar navbar-expand"
            style={{
                backgroundColor: "#f9c8d7",   // rosado pastel
                borderBottom: "2px solid #f7b5c8",
                boxShadow: "0 2px 6px rgba(0,0,0,0.08)"
            }}
        >
            {/* Left navbar links */}
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a
                        className="nav-link"
                        data-widget="pushmenu"
                        href="#"
                        role="button"
                        style={{ color: "#8a3d54", fontWeight: "600" }}
                    >
                        <i className="fas fa-bars" />
                    </a>
                </li>

                <li className="nav-item d-none d-sm-inline-block">
                    <a
                        href="index3.html"
                        className="nav-link"
                        style={{ color: "#8a3d54", fontWeight: "600" }}
                    >
                        Inicio
                    </a>
                </li>

                <li className="nav-item d-none d-sm-inline-block">
                    <a
                        href="#"
                        className="nav-link"
                        style={{ color: "#8a3d54", fontWeight: "600" }}
                    >
                        Contacto
                    </a>
                </li>
            </ul>

            {/* Right navbar links */}
            <ul className="navbar-nav ml-auto">

                {/* Search */}
                <li className="nav-item">
                    <a
                        className="nav-link"
                        data-widget="navbar-search"
                        href="#"
                        role="button"
                        style={{ color: "#8a3d54" }}
                    >
                        <i className="fas fa-search" />
                    </a>

                    <div
                        className="navbar-search-block"
                        style={{
                            backgroundColor: "#fde8ef",
                            borderRadius: "10px",
                            padding: "10px"
                        }}
                    >
                        <form className="form-inline">
                            <div className="input-group input-group-sm">
                                <input
                                    className="form-control form-control-navbar"
                                    type="search"
                                    placeholder="Buscar pastel..."
                                    aria-label="Search"
                                    style={{
                                        backgroundColor: "#fff5f8",
                                        border: "1px solid #f7b5c8",
                                        color: "#8a3d54"
                                    }}
                                />
                                <div className="input-group-append">
                                    <button
                                        className="btn btn-navbar"
                                        type="submit"
                                        style={{ color: "#8a3d54" }}
                                    >
                                        <i className="fas fa-search" />
                                    </button>
                                    <button
                                        className="btn btn-navbar"
                                        type="button"
                                        data-widget="navbar-search"
                                        style={{ color: "#8a3d54" }}
                                    >
                                        <i className="fas fa-times" />
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </li>

                {/* Messages */}
                <li className="nav-item dropdown">
                    <a
                        className="nav-link"
                        data-toggle="dropdown"
                        href="#"
                        style={{ color: "#8a3d54" }}
                    >
                        <i className="far fa-comments" />
                        <span
                            className="badge navbar-badge"
                            style={{
                                backgroundColor: "#d16b86",
                                color: "white"
                            }}
                        >
                            3
                        </span>
                    </a>

                    <div
                        className="dropdown-menu dropdown-menu-lg dropdown-menu-right"
                        style={{ backgroundColor: "#fff5f8" }}
                    >
                        <a href="#" className="dropdown-item">
                            <div className="media">
                                <img
                                    src="dist/img/user1-128x128.jpg"
                                    alt="User Avatar"
                                    className="img-size-50 mr-3 img-circle"
                                    style={{ border: "2px solid #f7b5c8" }}
                                />
                                <div className="media-body">
                                    <h3
                                        className="dropdown-item-title"
                                        style={{ color: "#8a3d54" }}
                                    >
                                        Brad Diesel
                                        <span className="float-right text-sm text-danger">
                                            <i className="fas fa-star" />
                                        </span>
                                    </h3>
                                    <p className="text-sm" style={{ color: "#b75a70" }}>
                                        Call me whenever you can...
                                    </p>
                                    <p className="text-sm text-muted">
                                        <i className="far fa-clock mr-1" /> 4 Hours Ago
                                    </p>
                                </div>
                            </div>
                        </a>

                        <div className="dropdown-divider" />

                        <a href="#" className="dropdown-item dropdown-footer" style={{ color: "#c75274" }}>
                            Ver todos los mensajes
                        </a>
                    </div>
                </li>

                {/* Notifications */}
                <li className="nav-item dropdown">
                    <a
                        className="nav-link"
                        data-toggle="dropdown"
                        href="#"
                        style={{ color: "#8a3d54" }}
                    >
                        <i className="far fa-bell" />
                        <span
                            className="badge navbar-badge"
                            style={{
                                backgroundColor: "#f7b5c8",
                                color: "#8a3d54"
                            }}
                        >
                            15
                        </span>
                    </a>

                    <div
                        className="dropdown-menu dropdown-menu-lg dropdown-menu-right"
                        style={{ backgroundColor: "#fff5f8" }}
                    >
                        <span
                            className="dropdown-item dropdown-header"
                            style={{ color: "#8a3d54" }}
                        >
                            15 Notificaciones
                        </span>

                        <div className="dropdown-divider" />
                        <a href="#" className="dropdown-item" style={{ color: "#b75a70" }}>
                            <i className="fas fa-envelope mr-2" /> 4 nuevos mensajes
                            <span className="float-right text-muted text-sm">3 mins</span>
                        </a>
                        <div className="dropdown-divider" />
                        <a href="#" className="dropdown-item" style={{ color: "#b75a70" }}>
                            <i className="fas fa-users mr-2" /> 8 solicitudes de amistad
                            <span className="float-right text-muted text-sm">12 horas</span>
                        </a>
                        <div className="dropdown-divider" />
                        <a href="#" className="dropdown-item" style={{ color: "#b75a70" }}>
                            <i className="fas fa-file mr-2" /> 3 nuevos reportes
                            <span className="float-right text-muted text-sm">2 días</span>
                        </a>

                        <div className="dropdown-divider" />
                        <a
                            href="#"
                            className="dropdown-item dropdown-footer"
                            style={{ color: "#c75274" }}
                        >
                            Ver todas las notificaciones
                        </a>
                    </div>
                </li>

                {/* Fullscreen */}
                <li className="nav-item">
                    <a
                        className="nav-link"
                        data-widget="fullscreen"
                        href="#"
                        role="button"
                        style={{ color: "#8a3d54" }}
                    >
                        <i className="fas fa-expand-arrows-alt" />
                    </a>
                </li>

                {/* Control Sidebar */}
                <li className="nav-item">
                    <a
                        className="nav-link"
                        data-widget="control-sidebar"
                        data-slide="true"
                        href="#"
                        role="button"
                        style={{ color: "#8a3d54" }}
                    >
                        <i className="fas fa-th-large" />
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default NavbarPrincipal;
