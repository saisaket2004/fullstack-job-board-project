import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';
import { 
  ArrowLeft, 
  Upload, 
  CheckCircle, 
  AlertCircle,
  User,
  Mail,
  Link as LinkIcon,
  FileText,
  Briefcase
} from 'lucide-react';
import { mockJobs } from '@/data/mockJobs';

interface FormData {
  name: string;
  email: string;
  resumeUrl: string;
  coverLetter: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  resumeUrl?: string;
  coverLetter?: string;
}

export default function JobApplication() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const job = mockJobs.find(j => j.id === id);

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    resumeUrl: '',
    coverLetter: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!job) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background to-muted/30 flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold text-foreground">Job Not Found</h1>
          <p className="text-muted-foreground">The job you're trying to apply for doesn't exist.</p>
          <Button asChild>
            <Link to="/">Back to Jobs</Link>
          </Button>
        </div>
      </div>
    );
  }

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required';
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Resume URL validation
    const urlRegex = /^https?:\/\/.+/;
    if (!formData.resumeUrl.trim()) {
      newErrors.resumeUrl = 'Resume URL is required';
    } else if (!urlRegex.test(formData.resumeUrl)) {
      newErrors.resumeUrl = 'Please enter a valid URL (starting with http:// or https://)';
    }

    // Cover letter validation
    if (!formData.coverLetter.trim()) {
      newErrors.coverLetter = 'Cover letter is required';
    } else if (formData.coverLetter.trim().length < 50) {
      newErrors.coverLetter = 'Cover letter must be at least 50 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: undefined
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast({
        title: "Please fix the errors",
        description: "There are some issues with your application. Please review and try again.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));

      // In a real app, you would submit to your backend API here
      console.log('Application submitted:', {
        jobId: job.id,
        ...formData,
        submittedAt: new Date().toISOString()
      });

      toast({
        title: "Application submitted successfully!",
        description: `Your application for ${job.title} at ${job.company} has been received.`,
        variant: "default"
      });

      // Redirect to job detail page after successful submission
      navigate(`/jobs/${job.id}`);
    } catch (error) {
      toast({
        title: "Submission failed",
        description: "There was an error submitting your application. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatJobType = (type: string) => {
    switch (type) {
      case 'remote':
        return 'Remote';
      case 'full-time':
        return 'Full Time';
      case 'part-time':
        return 'Part Time';
      case 'contract':
        return 'Contract';
      default:
        return type;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/30">
      {/* Header */}
      <header className="bg-card/80 backdrop-blur-sm border-b border-border/50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild>
              <Link to={`/jobs/${job.id}`} className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Job
              </Link>
            </Button>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary rounded-lg">
                <Briefcase className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-semibold text-foreground">CareerBoost</span>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Application Form */}
            <div className="lg:col-span-2">
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="text-2xl">Apply for This Position</CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below to submit your application. All fields are required.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Personal Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                        <User className="h-5 w-5" />
                        Personal Information
                      </h3>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name *</Label>
                          <Input
                            id="name"
                            type="text"
                            placeholder="Enter your full name"
                            value={formData.name}
                            onChange={(e) => handleInputChange('name', e.target.value)}
                            className={errors.name ? 'border-destructive' : ''}
                          />
                          {errors.name && (
                            <p className="text-sm text-destructive flex items-center gap-1">
                              <AlertCircle className="h-3 w-3" />
                              {errors.name}
                            </p>
                          )}
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="your.email@example.com"
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            className={errors.email ? 'border-destructive' : ''}
                          />
                          {errors.email && (
                            <p className="text-sm text-destructive flex items-center gap-1">
                              <AlertCircle className="h-3 w-3" />
                              {errors.email}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Resume */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                        <Upload className="h-5 w-5" />
                        Resume
                      </h3>
                      
                      <div className="space-y-2">
                        <Label htmlFor="resumeUrl">Resume URL *</Label>
                        <Input
                          id="resumeUrl"
                          type="url"
                          placeholder="https://drive.google.com/file/d/..."
                          value={formData.resumeUrl}
                          onChange={(e) => handleInputChange('resumeUrl', e.target.value)}
                          className={errors.resumeUrl ? 'border-destructive' : ''}
                        />
                        {errors.resumeUrl && (
                          <p className="text-sm text-destructive flex items-center gap-1">
                            <AlertCircle className="h-3 w-3" />
                            {errors.resumeUrl}
                          </p>
                        )}
                        <p className="text-xs text-muted-foreground">
                          Upload your resume to Google Drive, Dropbox, or another file sharing service and paste the shareable link here.
                        </p>
                      </div>
                    </div>

                    {/* Cover Letter */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground flex items-center gap-2">
                        <FileText className="h-5 w-5" />
                        Cover Letter
                      </h3>
                      
                      <div className="space-y-2">
                        <Label htmlFor="coverLetter">Cover Letter *</Label>
                        <Textarea
                          id="coverLetter"
                          placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                          value={formData.coverLetter}
                          onChange={(e) => handleInputChange('coverLetter', e.target.value)}
                          className={`min-h-[150px] ${errors.coverLetter ? 'border-destructive' : ''}`}
                        />
                        {errors.coverLetter && (
                          <p className="text-sm text-destructive flex items-center gap-1">
                            <AlertCircle className="h-3 w-3" />
                            {errors.coverLetter}
                          </p>
                        )}
                        <p className="text-xs text-muted-foreground">
                          {formData.coverLetter.length}/1000 characters (minimum 50)
                        </p>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-6">
                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full" 
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current mr-2" />
                            Submitting Application...
                          </>
                        ) : (
                          <>
                            <CheckCircle className="h-4 w-4 mr-2" />
                            Submit Application
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Job Summary Sidebar */}
            <div className="space-y-6">
              <Card className="border-border/50 sticky top-8">
                <CardHeader>
                  <CardTitle>Position Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-foreground">{job.title}</h3>
                    <p className="text-sm text-muted-foreground">{job.company}</p>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Location:</span>
                      <span className="font-medium">{job.location}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Type:</span>
                      <Badge variant="outline">{formatJobType(job.type)}</Badge>
                    </div>
                    {job.salary && (
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Salary:</span>
                        <span className="font-medium">{job.salary}</span>
                      </div>
                    )}
                  </div>

                  <div className="pt-4 border-t border-border">
                    <h4 className="font-medium text-foreground mb-2">What to expect:</h4>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      <li>• Application review within 2-3 business days</li>
                      <li>• Initial phone/video screening if selected</li>
                      <li>• Technical interview or assignment</li>
                      <li>• Final interview with team members</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle>Application Tips</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-success mt-0.5 shrink-0" />
                      Customize your cover letter for this specific role
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-success mt-0.5 shrink-0" />
                      Highlight relevant experience and skills
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-success mt-0.5 shrink-0" />
                      Ensure your resume is up-to-date and easily accessible
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-success mt-0.5 shrink-0" />
                      Proofread everything before submitting
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
