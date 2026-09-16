import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimationDirective } from '../directives/scroll-animation.directive';

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, ScrollAnimationDirective],
  template: `
    <section id="experience" class="py-20 bg-white dark:bg-slate-950">
      <div class="section-container">
        <h2 class="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Professional Experience</h2>
        <div class="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mb-12"></div>

        <div class="space-y-8">
          <div *ngFor="let exp of experiences; let i = index" class="card-hover bg-slate-50 dark:bg-slate-900 p-8 rounded-lg border border-slate-200 dark:border-slate-800" [appScrollAnimation]="i % 2 === 0 ? 'slideInLeft' : 'slideInRight'" [scrollAnimationDelay]="0" [scrollAnimationDuration]="700">
            <div class="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div>
                <h3 class="text-2xl font-bold text-slate-900 dark:text-white">{{ exp.title }}</h3>
                <p class="text-lg text-blue-600 dark:text-blue-400 font-semibold">{{ exp.company }}</p>
              </div>
              <span class="text-slate-600 dark:text-slate-400 font-medium mt-2 md:mt-0">{{ exp.period }}</span>
            </div>
            <ul class="space-y-3">
              <li *ngFor="let desc of exp.description" class="flex gap-3 text-slate-700 dark:text-slate-300">
                <svg class="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span>{{ desc }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      title: 'Software Developer',
      company: 'Senwell Solutions Pvt. Ltd.',
      period: 'August 2024 – Present',
      description: [ 
        'Implemented Angular Native Federation–based micro frontend architecture with seamless host–remote integration and independent deployment of federated modules.', 
        'Configured dynamic routing, lazy loading, and shared dependency management across multiple micro frontend applications.', 
        'Built a centralized Angular UI component library with 10+ reusable components, reducing duplicate UI development and improving consistency.', 
        'Engineered a shared Event Bus library to enable event-driven communication between host and remote applications.', 
        'Worked on Angular version migration from v19 to v21, resolving dependency and compatibility issues across micro frontend modules.', 
        'Developed responsive banking-domain interfaces using Angular 18, Tailwind CSS, and component-based architecture across 10+ device and screen types.', 
        'Implemented Reactive Forms with custom validations, dynamic form logic, and structured error handling across multiple screens.', 
        'Integrated Angular applications with PHP-based REST APIs for data fetching and submission workflows.', 
        'Collaborated with UI/UX and backend teams to align API integrations, resolve UI-data issues, and deliver consistent user experiences.', 
        'Worked with Azure DevOps CI/CD pipelines to support build and deployment workflows for frontend applications.' ],
    },
    {
      title: 'Software Developer',
      company: 'ClariTech Solutions LLP, Pune',
      period: 'July 2022 – July 2024',
      description: [ 'Developed a dynamic e-commerce administration interface using Angular 12 for managing website text, images, and videos.', 
        'Integrated Angular frontend with Node.js REST APIs, AWS S3, and MongoDB for content and media management workflows.', 
        'Built responsive UI components and screens using Angular, TypeScript, Angular Material, and Bootstrap.', 
        'Implemented multi-step forms with validations and error handling, reducing invalid submissions by approximately 25%.', 
        'Developed Angular-based lead management workflows for lifecycle tracking, status updates, and lead assignments using Angular 14.', 
        'Built reusable component structures used across 8+ screens, reducing development effort for new screens.', 
        'Implemented HTTP interceptors for authentication token handling and centralized API error handling.', 
        'Followed Git-based feature/develop/main branching practices for collaborative development within a 4–5 member team.' ],
    },
  ];
}
