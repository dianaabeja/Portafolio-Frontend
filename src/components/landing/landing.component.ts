import { Component } from '@angular/core';
import { Button } from 'primeng/button';

@Component({
  selector: 'app-landing',
  imports: [Button],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {
  scrollToProjects() {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  }
}
