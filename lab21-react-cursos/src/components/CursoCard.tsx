import type { Curso } from '../types/Curso';

type Props = {
  curso: Curso;
};

function CursoCard({ curso }: Props) {
  return (
    <div className="col-md-4 mb-3">
      <div className="card h-100 shadow-sm">
        <div className="card-body">
          <h5 className="card-title">{curso.nombre}</h5>
          <p className="card-text mb-1">
            <strong>Categoría:</strong> {curso.categoria}
          </p>
          <p className="card-text mb-1">
            <strong>Duración:</strong> {curso.duracion}
          </p>
          <p className="card-text mb-1">
            <strong>Modalidad:</strong> {curso.modalidad}
          </p>
          <p className="card-text mb-2">
            <strong>Precio:</strong> S/ {curso.precio}
          </p>
          <span className={curso.activo ? 'badge bg-success' : 'badge bg-secondary'}>
            {curso.activo ? 'Disponible' : 'No disponible'}
          </span>
        </div>
      </div>
    </div>
  );
}

export default CursoCard;
