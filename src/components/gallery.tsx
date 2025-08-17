import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

export function Gallery() {
  const images = [
    { src: 'https://placehold.co/600x400.png', alt: 'Gallery image 1', hint: 'landscape mountains' },
    { src: 'https://placehold.co/600x400.png', alt: 'Gallery image 2', hint: 'city skyline' },
    { src: 'https://placehold.co/600x400.png', alt: 'Gallery image 3', hint: 'abstract art' },
    { src: 'https://placehold.co/600x400.png', alt: 'Gallery image 4', hint: 'coffee shop' },
    { src: 'https://placehold.co/600x400.png', alt: 'Gallery image 5', hint: 'ocean waves' },
    { src: 'https://placehold.co/600x400.png', alt: 'Gallery image 6', hint: 'old books' },
  ];

  return (
    <section id="gallery" className="w-full py-12 md:py-24 lg:py-32 bg-yellow-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-yellow-100 text-yellow-800 px-3 py-1 text-sm font-semibold">Galeri</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-yellow-900">Benim Dünyam</h2>
            <p className="max-w-[900px] text-yellow-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              İlgi alanlarıma, seyahatlerime ve dünyama bir bakış.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg group">
              <Card className="overflow-hidden transition-transform duration-300 ease-in-out group-hover:scale-105 group-hover:shadow-xl">
                <CardContent className="p-0">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={600}
                    height={400}
                    className="object-cover w-full h-auto"
                    data-ai-hint={image.hint}
                  />
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
