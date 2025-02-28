import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// ✅ Function to merge Tailwind CSS classes
export function cn(...inputs: string[]) {
  return twMerge(clsx(inputs));
}
