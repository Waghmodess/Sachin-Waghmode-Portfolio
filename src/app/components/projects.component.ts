import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimationDirective } from '../directives/scroll-animation.directive';

interface Project {
  title: string;
  role: string;
  tech: string[];
  description: string;
  highlight?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, ScrollAnimationDirective],
  template: `
    <section id="projects" class="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <div class="section-container">
        <h2 class="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Key Projects</h2>
        <div class="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mb-12"></div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div *ngFor="let project of projects; let i = index" class="card-hover bg-white dark:bg-slate-950 rounded-xl shadow-md border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-xl" [appScrollAnimation]="i % 2 === 0 ? 'slideInLeft' : 'slideInRight'" [scrollAnimationDelay]="0" [scrollAnimationDuration]="700">
            <div class="p-8">
              <h3 class="text-2xl font-bold text-slate-900 dark:text-white mb-2" >{{ project.title }}</h3>
              <p class="text-blue-600 dark:text-blue-400 font-semibold mb-4" >{{ project.role }}</p>
              
              <p class="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">{{ project.description }}</p>

              <div *ngIf="project.highlight" class="bg-blue-50 dark:bg-slate-900 border-l-4 border-blue-600 p-4 mb-6 rounded">
                <p class="text-slate-800 dark:text-slate-200 font-semibold">{{ project.highlight }}</p>
              </div>

              <div>
                <p class="text-sm font-semibold text-slate-600 dark:text-slate-400 mb-3">Technologies:</p>
                <div class="flex flex-wrap gap-2">
                  <span *ngFor="let tech of project.tech" class="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                    {{ tech }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'KC Digital Gateway (Micro Frontend)',
      role: 'Software Developer',
      tech: ['Angular 19–21', 'TypeScript', 'JavaScript', 'RxJS', 'Angular Native Federation (Micro Frontends)', 'PrimeNG', 'Tailwind CSS', 'HTML5', 'SCSS/CSS3', 'RESTful APIs (.NET)'],
      description: 'Enterprise-grade digital gateway built using Angular Native Federation to integrate multiple micro frontend applications into a unified platform.',
      highlight: 'Implemented host–remote integration, centralized UI libraries, shared event bus communication, and led Angular version migration (v19–v21) to ensure scalable, high-performance frontend architecture.',
    },
    {
      title: 'Imsme',
      role: 'Software Developer',
      tech: ['Angular 18', 'TypeScript', 'JavaScript', 'RxJS', 'HTML5', 'SCSS/CSS3', 'CSS', 'Bootstrap', 'Angular Material', 'Tailwind CSS', 'RESTful APIs (PHP)', 'Git Version Control'],
      description: 'Digital financing marketplace (imSME) designed to connect micro, small and medium enterprises with optimal loan and funding options via an online SaaS platform.',
      highlight: 'Developed scalable front-end functionality and seamless backend integration for real-time loan matching and financing workflows on a high-traffic production platform.',
    },
    {
      title: 'E-Commerce Website (Dynamic)',
      role: 'Software Developer',
      tech: ['Angular 14', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Bootstrap', 'Angular Material', 'RESTful APIs (Node.js)', 'MongoDB', 'AWS S3', 'Git Version Control'],
      description: 'Dynamic e-commerce platform with admin dashboards for managing products, content, and media assets.',
      highlight: 'Built responsive admin and user interfaces, integrated Node.js APIs with cloud storage, and improved data quality through robust form validations.',
    },

    {
      title: 'Lead Management System (LMS)',
      role: 'Software Developer',
      tech: ['Angular 12', 'TypeScript', 'JavaScript', 'RxJS', 'HTML5', 'CSS3', 'Bootstrap', 'Angular Material', 'RESTful APIs (Node.js)', 'Git Version Control'],
      description: 'Web-based lead management platform developed to track, organize, and manage customer leads efficiently.',
      highlight: 'Built responsive dashboards and automated lead tracking workflows to improve sales productivity and data accuracy.',
    }
  ];
}
