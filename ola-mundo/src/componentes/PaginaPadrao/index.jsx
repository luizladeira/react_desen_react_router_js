
import Banner from 'componentes/Banner';
import { Outlet } from 'react-router-dom';
import styles from './PaginaPadrao.module.css';

export default function PaginaPadrao(){
    return (
        <main>
            <Banner />
            {/* RENDERIZAR CONTEUDO DA ROTAS */}
            <Outlet />

        </main>
    );
}