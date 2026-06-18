import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Skill {
  name: string;
  level: number;
  icon: string;
  category: 'frontend' | 'backend' | 'cloud' | 'data' | 'tools';
  color: string;
}

@Component({
  selector: 'app-herramientas',
  imports: [CommonModule],
  templateUrl: './herramientas.component.html',
  styleUrl: './herramientas.component.css'
})
export class HerramientasComponent implements OnInit, OnDestroy {
  animatedLevels: Map<string, number> = new Map();
  private observer!: IntersectionObserver;
  private animated = false;

  skills: Skill[] = [
    { name: 'Angular',        level: 88, icon: 'pi pi-code',       category: 'frontend', color: '#ffffff' },
    { name: 'Ionic',          level: 82, icon: 'pi pi-mobile',     category: 'frontend', color: '#ffffff' },
    { name: 'TypeScript',     level: 84, icon: 'pi pi-file-edit',  category: 'frontend', color: '#ffffff' },
    { name: 'HTML / CSS',     level: 90, icon: 'pi pi-palette',    category: 'frontend', color: '#ffffff' },
    { name: 'React basico',   level: 58, icon: 'pi pi-desktop',    category: 'frontend', color: '#ffffff' },
    { name: 'Node.js',        level: 76, icon: 'pi pi-server',     category: 'backend',  color: '#ffffff' },
    { name: 'Express',        level: 74, icon: 'pi pi-cog',        category: 'backend',  color: '#ffffff' },
    { name: 'Python',         level: 78, icon: 'pi pi-code',       category: 'backend',  color: '#ffffff' },
    { name: 'APIs REST',      level: 82, icon: 'pi pi-link',       category: 'backend',  color: '#ffffff' },
    { name: 'JWT',            level: 70, icon: 'pi pi-lock',       category: 'backend',  color: '#ffffff' },
    { name: 'AWS Lambda',     level: 74, icon: 'pi pi-cloud',      category: 'cloud',    color: '#ffffff' },
    { name: 'S3 / CloudFront', level: 70, icon: 'pi pi-upload',    category: 'cloud',    color: '#ffffff' },
    { name: 'Linux / VPS',    level: 68, icon: 'pi pi-server',     category: 'cloud',    color: '#ffffff' },
    { name: 'CI/CD',          level: 65, icon: 'pi pi-sync',       category: 'cloud',    color: '#ffffff' },
    { name: 'PostgreSQL',     level: 72, icon: 'pi pi-database',   category: 'data',     color: '#ffffff' },
    { name: 'MySQL',          level: 70, icon: 'pi pi-database',   category: 'data',     color: '#ffffff' },
    { name: 'DynamoDB',       level: 68, icon: 'pi pi-database',   category: 'data',     color: '#ffffff' },
    { name: 'Git / GitHub',   level: 82, icon: 'pi pi-github',     category: 'tools',    color: '#ffffff' },
    { name: 'Figma',          level: 70, icon: 'pi pi-pencil',     category: 'tools',    color: '#ffffff' },
    { name: 'Postman',        level: 76, icon: 'pi pi-send',       category: 'tools',    color: '#ffffff' },
    { name: 'Codex / Claude', level: 74, icon: 'pi pi-sparkles',   category: 'tools',    color: '#ffffff' },
  ];

  categories = [
    { key: 'frontend', label: 'Frontend', icon: 'pi pi-desktop' },
    { key: 'backend',  label: 'Backend',  icon: 'pi pi-server'  },
    { key: 'cloud',    label: 'Cloud y servidores', icon: 'pi pi-cloud' },
    { key: 'data',     label: 'Bases de datos', icon: 'pi pi-database' },
    { key: 'tools',    label: 'IA y herramientas', icon: 'pi pi-wrench'  },
  ];

  getLevelLabel(level: number): string {
    if (level >= 85) return 'EXPERTO';
    if (level >= 70) return 'AVANZADO';
    if (level >= 50) return 'INTERMEDIO';
    return 'APRENDIZ';
  }

  getSkillsByCategory(cat: string): Skill[] {
    return this.skills.filter(s => s.category === cat);
  }

  getAnimatedLevel(name: string): number {
    return this.animatedLevels.get(name) ?? 0;
  }

  ngOnInit() {
    this.skills.forEach(s => this.animatedLevels.set(s.name, 0));

    this.observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !this.animated) {
          this.animated = true;
          this.animateAll();
        }
      },
      { threshold: 0.2 }
    );

    const el = document.getElementById('herramientas');
    if (el) this.observer.observe(el);
  }

  private animateAll() {
    const duration = 1200;
    const steps = 60;
    const interval = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = this.easeOut(step / steps);
      this.skills.forEach(s => {
        this.animatedLevels.set(s.name, Math.round(s.level * progress));
      });
      if (step >= steps) clearInterval(timer);
    }, interval);
  }

  private easeOut(t: number): number {
    return 1 - Math.pow(1 - t, 3);
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}
