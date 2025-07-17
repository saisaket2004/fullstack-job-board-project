import { useState, useMemo } from 'react';
import { JobCard } from '@/components/JobCard';
import { JobFilters } from '@/components/JobFilters';
import { mockJobs } from '@/data/mockJobs';
import { JobType } from '@/types/job';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Users, MapPin, Zap } from 'lucide-react';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTypes, setSelectedTypes] = useState<JobType[]>([]);

  const filteredJobs = useMemo(() => {
    return mockJobs.filter((job) => {
      const matchesSearch = !searchTerm || 
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.location.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesType = selectedTypes.length === 0 || selectedTypes.includes(job.type);

      return matchesSearch && matchesType;
    });
  }, [searchTerm, selectedTypes]);

  const handleTypeToggle = (type: JobType) => {
    setSelectedTypes(prev => 
      prev.includes(type) 
        ? prev.filter(t => t !== type)
        : [...prev, type]
    );
  };

  const handleClearFilters = () => {
    setSearchTerm('');
    setSelectedTypes([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/30">
      {/* Header */}
      <header className="bg-card/80 backdrop-blur-sm border-b border-border/50 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary rounded-lg">
                <Briefcase className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">CareerBoost</h1>
                <p className="text-sm text-muted-foreground">Find your dream job today</p>
              </div>
            </div>
            <Button variant="outline" size="sm">
              Post a Job
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/5 to-primary/10 border-b border-border/50">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Discover Your Next 
              <span className="text-primary block">Career Opportunity</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Connect with top companies and find positions that match your skills and ambitions
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">{mockJobs.length}</div>
                <div className="text-sm text-muted-foreground">Active Jobs</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Companies</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">1,200+</div>
                <div className="text-sm text-muted-foreground">Job Seekers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">95%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar - Filters */}
          <aside className="lg:col-span-1">
            <div className="sticky top-32">
              <JobFilters
                searchTerm={searchTerm}
                onSearchChange={setSearchTerm}
                selectedTypes={selectedTypes}
                onTypeToggle={handleTypeToggle}
                onClearFilters={handleClearFilters}
              />
            </div>
          </aside>

          {/* Job Listings */}
          <div className="lg:col-span-3 space-y-6">
            {/* Results Header */}
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-semibold text-foreground">
                  {filteredJobs.length} Job{filteredJobs.length !== 1 ? 's' : ''} Found
                </h3>
                <p className="text-muted-foreground">
                  Showing {filteredJobs.length} of {mockJobs.length} total positions
                </p>
              </div>
              
              {/* Active Filters */}
              {(searchTerm || selectedTypes.length > 0) && (
                <div className="flex items-center gap-2">
                  {searchTerm && (
                    <Badge variant="outline">
                      Search: "{searchTerm}"
                    </Badge>
                  )}
                  {selectedTypes.map(type => (
                    <Badge key={type} variant="outline">
                      {type.charAt(0).toUpperCase() + type.slice(1).replace('-', ' ')}
                    </Badge>
                  ))}
                </div>
              )}
            </div>

            {/* Job Grid */}
            {filteredJobs.length > 0 ? (
              <div className="grid gap-6">
                {filteredJobs.map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="p-4 bg-muted/30 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Briefcase className="h-8 w-8 text-muted-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">No jobs found</h3>
                <p className="text-muted-foreground mb-4">Try adjusting your search criteria or filters</p>
                <Button onClick={handleClearFilters} variant="outline">
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-card border-t border-border/50 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-muted-foreground">
            <p>&copy; 2024 CareerBoost. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
