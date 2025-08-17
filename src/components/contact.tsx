'use client';

import { useState, useTransition, useRef, FormEvent } from 'react';
import Link from 'next/link';
import { submitContactAction } from '@/app/actions';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Linkedin, Send, LoaderCircle, Mail, Phone, MapPin } from 'lucide-react';

export function Contact() {
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries()) as { name: string; email: string; message: string; };

    startTransition(async () => {
      const result = await submitContactAction(data);
      if (result.success) {
        toast({ title: 'Başarılı!', description: "Mesajınız için teşekkürler! En kısa sürede size geri döneceğim." });
        formRef.current?.reset();
      } else {
        toast({ title: 'Hata', description: result.error, variant: 'destructive' });
      }
    });
  };

  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid items-start justify-center gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-6">
            <div className="inline-block rounded-lg bg-accent px-3 py-1 text-sm text-accent-foreground">İletişim</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">Bana Ulaşın</h2>
            <div className="space-y-4 text-muted-foreground md:text-lg">
                <p className="flex items-center gap-3"><MapPin className="h-5 w-5 text-primary"/> Gazi Çiçek Cad. Noya Era Evleri no:24 Sasalı / Çiğli İZMİR</p>
                <p className="flex items-center gap-3"><Phone className="h-5 w-5 text-primary"/> +90 (542) 331 93 85</p>
                <p className="flex items-center gap-3"><Mail className="h-5 w-5 text-primary"/> celik.suna@gmail.com</p>
            </div>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
              Bir sorunuz mu var veya işbirliği mi yapmak istiyorsunuz? Bana bir mesaj gönderin, en kısa sürede size geri döneceğim. Beni bu platformda da bulabilirsiniz.
            </p>
            <div className="flex gap-4 pt-4">
              <Button asChild variant="outline" size="lg">
                <Link href="https://www.linkedin.com/in/suna-celik-a4335b35/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                </Link>
              </Button>
            </div>
          </div>
          <Card className="w-full max-w-lg shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline">Mesaj Gönder</CardTitle>
              <CardDescription>Sizden haber bekliyorum.</CardDescription>
            </CardHeader>
            <CardContent>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">İsim</Label>
                  <Input id="name" name="name" placeholder="Adınız" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">E-posta</Label>
                  <Input id="email" name="email" type="email" placeholder="eposta@adresiniz.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Mesaj</Label>
                  <Textarea id="message" name="message" placeholder="Mesajınız..." required rows={4} />
                </div>
                <Button type="submit" className="w-full" disabled={isPending}>
                  {isPending ? <LoaderCircle className="animate-spin" /> : <Send />}
                  <span className="ml-2">{isPending ? 'Gönderiliyor...' : 'Mesajı Gönder'}</span>
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
