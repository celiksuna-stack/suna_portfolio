import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: 'Firma Ortağı, Dış Ticaret Danışmanı',
    company: 'Denmer İç ve Dış Tic. LTD ŞTİ',
    period: '2020 - Günümüz',
    description: 'Dış ticaret alanında danışmanlık hizmetleri sunulmaktadır.',
  },
  {
    role: 'Dış Ticaret Müdürü (Emekli)',
    company: 'BMC Otomotiv Sanayi ve Ticaret A.Ş.',
    period: 'Eylül 2015 – Nisan 2019',
    description: 'Satın Alma / Tedarik Malzeme Lojistiği & İhracat-İthalat operasyonları yönetimi. Yurt dışı tedarikçilerle koordinasyon, kritik malzeme takibi, lojistik operasyonları, ödeme planlaması ve finansal raporlama gibi sorumluluklar üstlenildi.',
  },
  {
    role: 'Dış Ticaret Müdür Yardımcısı',
    company: 'BMC Sanayi ve Ticaret A.Ş.',
    period: 'Nisan 2007 - Eylül 2015',
    description: 'Satın Alma / Tedarik Malzeme Lojistiği & İhracat-İthalat operasyonlarında yönetici yardımcılığı.',
  },
  {
    role: 'Takım Lideri, İhracat & İthalat Operasyonları & Gümrüklü Antrepo',
    company: 'BMC Sanayi ve Ticaret A.Ş.',
    period: 'Ağustos 1997 – Nisan 2007',
    description: 'İhracat, ithalat ve gümrüklü antrepo operasyonlarından sorumlu takım liderliği.',
  },
  {
    role: 'İhracat Sorumlusu',
    company: 'BMC Sanayi ve Ticaret A.Ş.',
    period: 'Temmuz 1996 – Ağustos 1997',
    description: 'İhracat ve ithalat departmanında ihracat operasyonları sorumluluğu.',
  },
  {
    role: 'Satış & İhracat Müdürü',
    company: 'Ermad Madencilik San ve Tic. A.Ş.',
    period: 'Ekim 1993 – Temmuz 1996',
    description: 'İhracat satış departmanının organizasyonu, reklam ve pazarlama desteği. Seramik ve cam endüstrisinin hammaddesi olan Feldspat madeninin kalitesi için teknik destek.',
  },
];

export function Experience() {
  return (
    <section id="experience" className="w-full py-12 md:py-24 lg:py-32 bg-accent">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm text-foreground">Profesyonel Yolculuk</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-accent-foreground">İş Deneyimi</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Kariyerim boyunca üstlendiğim kilit rolleri ve başarıları gösteren zaman çizelgesi.
            </p>
          </div>
        </div>
        <div className="relative mt-12">
          {/* Vertical line for desktop */}
          <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-primary/20 hidden md:block"></div>
          {/* Vertical line for mobile */}
          <div className="absolute left-6 w-0.5 h-full bg-primary/20 md:hidden"></div>

          {experiences.map((exp, index) => (
            <div key={index} className="mb-8 flex md:justify-between items-start w-full md:flex-row-reverse -ml-2 md:ml-0">
               {/* Mobile view */}
               <div className="flex-shrink-0 md:hidden z-10">
                 <div className="z-10 flex items-center justify-center w-12 h-12 bg-primary rounded-full shadow-lg ml-0">
                    <Briefcase className="text-primary-foreground" />
                 </div>
               </div>
               <div className="w-full md:w-5/12 ml-6 md:ml-0">
                  <div className={`px-4 py-6 bg-card rounded-lg shadow-lg md:text-right`}>
                    <p className="font-bold text-primary">{exp.period}</p>
                    <h3 className="text-xl font-bold font-headline mt-1">{exp.role}</h3>
                    <p className="text-muted-foreground mb-2">{exp.company}</p>
                    <p className="text-sm">{exp.description}</p>
                  </div>
               </div>
               
               {/* Desktop view */}
                <div className="hidden md:block w-5/12"></div>
                <div className="hidden md:flex z-10 items-center justify-center w-12 h-12 bg-primary rounded-full shadow-lg">
                    <Briefcase className="text-primary-foreground" />
                </div>
               <div className={`hidden md:block w-5/12 px-4 py-6 bg-card rounded-lg shadow-lg text-left`}>
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
