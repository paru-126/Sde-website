
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface Job {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
}

const jobs: Job[] = [
  {
    id: 1,
    title: "Senior Electronics Engineer",
    department: "R&D",
    location: "Silicon Valley, CA",
    type: "Full-time",
    description: "Design and develop innovative electronic systems and components for our next-generation products. Lead technical teams and collaborate with cross-functional departments.",
    requirements: [
      "Bachelor's or Master's degree in Electrical Engineering",
      "5+ years of experience in electronics design",
      "Experience with analog and digital circuit design",
      "Proficiency in PCB layout and design tools",
      "Knowledge of industry standards (IPC, JEDEC, etc.)"
    ]
  },
  {
    id: 2,
    title: "Manufacturing Technician",
    department: "Production",
    location: "Munich, Germany",
    type: "Full-time",
    description: "Support the production of electronic components and assemblies. Operate and maintain manufacturing equipment, perform quality checks, and troubleshoot technical issues.",
    requirements: [
      "Associate degree in Electronics or related field",
      "2+ years of experience in electronics manufacturing",
      "Experience with SMT equipment and processes",
      "Ability to read and interpret technical drawings",
      "Knowledge of quality control procedures"
    ]
  },
  {
    id: 3,
    title: "Software Developer - Embedded Systems",
    department: "Software",
    location: "Singapore",
    type: "Full-time",
    description: "Develop firmware and embedded software for our electronic products. Collaborate with hardware engineers to integrate software with electronic systems.",
    requirements: [
      "Bachelor's degree in Computer Science or related field",
      "3+ years of experience in embedded software development",
      "Proficiency in C/C++ programming",
      "Experience with microcontrollers and real-time operating systems",
      "Knowledge of communication protocols (I2C, SPI, UART, etc.)"
    ]
  },
  {
    id: 4,
    title: "Quality Assurance Specialist",
    department: "Quality",
    location: "Silicon Valley, CA",
    type: "Full-time",
    description: "Ensure that all products meet quality standards and specifications. Develop and implement quality control procedures, conduct audits, and identify areas for improvement.",
    requirements: [
      "Bachelor's degree in Engineering or related field",
      "3+ years of experience in quality assurance",
      "Knowledge of quality management systems (ISO 9001)",
      "Experience with testing equipment and methodologies",
      "Strong analytical and problem-solving skills"
    ]
  },
  {
    id: 5,
    title: "Technical Sales Representative",
    department: "Sales",
    location: "Remote",
    type: "Full-time",
    description: "Promote and sell our electronic products to clients. Understand technical specifications, identify client needs, and provide solutions that meet those needs.",
    requirements: [
      "Bachelor's degree in Engineering or related field",
      "2+ years of experience in technical sales",
      "Strong understanding of electronic components and systems",
      "Excellent communication and presentation skills",
      "Willingness to travel (30%)"
    ]
  }
];

const JobList = () => {
  const [filter, setFilter] = useState("All");
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  const filteredJobs = filter === "All" 
    ? jobs 
    : jobs.filter(job => job.department === filter || job.location === filter);

  const departments = [...new Set(jobs.map(job => job.department))];
  const locations = [...new Set(jobs.map(job => job.location))];

  return (
    <section id="openPositions" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4 text-center">Open Positions</h2>
        <p className="text-gray-700 mb-8 text-center max-w-3xl mx-auto">
          Explore our current job openings and find your next career opportunity with ElectroTech.
        </p>
        
        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          <Button 
            variant={filter === "All" ? "default" : "outline"} 
            onClick={() => setFilter("All")}
            className={filter === "All" ? "bg-tech-blue" : ""}
          >
            All
          </Button>
          {departments.map(dept => (
            <Button 
              key={dept}
              variant={filter === dept ? "default" : "outline"} 
              onClick={() => setFilter(dept)}
              className={filter === dept ? "bg-tech-blue" : ""}
            >
              {dept}
            </Button>
          ))}
          {locations.map(location => (
            <Button 
              key={location}
              variant={filter === location ? "default" : "outline"} 
              onClick={() => setFilter(location)}
              className={filter === location ? "bg-tech-blue" : ""}
            >
              {location}
            </Button>
          ))}
        </div>
        
        {/* Job listings */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredJobs.map((job) => (
            <Card key={job.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold">{job.title}</h3>
                  <span className="bg-tech-blue/10 text-tech-blue px-2 py-1 rounded text-sm">
                    {job.type}
                  </span>
                </div>
                <div className="flex flex-wrap gap-x-6 gap-y-2 mb-4 text-sm text-gray-600">
                  <div>Department: {job.department}</div>
                  <div>Location: {job.location}</div>
                </div>
                <p className="text-gray-700 mb-4">
                  {job.description}
                </p>
              </CardContent>
              <CardFooter className="flex justify-between border-t pt-4">
                <Button 
                  variant="outline"
                  onClick={() => setSelectedJob(job)}
                >
                  View Details
                </Button>
                <Button className="bg-tech-blue hover:bg-tech-accent">
                  Apply Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        {/* No jobs found message */}
        {filteredJobs.length === 0 && (
          <div className="text-center py-12">
            <h3 className="text-xl font-bold mb-2">No positions available</h3>
            <p className="text-gray-700">
              We don't have any openings that match your filter criteria right now. 
              Please try a different filter or check back later.
            </p>
          </div>
        )}
        
        {/* Job details modal */}
        {selectedJob && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{selectedJob.title}</h3>
                    <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-600">
                      <div>Department: {selectedJob.department}</div>
                      <div>Location: {selectedJob.location}</div>
                      <div>Type: {selectedJob.type}</div>
                    </div>
                  </div>
                  <Button 
                    variant="ghost" 
                    onClick={() => setSelectedJob(null)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    ✕
                  </Button>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-2">Job Description</h4>
                  <p className="text-gray-700">{selectedJob.description}</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-2">Requirements</h4>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700">
                    {selectedJob.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex justify-end gap-4">
                  <Button 
                    variant="outline"
                    onClick={() => setSelectedJob(null)}
                  >
                    Close
                  </Button>
                  <Button className="bg-tech-blue hover:bg-tech-accent">
                    Apply Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default JobList;
