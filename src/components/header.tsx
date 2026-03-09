
'use client';

import { Briefcase, GraduationCap, HeartHandshake, ImageIcon, Info, Menu, Phone, Star, User } from 'lucide-react';
import Link from 'next/link';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import React from 'react';

const navLinks = [
    { href: "#biography", icon: <Info className="h-4 w-4" />, label: "Biyografi" },
    { href: "#experience", icon: <Briefcase className="h-4 w-4" />, label: "Deneyim" },
    { href: "#education", icon: <GraduationCap className="h-4 w-4" />, label: "Eğitim" },
    { href: "#skills", icon: <Star className="h-4 w-4" />, label: "Yetenekler" },
    { href: "#gallery", icon: <ImageIcon className="h-4 w-4" />, label: "Galeri" },
    { href: "#references", icon: <HeartHandshake className="h-4 w-4" />, label: "Referanslar" },
    { href: "#contact", icon: <Phone className="h-4 w-4" />, label: "İletişim" },
];

function NavLinks() {
    return (
        <>
            {navLinks.map(link => (
                 <Link key={link.href} href={link.href} className="text-sm font-medium hover:underline underline-offset-4 flex items-center gap-1 text-gray-600 hover:text-gray-900" prefetch={false}>
                    {link.icon} {link.label}
                </Link>
            ))}
        </>
    )
}

function MobileNav() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle navigation menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="left">
                <nav className="grid gap-6 text-lg font-medium pt-6">
                    <Link href="#" className="flex items-center gap-2 text-lg font-semibold" prefetch={false}>
                         <User className="h-6 w-6 text-primary" />
                         <span className="sr-only">Suna Çelik</span>
                    </Link>
                    {navLinks.map(link => (
                        <SheetClose key={link.href} asChild>
                            <Link href={link.href} className="flex items-center gap-4 px-2.5 text-muted-foreground hover:text-foreground" prefetch={false}>
                                {link.icon} {link.label}
                            </Link>
                        </SheetClose>
                    ))}
                </nav>
            </SheetContent>
        </Sheet>
    )
}


export function Header() {
    const isMobile = useIsMobile();
  
    return (
    <header className="bg-white/80 backdrop-blur-sm sticky top-0 z-50 border-b">
      <div className="h-16 flex items-center w-full max-w-6xl mx-auto px-4 lg:px-6">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
            <User className="h-6 w-6 text-purple-600" />
            <span className="sr-only">Suna Çelik'in Portfolyosu</span>
        </Link>
        <div className="ml-auto">
          {isMobile === undefined ? null : isMobile ? (
            <MobileNav />
          ) : (
            <nav className="hidden md:flex gap-4 sm:gap-6">
              <NavLinks />
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
