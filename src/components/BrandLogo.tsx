import { useState } from 'react';
import { Recycle } from 'lucide-react';

interface BrandLogoProps {
  className?: string;
  textClassName?: string;
  iconClassName?: string;
}

export default function BrandLogo({
  className = "h-28 md:h-32",
  textClassName = "text-5xl text-denim-900",
  iconClassName = "w-14 h-14 text-denim-600"
}: BrandLogoProps) {
  const [imageError, setImageError] = useState(false);

  if (!imageError) {
    return (
      <img
        src="/logo.png"
        alt="Denim'O Logo"
        className={`object-contain drop-shadow-sm ${className}`}
        onError={() => setImageError(true)}
      />
    );
  }

  // Fallback to text logo if image is not found
  return (
    <div className={`flex items-center font-sans font-bold tracking-tight drop-shadow-sm ${textClassName}`}>
      DENIM<span className={iconClassName.replace('w-', '').replace('h-', '')}>'</span>O
      <Recycle className={`ml-1 drop-shadow-sm ${iconClassName}`} />
    </div>
  );
}
