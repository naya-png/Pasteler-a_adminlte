import React from 'react';

function SideMenu() {

    return (
        <aside
            className="main-sidebar elevation-4"
            style={{
                backgroundColor: "#f8d7e3",
                borderRight: "3px solid #f3b9cc",
                height: "100vh",              // Altura completa de la ventana
                position: "fixed",            // Fijo en la pantalla
                top: 0,
                left: 0,
                overflowY: "auto"            // Scroll si el contenido es muy largo
            }}
        >

            {/* Logo Pastelería */}
            <a
                href="/"
                className="brand-link"
                style={{
                    backgroundColor: "#f3b9cc",
                    color: "#8a3d54",
                    fontWeight: "600",
                    borderBottom: "2px solid #e7a5bb"
                }}
            >
                <img
                    src="/img/logoprincipal.jpeg"
                    alt="Logo"
                    className="brand-image img-circle elevation-3"
                    style={{ opacity: "1", border: "2px solid #fff5f8" }}
                />
                <span className="brand-text font-weight-light">
                    Pastelería DulceArte
                </span>
            </a>

            <div className="sidebar">

                {/* Usuario */}
                <div
                    className="user-panel mt-3 pb-3 mb-3 d-flex"
                    style={{
                        borderBottom: "1px solid #f3b9cc"
                    }}
                >
                    <div className="image">
                        <img
                            src="/img/user.jpg"
                            className="img-circle elevation-2"
                            alt="User"
                            style={{
                                border: "2px solid #f7c2d4"
                            }}
                        />
                    </div>
                    <div className="info">
                        <a
                            href="#"
                            className="d-block"
                            style={{
                                color: "#8a3d54",
                                fontWeight: "600"
                            }}
                        >
                            Administrador
                        </a>
                    </div>
                </div>

                {/* Buscador */}
                <div className="form-inline">
                    <div
                        className="input-group"
                        data-widget="sidebar-search"
                        style={{
                            backgroundColor: "#fff5f8",
                            borderRadius: "8px",
                            border: "1px solid #f3b9cc"
                        }}
                    >
                        <input
                            className="form-control form-control-sidebar"
                            type="search"
                            placeholder="Buscar..."
                            aria-label="Search"
                            style={{
                                backgroundColor: "#fff5f8",
                                color: "#8a3d54",
                                border: "none"
                            }}
                        />
                        <div className="input-group-append">
                            <button
                                className="btn btn-sidebar"
                                style={{
                                    backgroundColor: "#f3b9cc",
                                    color: "#8a3d54"
                                }}
                            >
                                <i className="fas fa-search fa-fw" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Menú */}
                <nav className="mt-3">
                    <ul
                        className="nav nav-pills nav-sidebar flex-column"
                        data-widget="treeview"
                        role="menu"
                        data-accordion="false"
                    >

                        {/* Inicio */}
                        <li className="nav-item menu-open">
                            <a
                                href="/"
                                className="nav-link active"
                                style={{
                                    backgroundColor: "#f3b9cc",
                                    color: "#8a3d54",
                                    fontWeight: "700",
                                    borderRadius: "8px"
                                }}
                            >
                                <i className="nav-icon fas fa-home" />
                                <p>Inicio</p>
                            </a>
                        </li>

                        {/* Productos */}
                        <li className="nav-item">
                            <a
                                href="/productos"
                                className="nav-link"
                                style={{
                                    color: "#8a3d54"
                                }}
                            >
                                <i className="nav-icon fas fa-birthday-cake" />
                                <p>Productos</p>
                            </a>
                        </li>

                        {/* Categorías */}
                        <li className="nav-item">
                            <a
                                href="/categorias"
                                className="nav-link"
                                style={{
                                    color: "#8a3d54"
                                }}
                            >
                                <i className="nav-icon fas fa-tags" />
                                <p>Categorías</p>
                            </a>
                        </li>

                        {/* Pedidos */}
                        <li className="nav-item">
                            <a
                                href="/pedidos"
                                className="nav-link"
                                style={{
                                    color: "#8a3d54"
                                }}
                            >
                                <i className="nav-icon fas fa-shopping-cart" />
                                <p>Pedidos</p>
                            </a>
                        </li>

                        {/* Clientes */}
                        <li className="nav-item">
                            <a
                                href="/clientes"
                                className="nav-link"
                                style={{
                                    color: "#8a3d54"
                                }}
                            >
                                <i className="nav-icon fas fa-users" />
                                <p>Clientes</p>
                            </a>
                        </li>

                        {/* Reportes */}
                        <li className="nav-item">
                            <a
                                href="/reportes"
                                className="nav-link"
                                style={{
                                    color: "#8a3d54"
                                }}
                            >
                                <i className="nav-icon fas fa-chart-bar" />
                                <p>Reportes</p>
                            </a>
                        </li>

                        {/* Configuración */}
                        <li className="nav-item">
                            <a
                                href="/configuracion"
                                className="nav-link"
                                style={{
                                    color: "#8a3d54"
                                }}
                            >
                                <i className="nav-icon fas fa-cog" />
                                <p>Configuración</p>
                            </a>
                        </li>

                    </ul>
                </nav>
            </div>
        </aside>
    );
}

export default SideMenu;