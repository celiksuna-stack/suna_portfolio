'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

const galleryImages = Array.from({ length: 15 }, (_, i) => {
  const num = (i + 2).toString().padStart(2, '0'); // 02..16
  return {
    src: `/images/gallery/portfolio-${num}.jpg`,
    alt: `Portfolio Sayfa ${num}`,
    title: `Portfolio ${num}`,
  };
});

export function Gallery() {
  return (
    <section id="gallery" className="w-full py-12 md:py-24 lg:py-32 bg-yellow-50">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-yellow-100 text-yellow-800 px-3 py-1 text-sm font-semibold">Portfolyo</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-yellow-900">Portfolyo Görselleri</h2>
            <p className="max-w-[900px] text-yellow-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Çalışma geçmişimden resimler.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-8">
          {galleryImages.map((image, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <div className="overflow-hidden rounded-lg group cursor-pointer">
                  <Card className="overflow-hidden transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:shadow-xl">
                    <CardContent className="p-0">
                      <div className="relative">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          width={400}
                          height={300}
                          className="object-cover w-full h-48"
                          onError={(e) => {
                            e.currentTarget.src = 'https://placehold.co/400x300.png';
                          }}
                        />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[90vh] p-0">
                <div className="relative">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={1200}
                    height={800}
                    className="object-contain w-full h-full max-h-[80vh]"
                    onError={(e) => {
                      e.currentTarget.src = 'https://placehold.co/1200x800.png';
                    }}
                  />
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
