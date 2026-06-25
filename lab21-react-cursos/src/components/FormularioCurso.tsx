import { useState } from 'react';
import type { Curso } from '../types/Curso';

type Props = {
  onAgregarCurso: (curso: Curso) => void;
};

function FormularioCurso({ onAgregarCurso }: Props) {
  const [nombre, setNombre] = useState('');
  const [categoria, setCategoria] = useState('Frontend');
  const [duracion, setDuracion] = useState('');
  const [precio, setPrecio] = useState(0);
  const [modalidad, setModalidad] = useState<'Virtual' | 'Presencial' | 'Mixta'>('Virtual');
  const [mensajeError, setMensajeError] = useState('');

  const guardarCurso = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (nombre.trim() === '' || duracion.trim() === '' || precio <= 0) {
      setMensajeError('Complete todos los campos y coloque un precio mayor a cero.');
      return;
    }

    const nuevoCurso: Curso = {
      id: Date.now(),
      nombre,
      categoria,
      duracion,
      precio,
      modalidad,
      activo: true
    };

    onAgregarCurso(nuevoCurso);
    setNombre('');
    setCategoria('Frontend');
    setDuracion('');
    setPrecio(0);
    setModalidad('Virtual');
    setMensajeError('');
  };

  return (
    <form className="card p-4 shadow-sm mb-4" onSubmit={guardarCurso}>
      <h4 className="mb-3">Registrar nuevo curso</h4>

      {mensajeError && (
        <div className="alert alert-danger">{mensajeError}</div>
      )}

      <div className="row">
        <div className="col-md-6 mb-3">
          <label className="form-label">Nombre del curso</label>
          <input
            type="text"
            className="form-control"
            value={nombre}
            onChange={(event) => setNombre(event.target.value)}
          />
        </div>

        <div className="col-md-6 mb-3">
          <label className="form-label">Categoría</label>
          <select
            className="form-select"
            value={categoria}
            onChange={(event) => setCategoria(event.target.value)}
          >
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
            <option value="Base de datos">Base de datos</option>
          </select>
        </div>

        <div className="col-md-4 mb-3">
          <label className="form-label">Duración</label>
          <input
            type="text"
            className="form-control"
            value={duracion}
            onChange={(event) => setDuracion(event.target.value)}
          />
        </div>

        <div className="col-md-4 mb-3">
          <label className="form-label">Precio</label>
          <input
            type="number"
            className="form-control"
            value={precio}
            onChange={(event) => setPrecio(Number(event.target.value))}
          />
        </div>

        <div className="col-md-4 mb-3">
          <label className="form-label">Modalidad</label>
          <select
            className="form-select"
            value={modalidad}
            onChange={(event) => setModalidad(event.target.value as 'Virtual' | 'Presencial' | 'Mixta')}
          >
            <option value="Virtual">Virtual</option>
            <option value="Presencial">Presencial</option>
            <option value="Mixta">Mixta</option>
          </select>
        </div>
      </div>

      <button type="submit" className="btn btn-primary">
        Agregar curso
      </button>
    </form>
  );
}

export default FormularioCurso;
