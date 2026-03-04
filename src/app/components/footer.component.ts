import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="bg-slate-900 dark:bg-black text-white py-12">
      <div class="section-container">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 class="text-xl font-bold mb-4 gradient-text">Sachin Waghmode</h3>
            <p class="text-slate-400">Front-End Developer specializing in Angular</p>
            <p class="text-slate-400 text-sm mt-2">Delivering scalable and high-performance web applications with 4+ years of experience.</p>
          </div>
          <div>
            <h4 class="font-semibold mb-4">Quick Links</h4>
            <ul class="space-y-2 text-slate-400">
              <li><a href="#about" class="hover:text-blue-400 transition-colors">About</a></li>
              <li><a href="#experience" class="hover:text-blue-400 transition-colors">Experience</a></li>
              <li><a href="#projects" class="hover:text-blue-400 transition-colors">Projects</a></li>
              <li><a href="#skills" class="hover:text-blue-400 transition-colors">Skills</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold mb-4">Contact</h4>
            <ul class="space-y-2 text-slate-400">
              <li>
                <a href="tel:+919370676087" class="hover:text-blue-400 transition-colors">+91 9370676087</a>
              </li>
              <li>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sachinwaghmode0520@gmail.com" target="_blank" rel="noopener noreferrer" class="hover:text-blue-400 transition-colors">sachinwaghmode0520@gmail.com</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/sachin-waghmode-162007234/" target="_blank" rel="noopener noreferrer" class="hover:text-blue-400 transition-colors">LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div class="border-t border-slate-700 pt-8">
          <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p class="text-slate-400 text-sm">© 2026 Sachin Waghmode. All rights reserved.</p>
            <div class="flex gap-6">
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sachinwaghmode0520@gmail.com" target="_blank" rel="noopener noreferrer" class="text-slate-400 hover:text-blue-400 transition-colors">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/sachin-waghmode-162007234/" target="_blank" rel="noopener noreferrer" class="text-slate-400 hover:text-blue-400 transition-colors">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `,
})
export class FooterComponent { }
