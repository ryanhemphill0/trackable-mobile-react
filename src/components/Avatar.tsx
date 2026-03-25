import { cn } from "@/lib/utils"

interface AvatarProps {
  initial: string;
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

const sizeClasses = {
  small: "w-8 h-8 text-xs rounded-lg",
  medium: "w-10 h-10 text-base rounded-[10px]",
  large: "w-[72px] h-[72px] text-[28px] rounded-[20px]"
};

export default function Avatar({ initial, size = 'medium', className }: AvatarProps) {
  return (
    <div 
      className={cn(
        "bg-[#DBEAFE] text-[#2563EB] flex items-center justify-center font-semibold shrink-0",
        sizeClasses[size],
        className
      )}
    >
      {initial}
    </div>
  );
}
