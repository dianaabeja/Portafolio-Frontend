import { Component, OnInit, OnDestroy, HostBinding, HostListener, ElementRef, ViewChild } from '@angular/core';
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
    { label: 'Home',      icon: 'pi pi-home',      command: () => this.scrollTo('landing') },
    { label: 'About',     icon: 'pi pi-user',      command: () => this.scrollTo('about') },
    { label: 'Skills',    icon: 'pi pi-star',      command: () => this.scrollTo('herramientas') },
    { label: 'Projects',  icon: 'pi pi-briefcase', command: () => this.scrollTo('projects') }
  ];

  @HostBinding('attr.data-section') activeSection = 'landing';
  @ViewChild(Menubar) private menubar?: Menubar;

  private observer!: IntersectionObserver;

  constructor(private el: ElementRef<HTMLElement>) {}

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

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as Node;
    const clickedInside = this.el.nativeElement.contains(target);

    if (!clickedInside) {
      (this.menubar as any)?.hide?.();
    }
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }

  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
