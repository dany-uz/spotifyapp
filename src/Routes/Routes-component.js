// React imports
import { Routes, Route, Link } from "react-router-dom";

// Component imports
import { Home } from "../Home/Home-component";
import { Historia } from "../Historia/Historia-component";
import { Integrantes } from "../Integrantes/Integrantes-component";
import { Music } from "../Music/Music-component";

export function Rutas() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="historia" element={<Historia />} />
                <Route path="integrantes" element={<Integrantes />} />
                <Route path="musica" element={<Music />} />
            </Routes>
        </div>
    );
}