import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Phone, User, Briefcase } from 'lucide-react';

const references = [
  {
    name: 'Cüneyt TARGOTAY',
    title: 'Danışman, Planlama ve Üretim Süreçleri',
    phone: '(533) 257 47 10',
  },
  {
    name: 'Hüseyin DARICI',
    title: 'Genel Müdür Yardımcısı, Çukurova Makine İmalat ve Tic. A.Ş.',
    phone: '(533) 257 47 10',
  },
  {
    name: 'Ercüment YETKİ',
    title: 'Genel Müdür, Ashok Leyland',
    phone: '+60 17 298 10 20',
  },
];

export function References() {
  return (
    <section id="references" className="w-full py-12 md:py-24 lg:py-32 bg-green-50">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-green-100 px-3 py-1 text-sm text-green-800 font-semibold">Profesyonel Ağ</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-green-900">Referanslar</h2>
            <p className="max-w-[900px] text-green-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Profesyonel yetkinliklerim hakkında bilgi alabileceğiniz değerli referanslarım.
            </p>
          </div>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-12">
          {references.map((ref, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="font-headline text-2xl flex items-center gap-3 text-gray-800"><User className="text-green-500"/>{ref.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="flex items-center gap-3 text-gray-600"><Briefcase className="h-5 w-5 text-green-500"/>{ref.title}</p>
                <p className="flex items-center gap-3 text-gray-600"><Phone className="h-5 w-5 text-green-500"/>{ref.phone}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
