# CareerBoost - Job Board Mini-App

A modern, full-stack job board application built with React, TypeScript, and Tailwind CSS. This project demonstrates end-to-end development skills with a clean, professional interface for browsing jobs, viewing details, and submitting applications.

## 🚀 Live Demo

[View Live Demo](https://lovable.dev/projects/87688435-6b14-41c1-80c0-2effe29e887b)

## 📋 Features

### ✅ Core Functionality
- **Browse Jobs** - Clean, filterable job listings with search functionality
- **Job Details** - Comprehensive job information with requirements and benefits
- **Application System** - Professional application form with validation
- **Responsive Design** - Mobile-first, fully responsive across all devices

### 🎨 UI/UX Highlights
- Modern, professional design with consistent branding
- Intuitive navigation and user flow
- Real-time form validation with helpful error messages
- Smooth animations and transitions
- Accessible design following best practices

### 🔧 Technical Features
- **TypeScript** - Full type safety and better developer experience
- **Component Architecture** - Modular, reusable React components
- **Design System** - Consistent styling with shadcn/ui components
- **State Management** - React hooks for local state management
- **Client-side Routing** - React Router for seamless navigation

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **UI Components**: shadcn/ui, Radix UI
- **Routing**: React Router v6
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Code Quality**: ESLint, TypeScript strict mode

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/                     # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── badge.tsx
│   │   └── ...
│   ├── JobCard.tsx            # Job listing card component
│   └── JobFilters.tsx         # Search and filter component
├── pages/
│   ├── Home.tsx               # Main job listings page
│   ├── JobDetail.tsx          # Individual job details
│   ├── JobApplication.tsx     # Job application form
│   └── NotFound.tsx           # 404 error page
├── types/
│   └── job.ts                 # TypeScript interfaces
├── data/
│   └── mockJobs.ts            # Sample job data
├── hooks/
│   ├── use-toast.ts           # Toast notification hook
│   └── use-mobile.tsx         # Mobile detection hook
├── lib/
│   └── utils.ts               # Utility functions
├── App.tsx                    # Main app component with routing
├── main.tsx                   # App entry point
└── index.css                  # Global styles and design tokens
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm (install with [nvm](https://github.com/nvm-sh/nvm#installing-and-updating))
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <YOUR_GIT_URL>
   cd <YOUR_PROJECT_NAME>
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:8080
   ```

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## 📊 Sample Data

The application includes 5 sample job listings with realistic data:

- **Senior Frontend Developer** (TechFlow Inc.) - Full-time, $120k-$150k
- **Full Stack Engineer** (StartupX) - Remote, $90k-$130k  
- **UX/UI Designer** (Design Studio Pro) - Part-time, $50-$75/hr
- **DevOps Engineer** (CloudTech Solutions) - Contract, $80-$100/hr
- **Product Manager** (InnovateCorp) - Full-time, $110k-$140k

## 🎯 Key Components

### JobCard Component
Displays job information in an attractive card format with:
- Job title, company, and location
- Salary information (when available)
- Job type badges (Remote, Full-time, etc.)
- Posted date and quick apply button

### JobFilters Component  
Provides search and filtering functionality:
- Text search across title, company, and location
- Job type filtering with toggle badges
- Clear filters functionality

### JobDetail Page
Comprehensive job information including:
- Complete job description
- Detailed requirements list
- Benefits and perks
- Company information
- Similar job recommendations

### JobApplication Page
Professional application form with:
- Personal information fields
- Resume URL upload
- Cover letter text area
- Real-time form validation
- Success/error handling

## 🔮 Backend Integration

This frontend is designed to work with a backend API. The expected endpoints are:

```bash
GET    /api/jobs              # List all jobs
GET    /api/jobs/:id          # Get job details  
POST   /api/applications      # Submit application
GET    /api/applications      # List applications (admin)
```

### Database Schema

#### Jobs Table
```sql
jobs (
  id: string (primary key)
  title: string
  company: string  
  location: string
  description: text
  type: enum('remote', 'full-time', 'part-time', 'contract')
  salary: string (optional)
  requirements: json
  benefits: json
  posted_date: date
  application_deadline: date (optional)
)
```

#### Applications Table  
```sql
applications (
  id: string (primary key)
  job_id: string (foreign key)
  name: string
  email: string
  resume_url: string
  cover_letter: text
  submitted_at: timestamp
)
```

## 🚀 Deployment

### Frontend Deployment
This app can be deployed to any static hosting service:
- **Vercel**: Connect your GitHub repo for automatic deployments
- **Netlify**: Drag and drop the `dist` folder after running `npm run build`
- **GitHub Pages**: Use GitHub Actions for automated deployment

### Backend Options
- **Node.js + Express**: Traditional REST API
- **Supabase**: Backend-as-a-Service with PostgreSQL
- **Firebase**: Google's backend platform
- **AWS Lambda**: Serverless functions

## 🎨 Design System

The app uses a custom design system built on Tailwind CSS:

### Color Palette
- **Primary**: Purple (`hsl(262 83% 58%)`) - Professional and modern
- **Background**: Light gray (`hsl(250 100% 99%)`) - Clean and minimal
- **Success**: Green (`hsl(142 76% 36%)`) - Positive actions
- **Warning**: Orange (`hsl(32 95% 44%)`) - Attention states

### Typography
- **Font**: System fonts for optimal performance
- **Headings**: Bold weights for clear hierarchy
- **Body**: Readable sizes with proper line spacing

## 🧪 Testing (Recommended)

For a production application, consider adding:

```bash
# Unit Testing
npm install --save-dev @testing-library/react @testing-library/jest-dom jest

# E2E Testing  
npm install --save-dev playwright @playwright/test

# Component Testing
npm install --save-dev @storybook/react
```

## 📱 Mobile Responsiveness

The application is fully responsive with:
- **Mobile-first** design approach
- **Responsive grid** layouts that adapt to screen size
- **Touch-friendly** buttons and form elements
- **Optimized typography** for readability on all devices

## 🔒 Security Considerations

When implementing the backend:
- **Input validation** on all form submissions
- **Rate limiting** to prevent spam applications
- **Email verification** for application notifications
- **SQL injection protection** with parameterized queries
- **XSS protection** by sanitizing user inputs

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👥 Author

Built with ❤️ by saket as a full-stack development demonstration project.

---

## 🔗 Quick Links

- [Live Demo](https://lovable.dev/projects/87688435-6b14-41c1-80c0-2effe29e887b)
- [Issue Tracker](https://github.com/your-username/careerboost/issues)
- [Feature Requests](https://github.com/your-username/careerboost/discussions)

**Ready to launch your career? Start exploring opportunities with CareerBoost!** 🚀
