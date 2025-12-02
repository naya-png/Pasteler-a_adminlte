import React from 'react';
import ListaProductos from './components/listar_productos';
import NavbarPrincipal from './components/navbar';
import SideMenu from './components/sidemenu';

function Producto() {
    return (
        <div>
            <NavbarPrincipal/>
            <SideMenu/>
            <ListaProductos/>
        </div>
    );
}

export default Producto;