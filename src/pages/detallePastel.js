import React from 'react';
import NavbarPrincipal from './components/navbar';
import SideMenu from './components/sidemenu';
import Detalles from './components/detalles';

function PastelDetalle() {
    return (
        <div>
            <NavbarPrincipal />
            <SideMenu />
            <Detalles />
        </div>
    );
}

export default PastelDetalle;