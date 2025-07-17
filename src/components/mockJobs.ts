import { Job } from '@/types/job';

export const mockJobs: Job[] = [
  {
    id: '1',
    title: 'Senior Frontend Developer',
    company: 'TechFlow Inc.',
    location: 'San Francisco, CA',
    type: 'full-time',
    salary: '$120,000 - $150,000',
    description: `We're looking for a passionate Senior Frontend Developer to join our innovative team. You'll be working on cutting-edge web applications using React, TypeScript, and modern frontend technologies.
    
As a key member of our engineering team, you'll collaborate with designers and backend developers to create exceptional user experiences. We value clean code, best practices, and continuous learning.`,
    requirements: [
      '5+ years of experience with React and TypeScript',
      'Strong understanding of modern JavaScript (ES6+)',
      'Experience with state management (Redux, Zustand, etc.)',
      'Proficiency in CSS-in-JS solutions and responsive design',
      'Experience with testing frameworks (Jest, React Testing Library)',
      'Knowledge of build tools (Webpack, Vite, etc.)',
      'Strong problem-solving and communication skills'
    ],
    benefits: [
      'Competitive salary and equity package',
      'Comprehensive health, dental, and vision insurance',
      'Flexible work arrangements and remote options',
      'Professional development budget ($2,000/year)',
      'Unlimited PTO policy',
      'Top-tier equipment and home office setup budget'
    ],
    postedDate: '2024-01-15',
    applicationDeadline: '2024-02-15'
  },
  {
    id: '2',
    title: 'Full Stack Engineer',
    company: 'StartupX',
    location: 'Austin, TX',
    type: 'remote',
    salary: '$90,000 - $130,000',
    description: `Join our fast-growing startup as a Full Stack Engineer! You'll work across our entire technology stack, from React frontends to Node.js APIs and cloud infrastructure.
    
This is a perfect opportunity for someone who loves wearing multiple hats and thrives in a dynamic, fast-paced environment. You'll have significant impact on product direction and technical decisions.`,
    requirements: [
      '3+ years of full-stack development experience',
      'Strong skills in React and Node.js',
      'Experience with databases (PostgreSQL, MongoDB)',
      'Knowledge of cloud platforms (AWS, GCP, or Azure)',
      'Understanding of DevOps practices and CI/CD',
      'Experience with API design and development',
      'Startup experience preferred'
    ],
    benefits: [
      'Competitive salary with significant equity upside',
      'Fully remote work environment',
      'Health and dental insurance',
      'Annual team retreats',
      'Learning and development budget',
      'Flexible hours and work-life balance'
    ],
    postedDate: '2024-01-10',
    applicationDeadline: '2024-02-10'
  },
  {
    id: '3',
    title: 'UX/UI Designer',
    company: 'Design Studio Pro',
    location: 'New York, NY',
    type: 'part-time',
    salary: '$50 - $75/hour',
    description: `We're seeking a talented UX/UI Designer to help create beautiful and intuitive digital experiences. You'll work on diverse projects ranging from mobile apps to web platforms.
    
The ideal candidate has a strong portfolio showcasing user-centered design thinking and modern design trends. You'll collaborate closely with our development and product teams.`,
    requirements: [
      '3+ years of UX/UI design experience',
      'Proficiency in Figma, Sketch, or Adobe Creative Suite',
      'Strong portfolio demonstrating design process',
      'Understanding of user research and usability testing',
      'Knowledge of responsive and mobile-first design',
      'Basic understanding of HTML/CSS',
      'Experience with design systems'
    ],
    benefits: [
      'Competitive hourly rate',
      'Flexible part-time schedule (20-30 hours/week)',
      'Work on diverse, exciting projects',
      'Professional growth opportunities',
      'Collaborative team environment',
      'Remote work options available'
    ],
    postedDate: '2024-01-12',
    applicationDeadline: '2024-02-12'
  },
  {
    id: '4',
    title: 'DevOps Engineer',
    company: 'CloudTech Solutions',
    location: 'Seattle, WA',
    type: 'contract',
    salary: '$80 - $100/hour',
    description: `We need an experienced DevOps Engineer for a 6-month contract to help modernize our infrastructure and deployment processes. You'll work with cutting-edge cloud technologies and help build scalable systems.
    
This role offers the opportunity to work with a talented team on challenging technical problems while having significant autonomy and impact.`,
    requirements: [
      '4+ years of DevOps/Infrastructure experience',
      'Strong experience with AWS or GCP',
      'Expertise in Docker and Kubernetes',
      'Proficiency with Infrastructure as Code (Terraform, CloudFormation)',
      'Experience with CI/CD pipelines (Jenkins, GitLab CI, GitHub Actions)',
      'Knowledge of monitoring and logging tools',
      'Strong scripting skills (Python, Bash)'
    ],
    benefits: [
      'Competitive contract rates',
      'Flexible working arrangements',
      'Opportunity for contract extension',
      'Work with modern cloud technologies',
      'Collaborative and supportive team',
      'Potential for full-time conversion'
    ],
    postedDate: '2024-01-08',
    applicationDeadline: '2024-01-30'
  },
  {
    id: '5',
    title: 'Product Manager',
    company: 'InnovateCorp',
    location: 'Boston, MA',
    type: 'full-time',
    salary: '$110,000 - $140,000',
    description: `Join our product team as a Product Manager and help shape the future of our SaaS platform. You'll work closely with engineering, design, and business stakeholders to define and execute product strategy.
    
We're looking for someone with strong analytical skills, customer empathy, and the ability to translate business requirements into technical specifications.`,
    requirements: [
      '3+ years of product management experience',
      'Experience with B2B SaaS products',
      'Strong analytical and data-driven decision making',
      'Excellent communication and stakeholder management',
      'Experience with product management tools (Jira, Miro, etc.)',
      'Understanding of agile development processes',
      'Technical background preferred'
    ],
    benefits: [
      'Competitive salary and bonus structure',
      'Comprehensive benefits package',
      'Stock options and equity participation',
      'Professional development opportunities',
      'Flexible work arrangements',
      'Great team culture and work environment'
    ],
    postedDate: '2024-01-14',
    applicationDeadline: '2024-02-14'
  }
];
