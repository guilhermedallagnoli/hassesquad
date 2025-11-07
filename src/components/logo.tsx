import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';

type LogoProps = {
  className?: string;
  width?: number;
  height?: number;
};

const logoUrl = 'https://i.imgur.com/jXCEWuL.jpeg';
const logoDescription = 'HasseSquad Logo';

export function Logo({ className, width = 150, height = 28 }: LogoProps) {
  return (
    <Link href="/" className={cn('relative', className)}>
      <Image
        src={logoUrl}
        alt={logoDescription}
        width={width}
        height={height}
        priority
      />
    </Link>
  );
}
