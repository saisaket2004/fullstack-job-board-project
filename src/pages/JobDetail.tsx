import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  ArrowLeft, 
  MapPin, 
  Building2, 
  Calendar, 
  DollarSign, 
  Clock,
  CheckCircle,
  Gift,
  Briefcase
} from 'lucide-react';
import { mockJobs } from '@/data/mockJobs';

export default function JobDetail() {
  const { id } = useParams<{ id: string }>();
  const job = mockJobs.find(j => j.id === id);

  if (!job) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background to-muted/30 flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold text-foreground">Job Not Found</h1>
          <p className="text-muted-foreground">The job you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/">Back to Jobs</Link>
          </Button>
        </div>
      </div>
    );
  }

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

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'long', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/30">
      {/* Header */}
      <header className="bg-card/80 backdrop-blur-sm border-b border-border/50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Jobs
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
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Job Header */}
            <Card className="border-border/50">
              <CardHeader className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <h1 className="text-3xl font-bold text-foreground">{job.title}</h1>
                    <div className="flex items-center gap-2 text-lg text-muted-foreground">
                      <Building2 className="h-5 w-5" />
                      <span className="font-medium">{job.company}</span>
                    </div>
                  </div>
                  <Badge variant="default" className="shrink-0">
                    {formatJobType(job.type)}
                  </Badge>
                </div>

                <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>{job.location}</span>
                  </div>
                  {job.salary && (
                    <div className="flex items-center gap-2">
                      <DollarSign className="h-4 w-4" />
                      <span>{job.salary}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>Posted {formatDate(job.postedDate)}</span>
                  </div>
                  {job.applicationDeadline && (
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span>Deadline {formatDate(job.applicationDeadline)}</span>
                    </div>
                  )}
                </div>
              </CardHeader>
            </Card>

            {/* Job Description */}
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle>About This Role</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="prose prose-gray max-w-none">
                  {job.description.split('\n').map((paragraph, index) => (
                    <p key={index} className="text-muted-foreground mb-4 last:mb-0">
                      {paragraph.trim()}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Requirements */}
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  Requirements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {job.requirements.map((requirement, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                      <span className="text-muted-foreground">{requirement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Gift className="h-5 w-5 text-primary" />
                  Benefits & Perks
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {job.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-success mt-2 shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Apply Card */}
            <Card className="border-border/50 sticky top-8">
              <CardHeader>
                <CardTitle>Ready to Apply?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Take the next step in your career journey. Submit your application today!
                </p>
                <Button asChild className="w-full" size="lg">
                  <Link to={`/jobs/${job.id}/apply`}>
                    Apply for This Position
                  </Link>
                </Button>
                <Separator />
                <div className="text-xs text-muted-foreground space-y-1">
                  <p>• Your application will be reviewed within 2-3 business days</p>
                  <p>• We'll contact you if your profile matches our requirements</p>
                  <p>• All applications are kept confidential</p>
                </div>
              </CardContent>
            </Card>

            {/* Company Info */}
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle>About {job.company}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  {job.company} is a leading company in the technology sector, committed to innovation and excellence.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Industry:</span>
                    <span className="font-medium">Technology</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Company Size:</span>
                    <span className="font-medium">50-200 employees</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Founded:</span>
                    <span className="font-medium">2015</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Similar Jobs */}
            <Card className="border-border/50">
              <CardHeader>
                <CardTitle>Similar Positions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {mockJobs
                    .filter(j => j.id !== job.id && j.type === job.type)
                    .slice(0, 3)
                    .map(similarJob => (
                      <Link 
                        key={similarJob.id} 
                        to={`/jobs/${similarJob.id}`}
                        className="block p-3 rounded-lg border border-border/50 hover:bg-muted/30 transition-colors"
                      >
                        <h4 className="font-medium text-sm text-foreground">{similarJob.title}</h4>
                        <p className="text-xs text-muted-foreground">{similarJob.company}</p>
                      </Link>
                    ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
