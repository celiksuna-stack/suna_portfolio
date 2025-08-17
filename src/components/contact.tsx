'use client';

import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid items-center justify-center gap-8 text-center">
          <div className="space-y-6">
            <div className="inline-block rounded-lg bg-accent px-3 py-1 text-sm text-accent-foreground">İletişim</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">Bana Ulaşın</h2>
            <div className="space-y-4 text-muted-foreground md:text-lg max-w-2xl mx-auto">
                <p className="flex items-center justify-center gap-3"><MapPin className="h-5 w-5 text-primary"/> İzmir, Türkiye</p>
                <p className="flex items-center justify-center gap-3"><Phone className="h-5 w-5 text-primary"/> +90 (542) 331 93 85</p>
                <p className="flex items-center justify-center gap-3"><Mail className="h-5 w-5 text-primary"/> celik.suna@gmail.com</p>
            </div>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed mx-auto">
              Bir sorunuz mu var veya işbirliği mi yapmak istiyorsunuz? Bana bir e-posta gönderin, en kısa sürede size geri döneceğim. Beni ayrıca aşağıdaki platformlarda da bulabilirsiniz.
            </p>
            <div className="flex gap-4 pt-4 justify-center">
               <Button asChild size="lg">
                <a href="mailto:celik.suna@gmail.com">
                  <Mail className="mr-2 h-4 w-4" /> E-posta Gönder
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
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
