import Image from 'next/image';

export function Hero() {
  return (
    <section id="biography" className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-purple-50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_600px] items-center">
          <Image
            src="https://placehold.co/600x600.png"
            alt="Suna Çelik"
            width={600}
            height={600}
            className="mx-auto aspect-square overflow-hidden rounded-full object-cover w-[250px] h-[250px] sm:w-full sm:h-auto"
            data-ai-hint="portrait woman"
          />
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-4">
              <div className="text-center lg:text-left">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline text-gray-800">
                  Suna Çelik
                </h1>
                <p className="text-xl md:text-2xl text-purple-600 font-semibold">Dış Ticaret Danışmanı & Kimya Mühendisi</p>
              </div>
              <p className="max-w-[600px] text-gray-600 md:text-xl text-center lg:text-left">
                Mühendislik ve yöneticilik tecrübelerimi kullanarak, 25 yıllık "Yurt Dışı Satış, Satın Alma / Tedarik & Lojistik, İhracat - İthalat operasyonları, Gümrüklü Antrepo Yönetimi" pozisyonlarındaki deneyimlerimi danışmanlık yapacağım firmalar ile paylaşmak, tüm dış ticaret konularını kapsayan bir hizmet vermek ve firmanın kalıcı dış ticaret alt yapısını oluşturacak yeni projelere imza atmayı hedefliyorum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
