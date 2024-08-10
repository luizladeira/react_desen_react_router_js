import PaginaPadrao from "componentes/PaginaPadrao";
import Rodape from "componentes/Rodape";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./componentes/Menu";
import Inicio from "./paginas/Inicio";
import SobreMim from "./paginas/SobreMim";

function AppRoutes() {
  return <BrowserRouter>
  <Menu />
  <Routes>
    <Route path="/" element={<PaginaPadrao />}>
      <Route index element={<Inicio />} />
      <Route path="sobre-mim" element={<SobreMim />} />
    </Route>
    <Route path="*" element={<div>NÃO EXISTE</div>} />
  </Routes>  
  <Rodape />
  </BrowserRouter>
} 

export default AppRoutes;
