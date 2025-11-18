'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';
import { Logo } from '@/components/logo';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#sobre', label: 'Sobre' },
  { href: '#depoimentos', label: 'Depoimentos' },
  { href: '#contato', label: 'Contato' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const socialImage = PlaceHolderImages.find((p) => p.id === 'social_instagram');

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center px-4 md:px-0">
        <div className="flex items-center mr-auto">
          <Logo />
        </div>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium mx-auto">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center ml-auto space-x-4">
          <Button asChild>
            <Link
              href="https://api.whatsapp.com/send?phone=554799672899"
              target="_blank"
            >
              FALE COMIGO
            </Link>
          </Button>
          {socialImage && (
            <Link
              href="https://www.instagram.com/kaueehasse/"
              target="_blank"
              className="hover:opacity-80 transition-opacity"
            >
              <Image
                src={socialImage.imageUrl}
                alt={socialImage.description}
                width={24}
                height={24}
                className="ml-4"
                data-ai-hint={socialImage.imageHint}
              />
            </Link>
          )}
        </div>
        <div className="md:hidden flex-1 flex justify-end">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-background">
              <div className="p-4">
                <div className="flex justify-between items-center mb-8">
                  <Logo />
                </div>
                <nav className="flex flex-col space-y-4">
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.href}>
                      <Link
                        href={link.href}
                        className="text-lg font-medium transition-colors hover:text-primary"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </SheetClose>
                  ))}
                  <Button asChild className="mt-4">
                    <Link
                      href="https://api.whatsapp.com/send?phone=554799672899"
                      target="_blank"
                    >
                      FALE COMIGO
                    </Link>
                  </Button>
                  <div className="flex justify-center pt-4">
                    {socialImage && (
                      <Link
                        href="https://www.instagram.com/kaueehasse/"
                        target="_blank"
                        className="hover:opacity-80 transition-opacity"
                      >
                        <Image
                          src={socialImage.imageUrl}
                          alt={socialImage.description}
                          width={48}
                          height={48}
                          data-ai-hint={socialImage.imageHint}
                        />
                      </Link>
                    )}
                  </div>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
