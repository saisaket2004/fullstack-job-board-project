export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  description: string;
  type: 'remote' | 'full-time' | 'part-time' | 'contract';
  salary?: string;
  requirements: string[];
  benefits: string[];
  postedDate: string;
  applicationDeadline?: string;
}

export interface Application {
  id: string;
  jobId: string;
  name: string;
  email: string;
  resumeUrl: string;
  coverLetter: string;
  submittedAt: string;
}

export type JobType = Job['type'];
