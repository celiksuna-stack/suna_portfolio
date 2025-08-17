import { Briefcase, GraduationCap, HeartHandshake, ImageIcon, Info, Phone, Star, User } from 'lucide-react';
import Link from 'next/link';

export function Header() {
  return (
    <header className="px-4 lg:px-6 h-16 flex items-center bg-background/80 backdrop-blur-sm sticky top-0 z-50 border-b">
      <Link href="#" className="flex items-center justify-center" prefetch={false}>
        <User className="h-6 w-6 text-primary" />
        <span className="sr-only">Suna Çelik'in Portfolyosu</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link href="#biography" className="text-sm font-medium hover:underline underline-offset-4 flex items-center gap-1" prefetch={false}>
          <Info className="h-4 w-4" /> Biyografi
        </Link>
        <Link href="#experience" className="text-sm font-medium hover:underline underline-offset-4 flex items-center gap-1" prefetch={false}>
          <Briefcase className="h-4 w-4" /> Deneyim
        </Link>
        <Link href="#education" className="text-sm font-medium hover:underline underline-offset-4 flex items-center gap-1" prefetch={false}>
          <GraduationCap className="h-4 w-4" /> Eğitim
        </Link>
        <Link href="#skills" className="text-sm font-medium hover:underline underline-offset-4 flex items-center gap-1" prefetch={false}>
          <Star className="h-4 w-4" /> Yetenekler
        </Link>
        <Link href="#gallery" className="text-sm font-medium hover:underline underline-offset-4 flex items-center gap-1" prefetch={false}>
          <ImageIcon className="h-4 w-4" /> Galeri
        </Link>
        <Link href="#references" className="text-sm font-medium hover:underline underline-offset-4 flex items-center gap-1" prefetch={false}>
          <HeartHandshake className="h-4 w-4" /> Referanslar
        </Link>
        <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4 flex items-center gap-1" prefetch={false}>
          <Phone className="h-4 w-4" /> İletişim
        </Link>
      </nav>
    </header>
  );
}
