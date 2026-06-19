import { Component } from '@angular/core';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { LandingComponent } from '../components/landing/landing.component';
import { AboutComponent } from '../components/about/about.component';
import { StackComponent } from '../components/stack/stack.component';
import { ProjectsComponent } from '../components/projects/projects.component';
import { HerramientasComponent } from '../components/herramientas/herramientas.component';
import { FooterComponent } from '../components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, LandingComponent, AboutComponent, StackComponent, HerramientasComponent, ProjectsComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {}
