import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Logo } from '@/components/logo';

export function Footer() {
  const socialImage = PlaceHolderImages.find((p) => p.id === 'social_instagram');

  return (
    <footer id="contato" className="bg-black text-gray-400 py-6">
      <div className="container mx-auto">
        <div className="border-t border-white/20 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <Logo />
            <p className="text-sm text-center md:text-left">
              &copy; {new Date().getFullYear()} HasseSquad. Todos os direitos
              reservados.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              {socialImage && (
                <Link
                  href="https://www.instagram.com/kaueehasse/"
                  target="_blank"
                  className="hover:opacity-80 transition-opacity"
                >
                  <Image
                    src={socialImage.imageUrl}
                    alt={socialImage.description}
                    width={100}
                    height={100}
                    data-ai-hint={socialImage.imageHint}
                  />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
