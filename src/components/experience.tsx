import { Briefcase } from 'lucide-react';

const experiences = [
  {
    role: 'Firma Ortağı, Dış Ticaret Danışmanı',
    company: 'Denmer İç ve Dış Tic. LTD ŞTİ',
    period: '2020 - Günümüz',
    description: 'Dış ticaret alanında;<br/><b>İthalat:</b> Tedarik zincirinden başlayan, yurt dışı malzeme ithalatının gerçekleşmesine kadar süren süreçler.<br/><b>İhracat:</b> Üretimi takiben tüm yurt dışı satış ve operasyon işlemleri kapsamındaki hizmetlerin sunulmasıdır.'
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
    description: 'İhracat satış departmanının organizasyonu, satış ve pazarlama işlemleri. Seramik ve cam endüstrisinin hammaddesi olan Feldspat madeninin kalite müdürlüğü.',
  },
];

export function Experience() {
  return (
    <section id="experience" className="w-full py-12 md:py-24 lg:py-32 bg-teal-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-teal-100 text-teal-800 px-3 py-1 text-sm font-semibold">Profesyonel Yolculuk</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-teal-900">İş Deneyimi</h2>
            <p className="max-w-[900px] text-teal-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Kariyerim boyunca üstlendiğim kilit rolleri ve başarıları gösteren zaman çizelgesi.
            </p>
          </div>
        </div>
        <div className="relative mt-12 max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-8 top-0 w-0.5 h-full bg-teal-200" />
          
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-16 md:pl-20 mb-12">
                {/* Icon */}
                 <div className="absolute left-0 top-1.5 flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-teal-500 rounded-full shadow-lg">
                    <Briefcase className="h-6 w-6 md:h-8 md:w-8 text-white" />
                </div>
                {/* Card */}
                <div className="bg-card rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 p-6 border-l-4 border-teal-400">
                    <p className="text-sm font-semibold text-teal-600 mb-1">{exp.period}</p>
                    <h3 className="text-xl md:text-2xl font-bold font-headline text-gray-800">{exp.role}</h3>
                    <p className="text-md font-semibold text-gray-500 mb-3">{exp.company}</p>
                    <p className="text-sm md:text-base text-gray-600/80" dangerouslySetInnerHTML={{ __html: exp.description }}></p>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
