import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: 'Senior Software Engineer',
    company: 'Tech Solutions Inc.',
    period: '2020 - Present',
    description: 'Leading the development of scalable web applications using React and Node.js. Mentoring junior developers and improving code quality across the team.',
  },
  {
    role: 'Software Engineer',
    company: 'Innovate Co.',
    period: '2018 - 2020',
    description: 'Developed and maintained features for a large-scale e-commerce platform. Worked on both front-end and back-end systems.',
  },
  {
    role: 'Junior Developer',
    company: 'CodeCrafters',
    period: '2016 - 2018',
    description: 'Assisted in the development of client websites using HTML, CSS, and JavaScript. Gained foundational skills in a fast-paced agency environment.',
  },
];

export function Experience() {
  return (
    <section id="experience" className="w-full py-12 md:py-24 lg:py-32 bg-accent">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm text-foreground">Professional Journey</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-accent-foreground">Work Experience</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A timeline of my career, highlighting key roles and accomplishments.
            </p>
          </div>
        </div>
        <div className="relative mt-12">
          <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-primary/20"></div>
          {experiences.map((exp, index) => (
            <div key={index} className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
              <div className="w-5/12"></div>
              <div className="z-10 flex items-center justify-center w-12 h-12 bg-primary rounded-full shadow-lg">
                <Briefcase className="text-primary-foreground" />
              </div>
              <div className={`w-5/12 px-4 py-6 bg-card rounded-lg shadow-lg ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                <p className="font-bold text-primary">{exp.period}</p>
                <h3 className="text-xl font-bold font-headline mt-1">{exp.role}</h3>
                <p className="text-muted-foreground mb-2">{exp.company}</p>
                <p className="text-sm">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
