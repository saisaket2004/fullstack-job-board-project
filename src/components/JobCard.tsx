import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Building2, Calendar, DollarSign } from 'lucide-react';
import { Job } from '@/types/job';
import { Link } from 'react-router-dom';

interface JobCardProps {
  job: Job;
}

const getJobTypeBadgeVariant = (type: Job['type']) => {
  switch (type) {
    case 'remote':
      return 'default';
    case 'full-time':
      return 'secondary';
    case 'part-time':
      return 'outline';
    case 'contract':
      return 'destructive';
    default:
      return 'default';
  }
};

const formatJobType = (type: Job['type']) => {
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
    month: 'short', 
    day: 'numeric',
    year: 'numeric'
  });
};

export function JobCard({ job }: JobCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-200 hover:-translate-y-1 bg-gradient-to-br from-card to-card/50 border-border/50">
      <CardHeader className="space-y-3">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
              {job.title}
            </h3>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Building2 className="h-4 w-4" />
              <span className="font-medium">{job.company}</span>
            </div>
          </div>
          <Badge variant={getJobTypeBadgeVariant(job.type)} className="shrink-0">
            {formatJobType(job.type)}
          </Badge>
        </div>
        
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            <span>{job.location}</span>
          </div>
          {job.salary && (
            <div className="flex items-center gap-1">
              <DollarSign className="h-4 w-4" />
              <span>{job.salary}</span>
            </div>
          )}
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-muted-foreground line-clamp-3">
          {job.description.split('\n')[0]}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <Calendar className="h-3 w-3" />
            <span>Posted {formatDate(job.postedDate)}</span>
          </div>
          
          <Button asChild variant="outline" size="sm" className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
            <Link to={`/jobs/${job.id}`}>
              View Details
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
