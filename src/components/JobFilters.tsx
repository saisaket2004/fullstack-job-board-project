import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Search, X } from 'lucide-react';
import { JobType } from '@/types/job';

interface JobFiltersProps {
  searchTerm: string;
  onSearchChange: (value: string) => void;
  selectedTypes: JobType[];
  onTypeToggle: (type: JobType) => void;
  onClearFilters: () => void;
}

const jobTypes: { value: JobType; label: string }[] = [
  { value: 'full-time', label: 'Full Time' },
  { value: 'part-time', label: 'Part Time' },
  { value: 'remote', label: 'Remote' },
  { value: 'contract', label: 'Contract' }
];

export function JobFilters({ 
  searchTerm, 
  onSearchChange, 
  selectedTypes, 
  onTypeToggle, 
  onClearFilters 
}: JobFiltersProps) {
  const hasActiveFilters = searchTerm || selectedTypes.length > 0;

  return (
    <Card className="border-border/50">
      <CardContent className="p-6 space-y-6">
        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search jobs by title, company, or location..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10"
          />
        </div>

        {/* Job Type Filters */}
        <div className="space-y-3">
          <h3 className="text-sm font-medium text-foreground">Job Type</h3>
          <div className="flex flex-wrap gap-2">
            {jobTypes.map((type) => {
              const isSelected = selectedTypes.includes(type.value);
              return (
                <Badge
                  key={type.value}
                  variant={isSelected ? "default" : "outline"}
                  className={`cursor-pointer transition-colors hover:bg-primary hover:text-primary-foreground ${
                    isSelected ? 'bg-primary text-primary-foreground' : ''
                  }`}
                  onClick={() => onTypeToggle(type.value)}
                >
                  {type.label}
                </Badge>
              );
            })}
          </div>
        </div>

        {/* Clear Filters */}
        {hasActiveFilters && (
          <Button
            variant="outline"
            size="sm"
            onClick={onClearFilters}
            className="w-full"
          >
            <X className="h-4 w-4 mr-2" />
            Clear Filters
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
