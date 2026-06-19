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
      description: 'Clear, responsive interfaces designed around the user experience.',
      items: ['Angular', 'Ionic', 'TypeScript', 'HTML/CSS', 'PrimeNG']
    },
    {
      title: 'Backend',
      description: 'APIs and business logic focused on maintainability, security, and scalability.',
      items: ['NestJS', 'Python', 'REST APIs', 'Authentication', 'Validation']
    },
    {
      title: 'Data & Cloud',
      description: 'Infrastructure and deployments with a practical view of operations and monitoring.',
      items: ['AWS', 'S3 / CloudFront', 'PostgreSQL', 'GitHub Actions', 'Vercel']
    }
  ];
}
