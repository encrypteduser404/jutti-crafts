import type { Product } from '../types/product';

export const products: Product[] = [
  {
    id: 'green-latkan-jutti',
    name: 'Green Latkan Jutti',
    description: 'Bright green jutti featuring intricate white beadwork and a traditional pointed silhouette.',
    detailedDescription:
      'A vibrant green jutti accented with intricate white beadwork across the upper and finished with warm brown edging and a traditional pointed silhouette. The piece is presented in a richly detailed outdoor setting, where its colour and embellishment stand out against the surrounding stone and warm architectural tones.',
    featured: true,
    images: [
      {
        src: '/green-latkan-jutti.jpg',
        alt: 'Green embellished jutti worn outdoors with a light traditional outfit',
        aspectRatio: '1440 / 1919',
        width: 1440,
        height: 1919,
        priority: true,
      },
    ],
  },
  {
    id: 'bold-step-tpr',
    name: 'Bold Step TPR',
    description: 'A clean black slip-on with a perforated upper and contrasting light-toned sole.',
    detailedDescription:
      'Bold Step TPR is presented as a streamlined black slip-on with an evenly perforated upper and a contrasting light-toned sole. Its understated profile and dark finish give the design a clean, contemporary appearance, captured here against warm stone architecture.',
    featured: true,
    images: [
      {
        src: '/bold-step-tpr.jpg',
        alt: 'Black perforated slip-on footwear worn with light trousers',
        aspectRatio: '1 / 1',
        width: 1440,
        height: 1440,
      },
    ],
  },
  {
    id: 'loafer-natural-tan',
    name: 'Loafer Natural Tan',
    description: 'A warm natural-tan loafer with clean stitched detailing and a refined low-profile silhouette.',
    detailedDescription:
      'Loafer Natural Tan features a warm tan finish, a streamlined profile and visible stitched detailing across the upper. The restrained design is paired with darker sole and heel elements, giving the piece a polished appearance in the warm architectural setting of the photograph.',
    featured: true,
    images: [
      {
        src: '/loafer-natural-tan.jpg',
        alt: 'Natural-tan loafer styled with dark trousers on stone flooring',
        aspectRatio: '1440 / 1920',
        width: 1440,
        height: 1920,
      },
    ],
  },
  {
    id: 'solid-men',
    name: 'Solid Men',
    description: "A deep brown men's slip-on with understated stitched detailing across the vamp.",
    detailedDescription:
      'Solid Men is a deep brown slip-on with a clean elongated silhouette and subtle stitched detailing across the vamp. Styled with cream trousers, the design creates a restrained contrast between the dark footwear and the warm tones of the surrounding architectural setting.',
    images: [
      {
        src: '/solid-men.jpg',
        alt: "Deep brown men's slip-on footwear worn with cream trousers",
        aspectRatio: '1440 / 1919',
        width: 1440,
        height: 1919,
      },
    ],
  },
];