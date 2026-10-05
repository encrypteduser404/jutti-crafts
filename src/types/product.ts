export interface ImageAsset {
  src: string;
  alt: string;
  aspectRatio: string;
  objectPosition?: string;
  priority?: boolean;
  width?: number;
  height?: number;
}

export interface Product {
  id: string;
  reference?: string;
  name: string;
  category?: string;
  description: string;
  detailedDescription: string;
  color?: string;
  style?: string;
  detailing?: string;
  occasion?: string;
  images: ImageAsset[];
  editorial?: boolean;
  featured?: boolean;
}