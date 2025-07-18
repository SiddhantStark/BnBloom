import { SEARCH_PARAMS_KEYS } from "@/config/app.config";
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getAssetPath(name: string){
  return `assets/${name}`;
}

export const getEncodedRedirectUrl = (next) => {
  return `${SEARCH_PARAMS_KEYS.NEXT_REDIRECT}=${encodeURIComponent(
    next || '/'
  )}`;
};

export function getDefaultProfile(initials) {
  return `https://api.dicebear.com/9.x/initials/svg?seed=${initials}`;
}

export const isAdmin = (user) => user.roles.includes('HOTEL_MANAGER');