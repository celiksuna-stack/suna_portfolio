import Image from 'next/image';

export function Hero() {
  return (
    <section id="biography" className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-accent">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_600px] items-center">
          <Image
            src="https://placehold.co/600x600.png"
            alt="Suna"
            width={600}
            height={600}
            className="mx-auto aspect-square overflow-hidden rounded-full object-cover sm:w-full"
            data-ai-hint="portrait woman"
          />
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-headline text-accent-foreground">
                Suna's Portfolio
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Merhaba! Ben Suna. Teknoloji, sanat ve seyahat tutkularımı bir araya getirdiğim kişisel portfolyoma hoş geldiniz. Burada, profesyonel deneyimlerimden ve kişisel ilgi alanlarımdan kesitler bulacaksınız.
              </p>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Yıllar içinde edindiğim tecrübelerle, problem çözme ve yaratıcı düşünme yeteneklerimi geliştirdim. Bu yolculukta bana ilham veren anları ve projeleri sizlerle paylaşmaktan mutluluk duyarım.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
