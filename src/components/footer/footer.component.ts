import { Component } from '@angular/core';

interface SocialLink {
  label: string;
  icon: string;
  url: string;
}

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  email = 'bagdiana03@gmail.com';

  socials: SocialLink[] = [
    { label: 'GitHub',    icon: 'pi pi-github',   url: 'https://github.com/dianaabeja' },
    { label: 'LinkedIn',  icon: 'pi pi-linkedin',  url: 'https://www.linkedin.com/in/dianalaurabautistagarcia/' },
    { label: 'Instagram', icon: 'pi pi-instagram', url: 'https://www.instagram.com/diana_abeja/' },
  ];

  currentYear = new Date().getFullYear();
}
