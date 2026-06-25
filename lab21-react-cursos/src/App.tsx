import { useState } from 'react'
import NavbarApp from './components/NavbarApp';
import ResumenCursos from './components/ResumenCursos';
import FiltroCategoria from './components/FiltroCategoria';
import FormularioCurso from './components/FormularioCurso';
import CursoCard from './components/CursoCard';
import { cursosIniciales } from './data/cursos';
import type { Curso } from './types/Curso';

import './App.css'

function App() {
  const [cursos, setCursos] = useState<Curso[]>(cursosIniciales);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todas');

  const cursosFiltrados = categoriaSeleccionada === 'Todas'
    ? cursos
    : cursos.filter((curso) => curso.categoria === categoriaSeleccionada);

  const agregarCurso = (curso: Curso) => {
    setCursos([...cursos, curso]);
  };


  return (
    <>
      <NavbarApp />

      <main className="container mt-4">
        <section className="mb-4">
          <h1 className="titulo-principal">Catálogo de Cursos Web</h1>
          <p className="text-muted">
            Aplicación desarrollada con React, TypeScript, TSX y Bootstrap.
          </p>
        </section>

        <ResumenCursos cursos={cursos} />
        <FormularioCurso onAgregarCurso={agregarCurso} />
        <FiltroCategoria
          categoriaSeleccionada={categoriaSeleccionada}
          onCambiarCategoria={setCategoriaSeleccionada}
        />

        <div className="row">
          {cursosFiltrados.map((curso) => (
            <CursoCard key={curso.id} curso={curso} />
          ))}
        </div>
      </main>
</>
  );
  }


export default App;
