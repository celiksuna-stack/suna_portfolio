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
import { Linkedin, Newspaper, Send, LoaderCircle } from 'lucide-react';

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
        toast({ title: 'Success!', description: result.message });
        formRef.current?.reset();
      } else {
        toast({ title: 'Error', description: result.error, variant: 'destructive' });
      }
    });
  };

  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="grid items-center justify-center gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-accent px-3 py-1 text-sm text-accent-foreground">Contact</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">Get in Touch</h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
              Have a question or want to collaborate? Send me a message, and I'll get back to you as soon as possible. You can also find me on these platforms.
            </p>
            <div className="flex gap-4 pt-4">
              <Button asChild variant="outline" size="lg">
                <Link href="#" target="_blank" rel="noopener noreferrer">
                  <Newspaper className="mr-2 h-4 w-4" /> Blog
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                </Link>
              </Button>
            </div>
          </div>
          <Card className="w-full max-w-lg shadow-lg">
            <CardHeader>
              <CardTitle className="font-headline">Send a Message</CardTitle>
              <CardDescription>I'm looking forward to hearing from you.</CardDescription>
            </CardHeader>
            <CardContent>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" placeholder="Your Name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="your@email.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" name="message" placeholder="Your message..." required rows={4} />
                </div>
                <Button type="submit" className="w-full" disabled={isPending}>
                  {isPending ? <LoaderCircle className="animate-spin" /> : <Send />}
                  <span className="ml-2">{isPending ? 'Sending...' : 'Send Message'}</span>
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
