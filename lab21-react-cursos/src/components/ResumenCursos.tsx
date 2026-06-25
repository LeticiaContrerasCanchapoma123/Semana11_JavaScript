import type { Curso } from '../types/Curso';

type Props = {
  cursos: Curso[];
};

function ResumenCursos({ cursos }: Props) {
  const total = cursos.length;
  const disponibles = cursos.filter((curso) => curso.activo).length;
  const promedioPrecio = total === 0
    ? 0
    : cursos.reduce((suma, curso) => suma + curso.precio, 0) / total;

  return (
    <div className="row mb-4">
      <div className="col-md-4">
        <div className="alert alert-primary">
          <strong>Total de cursos:</strong> {total}
        </div>
      </div>
      <div className="col-md-4">
        <div className="alert alert-success">
          <strong>Disponibles:</strong> {disponibles}
        </div>
      </div>
      <div className="col-md-4">
        <div className="alert alert-warning">
          <strong>Precio promedio:</strong> S/ {promedioPrecio.toFixed(2)}
        </div>
      </div>
    </div>
  );
}

export default ResumenCursos;
