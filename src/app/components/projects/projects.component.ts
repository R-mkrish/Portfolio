import { Component, OnInit, OnDestroy } from '@angular/core';

interface Project {
  name: string;
  summary: string;
  bullets: string[];
  url?: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, OnDestroy {
  currentIndex = 0;
  private autoSlideInterval: any;

  projects: Project[] = [
    {
      name: 'ClaySys Apps',
      summary: 'A comprehensive SaaS application platform for business process management and workflow automation.',
      bullets: [
        'Implemented core frontend modules in Angular, including reusable UI components and state management using RxJS and NgRx patterns.',
        'Developed and integrated REST APIs using .NET Core to support key product features, ensuring secure authentication and authorization.',
        'Worked on performance optimizations, including lazy loading modules, code splitting, and API response caching to improve load times.',
        'Collaborated with the team on new feature design, participated in code reviews, and managed deployment pipelines using CI/CD practices.',
        'Impact: Contributed to a production SaaS platform that serves multiple clients, improving their business process efficiency.'
      ],
      url: 'https://claysysapps.com/'
    },
    {
      name: 'Admin Dashboard System',
      summary: 'An internal administration dashboard built with Angular and .NET APIs for managing user roles, analytics, and system configuration.',
      bullets: [
        'Built responsive Angular components with Material Design principles, creating a consistent and intuitive admin interface.',
        'Designed and implemented .NET Core REST APIs with role-based access control (RBAC) for secure data management.',
        'Integrated real-time data visualization using charting libraries to display analytics and system metrics.',
        'Implemented advanced filtering, sorting, and pagination features to handle large datasets efficiently.',
        'What I learned: Deepened understanding of complex state management in Angular and secure API design patterns.'
      ]
    },
    {
      name: 'Analytics Dashboard',
      summary: 'A React-based single-page application for data visualization and business intelligence reporting.',
      bullets: [
        'Developed a modern React application using functional components and React Hooks for state management.',
        'Created interactive data visualizations using D3.js and Chart.js, allowing users to drill down into metrics.',
        'Implemented responsive design with CSS Grid and Flexbox, ensuring optimal viewing across all devices.',
        'Built a clean, component-based architecture with reusable UI elements and custom hooks for data fetching.',
        'Impact: Enabled stakeholders to make data-driven decisions through intuitive visualizations and real-time updates.'
      ]
    },
    {
      name: 'Subscription Management Platform',
      summary: 'A full-stack mini-SaaS application for managing subscriptions, billing, and customer lifecycle.',
      bullets: [
        'Architected the entire application using Angular for frontend and .NET Core for backend, following clean architecture principles.',
        'Implemented secure payment processing integration and automated billing workflows using webhooks.',
        'Designed a scalable database schema with SQL Server, optimizing queries for performance and maintaining data integrity.',
        'Created a comprehensive admin panel for managing subscriptions, customer data, and generating financial reports.',
        'What I learned: Gained hands-on experience in building end-to-end SaaS features, payment processing, and subscription business logic.'
      ]
    },
    {
      name: 'E-Commerce API Platform',
      summary: 'A robust .NET Core REST API backend for an e-commerce platform with comprehensive product and order management.',
      bullets: [
        'Developed RESTful APIs using ASP.NET Core with proper HTTP methods, status codes, and error handling.',
        'Implemented JWT-based authentication and authorization, ensuring secure access to protected endpoints.',
        'Created efficient data models and repository patterns, optimizing database queries for high-performance operations.',
        'Integrated third-party services for payment processing and shipping calculations, handling async operations effectively.',
        'Impact: Provided a reliable, scalable backend that supports high transaction volumes and maintains data consistency.'
      ]
    }
  ];

  ngOnInit(): void {
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
  }

  nextProject(): void {
    this.currentIndex = (this.currentIndex + 1) % this.projects.length;
    this.resetAutoSlide();
  }

  previousProject(): void {
    this.currentIndex = (this.currentIndex - 1 + this.projects.length) % this.projects.length;
    this.resetAutoSlide();
  }

  goToProject(index: number): void {
    this.currentIndex = index;
    this.resetAutoSlide();
  }

  startAutoSlide(): void {
    this.autoSlideInterval = setInterval(() => {
      this.nextProject();
    }, 5000); // Auto-slide every 5 seconds
  }

  resetAutoSlide(): void {
    if (this.autoSlideInterval) {
      clearInterval(this.autoSlideInterval);
    }
    this.startAutoSlide();
  }
}

