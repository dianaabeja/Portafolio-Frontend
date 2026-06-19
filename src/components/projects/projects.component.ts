import { Component } from '@angular/core';
import { Card } from 'primeng/card';
import { Button } from 'primeng/button';
import { Tag } from 'primeng/tag';

interface Project {
  title: string;
  role: string;
  description: string;
  highlights: string[];
  tags: string[];
  link: string;
  repo: string;
  icon: string;
  img?: string;
}

@Component({
  selector: 'app-projects',
  imports: [Card, Button, Tag],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Nova Biometrics',
      role: 'Frontend · UI/UX · CMS mock',
      description: 'CMS administrativo para laboratorio con edición visual, SEO y certificaciones.',
      highlights: [
        'Componentes de administración y edición de contenido',
        'Diseño responsivo y experiencia de usuario',
        'Validación de flujos clave para uso interno'
      ],
      tags: ['Angular', 'TypeScript', 'SCSS', 'CMS Mock'],
      link: 'https://nova-labs-chi.vercel.app/',
      repo: 'https://github.com/dianaabeja/novaLabs',
      icon: 'pi pi-code',
      img: 'proyect3.png'
    },
    {
      title: 'Mi Jardin',
      role: 'Frontend · Product design',
      description: 'Aplicación para organizar cuidados de plantas y seguimiento simple del estado del jardín.',
      highlights: [
        'Flujos de registro y seguimiento por planta',
        'Vista clara para tareas frecuentes',
        'Diseño enfocado en reutilización y usabilidad'
      ],
      tags: ['Angular', 'TypeScript'],
      link: 'https://mi-jardin-phi.vercel.app/',
      repo: 'https://github.com/dianaabeja/MiJardin',
      icon: 'pi pi-globe',
      img: 'proyect1.png'
    },
    {
      title: 'Mi Veterinaria',
      role: 'Frontend · Administración',
      description: 'Sistema para gestión de pacientes, productos y recetas con control de roles.',
      highlights: [
        'Gestión de módulos clave para el negocio',
        'Permisos por perfil y navegación clara',
        'Integración de reportes y documentos básicos'
      ],
      tags: ['React', 'TypeScript', 'Tailwind CSS'],
      link: 'https://mi-veterinaria-puce.vercel.app/',
      repo: 'https://github.com/dianaabeja/MiVeterinaria',
      icon: 'pi pi-heart',
      img: 'proyect2.png'
    }
  ];
}
