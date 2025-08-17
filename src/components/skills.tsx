import { Badge } from '@/components/ui/badge';
import { Code, Database, Languages, Handshake, Cog } from 'lucide-react';

const skillsData = {
  technical: [
    { name: 'Windows İşletim Sistemleri', icon: <Cog /> },
    { name: 'MS Office Araçları', icon: <Cog /> },
    { name: 'SAP Programı', icon: <Database /> },
    { name: 'YYS Danışmanı (Yetkilendirilmiş Yükümlü Statüsü)', icon: <Handshake /> }
  ],
  languages: [
    { name: 'Türkçe (Anadil)', icon: <Languages /> },
    { name: 'İngilizce (İleri Düzey)', icon: <Languages /> },
    { name: 'İtalyanca (Başlangıç Seviyesi)', icon: <Languages /> }
  ]
};

const seminars = [
    "ISO 14000 ÇEVRE YÖNETİM SİSTEMİ",
    "TEMEL BELGE PAYLAŞIM VE GÜVENLİK EĞİTİMİ",
    "OUTLOOK EĞİTİMİ",
    "İNSAN KAYNAKLARINDA YENİ NESİL :Y KUŞAĞI",
    "YENİ TÜRK TİCARET KANUNU"
];

export function Skills() {
  return (
    <section id="skills" className="w-full py-12 md:py-24 lg:py-32 bg-accent">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm text-foreground">Yetenek & Uzmanlık</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-accent-foreground">Yetenekler ve Seminerler</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Kariyerim boyunca edindiğim teknik beceriler, dil yetkinliklerim ve katıldığım profesyonel gelişim seminerleri.
            </p>
          </div>
        </div>
        <div className="grid gap-8 mt-12 md:grid-cols-2 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold font-headline mb-4">Teknik Beceriler</h3>
            <div className="flex flex-wrap gap-4">
              {skillsData.technical.map((skill, index) => (
                <Badge key={index} variant="secondary" className="text-lg py-2 px-4 flex items-center gap-2">
                   {skill.icon} {skill.name}
                </Badge>
              ))}
            </div>
            <h3 className="text-2xl font-bold font-headline mt-8 mb-4">Dil Yetkinlikleri</h3>
            <div className="flex flex-wrap gap-4">
              {skillsData.languages.map((lang, index) => (
                <Badge key={index} variant="secondary" className="text-lg py-2 px-4 flex items-center gap-2">
                   {lang.icon} {lang.name}
                </Badge>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold font-headline mb-4">Katıldığı Seminerler</h3>
            <ul className="list-disc list-inside space-y-2">
              {seminars.map((seminar, index) => (
                <li key={index} className="text-muted-foreground">{seminar}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
