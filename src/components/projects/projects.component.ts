import { Component } from '@angular/core';
import { Card } from 'primeng/card';
import { Button } from 'primeng/button';
import { Tag } from 'primeng/tag';

interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
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
      description: 'Experiencia frontend para un laboratorio clinico ficticio con CMS mock funcional. Permite editar contenido, imagenes, SEO, certificaciones, FAQs y estilos desde el navegador, mostrando administracion en tiempo real sin depender de una API.',
      tags: ['Angular', 'TypeScript', 'SCSS', 'CMS Mock'],
      link: 'https://nova-labs-chi.vercel.app/',
      icon: 'pi pi-code',
      img: 'proyect3.png'
    },
    {
      title: 'Mi Jardin',
      description: 'App web pensada para cuidar plantas de forma simple: organiza tu jardin, consulta informacion de cuidados y recibe recordatorios de riego para mantener cada planta al dia.',
      tags: ['Angular', 'TypeScript'],
      link: 'https://mi-jardin-phi.vercel.app/',
      icon: 'pi pi-globe',
      img: 'proyect1.png'
    },
    {
      title: 'Mi Veterinaria',
      description: 'Sistema administrativo para veterinaria con productos, ventas, pacientes y recetas medicas en PDF. Incluye control de roles, donde cada perfil accede a funcionalidades distintas segun sus permisos.',
      tags: ['React', 'TypeScript', 'Tailwind CSS'],
      link: 'https://mi-veterinaria-puce.vercel.app/',
      icon: 'pi pi-heart',
      img: 'proyect2.png'
    }
  ];
}
