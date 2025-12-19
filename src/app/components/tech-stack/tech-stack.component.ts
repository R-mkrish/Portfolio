import { Component } from '@angular/core';

@Component({
  selector: 'app-tech-stack',
  templateUrl: './tech-stack.component.html',
  styleUrls: ['./tech-stack.component.scss']
})
export class TechStackComponent {
  frontend = [
    'Angular',
    'React',
    'TypeScript',
    'JavaScript (ES6+)',
    'HTML5',
    'CSS3',
    'Responsive Design'
  ];

  backend = [
    '.NET Framework / .NET Core',
    'C#',
    'REST APIs',
    'Authentication/Authorization'
  ];

  tools = [
    'Git',
    'GitHub',
    'GitLab/Bitbucket',
    'Basic CI/CD',
    'VS Code / Visual Studio',
    'Postman'
  ];

  other = [
    'Cloud Hosting (Netlify, GitHub Pages, Firebase)',
    'Unit Testing Frameworks',
    'Agile/Scrum Methodologies'
  ];
}

