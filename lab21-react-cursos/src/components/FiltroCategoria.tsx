type Props = {
  categoriaSeleccionada: string;
  onCambiarCategoria: (categoria: string) => void;
};

function FiltroCategoria({ categoriaSeleccionada, onCambiarCategoria }: Props) {
  return (
    <div className="mb-4">
      <label className="form-label fw-bold">Filtrar por categoría</label>
      <select
        className="form-select"
        value={categoriaSeleccionada}
        onChange={(event) => onCambiarCategoria(event.target.value)}
      >
        <option value="Todas">Todas</option>
        <option value="Frontend">Frontend</option>
        <option value="Backend">Backend</option>
        <option value="Base de datos">Base de datos</option>
      </select>
    </div>
  );
}

export default FiltroCategoria;
