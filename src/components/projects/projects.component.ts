import { Component } from '@angular/core';
import { Button } from 'primeng/button';
import { Card } from 'primeng/card';
import { Tag } from 'primeng/tag';

interface Project {
  title: string;
  role: string;
  description: string;
  responsibilities: string[];
  tags: string[];
  link: string;
  repo: string;
  img: string;
}

@Component({
  selector: 'app-projects',
  imports: [Card, Button, Tag],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  protected readonly projects: Project[] = [
    {
      title: 'Nova Biometrics',
      role: 'Angular frontend · UX/UI · CMS demo',
      description:
        'Laboratory CMS with a public experience and an administrative workflow for managing content, SEO, and certifications.',
      responsibilities: [
        'Designed and built administrative views and components',
        'Implemented content, media, and certification editing workflows',
        'Created responsive interfaces and validated key interactions',
      ],
      tags: ['Angular', 'TypeScript', 'SCSS', 'CMS Mockup'],
      link: 'https://nova-labs-chi.vercel.app/',
      repo: 'https://github.com/dianaabeja/novaLabs',
      img: 'proyect3.png',
    },
    {
      title: 'My Garden',
      role: 'Angular frontend · Product design',
      description:
        'Application for organizing plant care and reviewing progress through a simple, clear experience.',
      responsibilities: [
        'Built plant registration and growth-tracking flows',
        'Created workflows for recurring care tasks',
        'Designed reusable, usability-focused interfaces',
      ],
      tags: ['Angular', 'TypeScript'],
      link: 'https://mi-jardin-phi.vercel.app/',
      repo: 'https://github.com/dianaabeja/MiJardin',
      img: 'proyect1.png',
    },
    {
      title: 'My Veterinary',
      role: 'React frontend · Administration',
      description:
        'System for managing patients, products, and veterinary prescriptions with role-based access.',
      responsibilities: [
        'Developed patient, inventory, and prescription modules',
        'Implemented navigation and permissions by user role',
        'Added basic reporting and document integration',
      ],
      tags: ['React', 'TypeScript', 'Tailwind CSS'],
      link: 'https://mi-veterinaria-puce.vercel.app/',
      repo: 'https://github.com/dianaabeja/MiVeterinaria',
      img: 'proyect2.png',
    },
  ];
}
