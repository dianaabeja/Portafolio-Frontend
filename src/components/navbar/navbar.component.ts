import { Component, OnInit, OnDestroy, HostBinding } from '@angular/core';
import { Menubar } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  imports: [Menubar],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit, OnDestroy {
  items: MenuItem[] = [
    { label: 'Inicio',      icon: 'pi pi-home',      command: () => this.scrollTo('landing') },
    { label: 'Sobre mí',    icon: 'pi pi-user',      command: () => this.scrollTo('about') },
    { label: 'Habilidades', icon: 'pi pi-star',      command: () => this.scrollTo('herramientas') },
    { label: 'Proyectos',   icon: 'pi pi-briefcase', command: () => this.scrollTo('projects') }
  ];

  @HostBinding('attr.data-section') activeSection = 'landing';

  private observer!: IntersectionObserver;

  ngOnInit() {
    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) this.activeSection = entry.target.id;
        }
      },
      { threshold: 0.4 }
    );
    ['landing', 'about', 'herramientas', 'projects'].forEach(id => {
      const el = document.getElementById(id);
      if (el) this.observer.observe(el);
    });
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }

  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
