export type Curso = {
  id: number;
  nombre: string;
  categoria: string;
  duracion: string;
  precio: number;
  modalidad: 'Virtual' | 'Presencial' | 'Mixta';
  activo: boolean;
};
