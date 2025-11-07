import { Logo } from '@/components/logo';

export function MarqueeBanner() {
  const logos = Array(10).fill(0); // Create more logos for a smoother loop

  return (
    <div className="relative flex w-full items-center overflow-hidden border-y border-white/20 bg-black py-8">
      <div className="flex flex-shrink-0 animate-marquee items-center whitespace-nowrap">
        {logos.map((_, index) => (
          <div key={index} className="mx-8">
            <Logo width={200} height={37} />
          </div>
        ))}
      </div>
      <div className="absolute top-0 flex h-full flex-shrink-0 animate-marquee2 items-center whitespace-nowrap">
        {logos.map((_, index) => (
          <div key={index} className="mx-8">
            <Logo width={200} height={37} />
          </div>
        ))}
      </div>
    </div>
  );
}
