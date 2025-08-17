'use client';

import { useState, useTransition, useRef, FormEvent } from 'react';
import { generateProverbAction } from '@/app/actions';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Sparkles, Wand2, LoaderCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export function ProverbGenerator() {
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();
  const [proverb, setProverb] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const keywords = formData.get('keywords') as string;
    setProverb(null);

    startTransition(async () => {
      const result = await generateProverbAction(keywords);
      if (result.error) {
        toast({ title: 'Error', description: result.error, variant: 'destructive' });
      } else if (result.proverb) {
        setProverb(result.proverb);
        formRef.current?.reset();
      }
    });
  };

  return (
    <section id="proverbs" className="w-full py-12 md:py-24 lg:py-32 bg-accent">
        <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-background px-3 py-1 text-sm text-foreground">Personalized Proverbs</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline text-accent-foreground">A Touch of Turkish Wisdom</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Enter a keyword or a short phrase, and I'll generate a unique Turkish proverb for you.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-xl space-y-6 mt-8">
              <Card className="shadow-lg">
                <form onSubmit={handleSubmit} ref={formRef}>
                    <CardHeader>
                      <CardTitle className="font-headline">Proverb Generator</CardTitle>
                      <CardDescription>What's on your mind? I'll find a proverb for it.</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Input name="keywords" placeholder="e.g., patience, friendship, work" required />
                    </CardContent>
                    <CardFooter>
                      <Button type="submit" disabled={isPending} className="w-full sm:w-auto">
                        {isPending ? <LoaderCircle className="animate-spin" /> : <Wand2 />}
                        <span className="ml-2">{isPending ? 'Generating...' : 'Generate Proverb'}</span>
                      </Button>
                    </CardFooter>
                </form>
              </Card>
              
              {proverb && (
                  <Card className="bg-background/80 border-primary/20 transition-all duration-500 ease-in-out animate-in fade-in">
                      <CardHeader>
                          <CardTitle className="flex items-center gap-2 font-headline">
                              <Sparkles className="text-primary" />
                              Your Proverb
                          </CardTitle>
                      </CardHeader>
                      <CardContent>
                          <blockquote className="text-lg italic text-foreground/90">
                          "{proverb}"
                          </blockquote>
                      </CardContent>
                  </Card>
              )}
            </div>
        </div>
    </section>
  );
}
