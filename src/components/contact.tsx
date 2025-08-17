'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-red-50">
      <div className="container px-4 md:px-6">
        <div className="grid items-center justify-center gap-8 text-center">
          <div className="space-y-6">
            <div className="inline-block rounded-lg bg-red-100 px-3 py-1 text-sm text-red-800 font-semibold">İletişim</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline text-red-900">Bana Ulaşın</h2>
            <div className="space-y-4 text-red-700 md:text-lg max-w-2xl mx-auto">
                <p className="flex items-center justify-center gap-3"><MapPin className="h-5 w-5 text-red-500"/> İzmir, Türkiye</p>
                <p className="flex items-center justify-center gap-3"><Phone className="h-5 w-5 text-red-500"/> +90 (542) 331 93 85</p>
                <p className="flex items-center justify-center gap-3"><Mail className="h-5 w-5 text-red-500"/> celik.suna@gmail.com</p>
            </div>
            <p className="max-w-[600px] text-red-700 md:text-xl/relaxed mx-auto">
              Bir sorunuz mu var veya işbirliği mi yapmak istiyorsunuz? Bana bir e-posta gönderin, en kısa sürede size geri döneceğim. Beni ayrıca aşağıdaki platformlarda da bulabilirsiniz.
            </p>
            <div className="flex gap-4 pt-4 justify-center">
               <Button asChild size="lg" className="bg-red-500 hover:bg-red-600 text-white">
                <a href="mailto:celik.suna@gmail.com">
                  <Mail className="mr-2 h-4 w-4" /> E-posta Gönder
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-red-300 text-red-600 hover:bg-red-100 hover:text-red-700">
                <Link href="https://www.linkedin.com/in/suna-celik-a4335b35/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
