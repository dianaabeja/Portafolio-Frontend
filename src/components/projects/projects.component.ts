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
      role: 'Frontend · UI/UX · CMS mockup',
      description: 'Administrative CMS for a lab with visual editing, SEO support, and certification workflows.',
      highlights: [
        'Content management and admin interface components',
        'Responsive design focused on usability',
        'Validation of key internal business flows'
      ],
      tags: ['Angular', 'TypeScript', 'SCSS', 'CMS Mockup'],
      link: 'https://nova-labs-chi.vercel.app/',
      repo: 'https://github.com/dianaabeja/novaLabs',
      icon: 'pi pi-code',
      img: 'proyect3.png'
    },
    {
      title: 'My Garden',
      role: 'Frontend · Product design',
      description: 'Application to organize plant care and track the garden status with a simple workflow.',
      highlights: [
        'Plant registration and progress-tracking flows',
        'Clear view for recurring care tasks',
        'UI designed for reuse and usability'
      ],
      tags: ['Angular', 'TypeScript'],
      link: 'https://mi-jardin-phi.vercel.app/',
      repo: 'https://github.com/dianaabeja/MiJardin',
      icon: 'pi pi-globe',
      img: 'proyect1.png'
    },
    {
      title: 'My Veterinary',
      role: 'Frontend · Administration',
      description: 'System for managing patients, products, and prescriptions with role-based access control.',
      highlights: [
        'Management of key business modules',
        'Clear role-based navigation and permissions',
        'Basic reporting and document integration'
      ],
      tags: ['React', 'TypeScript', 'Tailwind CSS'],
      link: 'https://mi-veterinaria-puce.vercel.app/',
      repo: 'https://github.com/dianaabeja/MiVeterinaria',
      icon: 'pi pi-heart',
      img: 'proyect2.png'
    }
  ];
}
