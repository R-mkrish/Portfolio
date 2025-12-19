import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent {
  responsibilities = [
    'Building and maintaining production-level web applications using .NET, Angular, and React',
    'Working on SaaS products like ClaySys Apps, contributing to core features and improvements',
    'Collaborating in Agile/Scrum teams, participating in daily standups, sprint planning, and retrospectives',
    'Implementing new features from design to deployment, ensuring code quality and best practices',
    'Fixing bugs, refactoring legacy code, and improving application performance and user experience',
    'Writing reusable components and services, following DRY principles and clean architecture patterns',
    'Participating in code reviews, providing constructive feedback, and maintaining coding standards',
    'Optimizing database queries, API responses, and frontend rendering for better performance',
    'Working with version control systems (Git) and CI/CD pipelines for automated testing and deployment'
  ];
}

