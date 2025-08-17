import { MountainIcon } from 'lucide-react';
import Link from 'next/link';

export function Header() {
  return (
    <header className="px-4 lg:px-6 h-16 flex items-center bg-background/80 backdrop-blur-sm sticky top-0 z-50 border-b">
      <Link href="#" className="flex items-center justify-center" prefetch={false}>
        <MountainIcon className="h-6 w-6 text-primary" />
        <span className="sr-only">Suna's Portfolio</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link href="#biography" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
          Biography
        </Link>
        <Link href="#gallery" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
          Gallery
        </Link>
        <Link href="#experience" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
          Experience
        </Link>
        <Link href="#contact" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
          Contact
        </Link>
      </nav>
    </header>
  );
}
