import type { Curso } from '../types/Curso';

export const cursosIniciales: Curso[] = [
  {
    id: 1,
    nombre: 'Angular desde cero',
    categoria: 'Frontend',
    duracion: '24 horas',
    precio: 180,
    modalidad: 'Virtual',
    activo: true
  },
  {
    id: 2,
    nombre: 'JavaScript avanzado',
    categoria: 'Frontend',
    duracion: '30 horas',
    precio: 220,
    modalidad: 'Presencial',
    activo: true
  },
  {
    id: 3,
    nombre: 'Node.js con Express',
    categoria: 'Backend',
    duracion: '28 horas',
    precio: 250,
    modalidad: 'Mixta',
    activo: false
  }
];
