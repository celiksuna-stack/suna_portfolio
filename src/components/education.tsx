import { GraduationCap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const education = [
  {
    degree: 'Kimya Mühendisliği (İngilizce)',
    university: 'Ege Üniversitesi - Mühendislik Fakültesi',
    period: '1989 - 1993',
  },
  {
    degree: 'Hazırlık Sınıfı',
    university: 'Ege Üniversitesi - Yabancı Diller Fakültesi',
    period: '1988',
  },
  {
    degree: 'A Sınıfı İş Güvenliği Uzmanı',
    university: 'Eğitim Kurumu',
    period: '2014',
  },
];

export function Education() {
  return (
    <section id="education" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-accent px-3 py-1 text-sm text-accent-foreground">Akademik Geçmiş</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">Eğitim</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Akademik ve profesyonel gelişimimi şekillendiren eğitim hayatım.
            </p>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-12">
            {education.map((edu, index) => (
                <Card key={index} className="flex flex-col justify-between shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <CardHeader className="flex flex-row items-center gap-4">
                        <div className="bg-primary p-3 rounded-full">
                           <GraduationCap className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <div>
                            <CardTitle className="font-headline text-xl">{edu.degree}</CardTitle>
                        </div>
                    </CardHeader>
                    <CardContent>
                        <p className="font-semibold text-primary">{edu.university}</p>
                        <p className="text-sm text-muted-foreground">{edu.period}</p>
                    </CardContent>
                </Card>
            ))}
        </div>
      </div>
    </section>
  );
}
