import { Component } from '@angular/core';

interface StackArea {
  title: string;
  description: string;
  items: string[];
}

@Component({
  selector: 'app-stack',
  standalone: true,
  templateUrl: './stack.component.html',
  styleUrl: './stack.component.css'
})
export class StackComponent {
  stackAreas: StackArea[] = [
    {
      title: 'Frontend',
      description: 'Interfaces claras, responsivas y orientadas a la experiencia del usuario.',
      items: ['Angular', 'Ionic', 'TypeScript', 'HTML/CSS', 'PrimeNG']
    },
    {
      title: 'Backend',
      description: 'APIs y lógica de negocio con foco en mantenimiento, seguridad y escalabilidad.',
      items: ['NestJS', 'Python', 'REST APIs', 'Autenticación', 'Validación']
    },
    {
      title: 'Data & Cloud',
      description: 'Infraestructura y despliegues con visión de operación real y monitoreo básico.',
      items: ['AWS', 'S3 / CloudFront', 'PostgreSQL', 'GitHub Actions', 'Vercel']
    }
  ];
}
