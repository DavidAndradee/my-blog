
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./paginas/Inicio";
import SobreMim from "./paginas/SobreMim";
import Menu from "./componentes/Menu";
import Rodape from "componentes/Rodape";
import PaginaPadrao from "componentes/PaginaPadrao/indes";
import Post from "paginas/Post";
import NaoEncontrada from "paginas/NaoEncontrada";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>

        <Route path="/" element={<PaginaPadrao />}>

          <Route path="/" element={<Inicio />} />
          <Route path="sobremim" element={<SobreMim />} />
          
        </Route>

        <Route path="posts/:id" element={<Post />} />
        <Route path="*" element={<NaoEncontrada/>} />
      
      </Routes>
      <Rodape />
    </BrowserRouter>
  );
}

export default AppRoutes;
