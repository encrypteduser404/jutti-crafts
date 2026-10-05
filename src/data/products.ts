import type { Product } from '../types/product';

export const products: Product[] = [
  {
    id: 'green-latkan-jutti',
    name: 'Green Latkan Jutti',
    category: 'Punjabi Jutti',
    color: 'Vibrant green',
    style: 'Ornate / festive / expressive',
    detailing: 'White beadwork / ornamental detailing',
    occasion: 'Festive / traditional occasions',
    description: 'A vivid green jutti detailed with intricate white embellishment and a traditional pointed silhouette.',
    detailedDescription:
      'Green Latkan Jutti brings together a vivid green upper with intricate white embellishment and a traditional pointed silhouette. Its detailed surface and contrasting brown edging give the piece a distinctly ornate character, presented against a warm architectural setting.',
    featured: true,
    images: [
      {
        src: '/green-latkan-jutti.jpg',
        alt: 'Green embellished jutti worn with a light traditional outfit outdoors.',
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
    category: 'Slip-on Footwear',
    color: 'Black',
    style: 'Minimal / contemporary / understated',
    detailing: 'Perforated upper',
    occasion: 'Everyday / formal-casual styling',
    description: 'A clean black slip-on with a perforated upper and contrasting light-toned sole.',
    detailedDescription:
      'Bold Step TPR presents a streamlined black silhouette with a perforated upper and a contrasting light-toned sole. The understated design and dark finish give it a contemporary character, photographed against warm stone architecture.',
    featured: true,
    images: [
      {
        src: '/bold-step-tpr.jpg',
        alt: 'Black perforated slip-on footwear worn with light trousers on stone steps.',
        aspectRatio: '1 / 1',
        width: 1440,
        height: 1440,
      },
    ],
  },
  {
    id: 'loafer-natural-tan',
    name: 'Loafer Natural Tan',
    category: 'Loafer',
    color: 'Natural tan / warm brown',
    style: 'Refined / understated / classic',
    detailing: 'Stitched detailing across the upper',
    occasion: 'Formal / smart-casual styling',
    description: 'A warm natural-tan loafer with clean stitched detailing and a refined low-profile silhouette.',
    detailedDescription:
      'Loafer Natural Tan features a warm tan finish, a streamlined profile and visible stitched detailing across the upper. Its restrained silhouette and darker sole details create a polished visual character in the warm architectural setting of the photograph.',
    featured: true,
    images: [
      {
        src: '/loafer-natural-tan.jpg',
        alt: 'Natural-tan loafer worn with dark trousers against stone architecture.',
        aspectRatio: '1440 / 1920',
        width: 1440,
        height: 1920,
      },
    ],
  },
  {
    id: 'solid-men',
    name: 'Solid Men',
    category: "Men's Slip-on Footwear",
    color: 'Deep brown',
    style: 'Classic / restrained / formal',
    detailing: 'Subtle stitched detailing across the vamp',
    occasion: 'Formal / traditional styling',
    description: "A deep brown men's slip-on with understated stitched detailing across the vamp.",
    detailedDescription:
      'Solid Men is presented in a deep brown finish with an elongated slip-on silhouette and subtle stitched detailing across the vamp. Styled with cream trousers, the design creates a restrained contrast against the warm tones of the surrounding setting.',
    featured: false,
    images: [
      {
        src: '/solid-men.jpg',
        alt: "Deep brown men's slip-on footwear worn with cream trousers.",
        aspectRatio: '1440 / 1919',
        width: 1440,
        height: 1919,
      },
    ],
  },
  {
    id: 'ethnics',
    name: 'Ethnics',
    category: 'Ethnic Footwear',
    color: 'Dark blue / black with multicolour accents',
    style: 'Colourful / decorative / ethnic',
    detailing: 'Layered rows of colourful decorative detailing',
    occasion: 'Festive / ethnic styling',
    description: 'Dark ethnic footwear accented with layered rows of colourful decorative detailing.',
    detailedDescription:
      'Ethnics presents a dark base highlighted by layered rows of colourful detailing across the upper. Blue, green and pink accents create a lively visual contrast, giving the pair a distinctly decorative ethnic character.',
    featured: false,
    images: [
      {
        src: '/ethnics.jpg',
        alt: 'Dark ethnic footwear with colourful decorative detailing photographed with floral accents.',
        aspectRatio: '3 / 4',
        width: 1080,
        height: 1440,
      },
    ],
  },
  {
    id: 'mens-collection',
    name: "Men's Collection",
    category: "Men's Collection",
    style: 'Traditional / varied',
    description: "A curated view of men's footwear bringing together understated and patterned traditional styles.",
    detailedDescription:
      "Men's Collection brings together contrasting footwear styles within a single visual composition. The image pairs a darker patterned design with a more understated brown style, highlighting the range of silhouettes and visual treatments within the men's selection.",
    editorial: true,
    featured: false,
    images: [
      {
        src: "/men's collection.jpg",
        alt: "Two pairs of men's footwear presented together on a decorative background.",
        aspectRatio: '3 / 4',
        width: 1080,
        height: 1440,
      },
    ],
  },
  {
    id: 'embroidered-flats',
    name: 'Embroidered Flats',
    category: 'Embroidered Flats',
    style: 'Colourful / decorative / occasion-led',
    detailing: 'Floral-inspired embroidery and multicolour surface design',
    occasion: 'Festive / ethnic styling',
    description: 'Colourful embroidered flats featuring vibrant floral-inspired detailing across the upper.',
    detailedDescription:
      'Embroidered Flats brings colour and pattern together through a richly decorated upper featuring floral-inspired motifs and contrasting tones. The detailed surface is balanced by warm brown edging, creating a lively and distinctly decorative look.',
    featured: false,
    images: [
      {
        src: '/Embroidered-Flats.jpg',
        alt: 'Colourfully embroidered flats photographed with flowers and festive decorative elements.',
        aspectRatio: '3 / 4',
        width: 1080,
        height: 1440,
      },
    ],
  },
  {
    id: 'ethnic-mojaris-flats',
    name: 'Ethnic Mojaris Flats',
    category: 'Mojari / Flats',
    color: 'Blue, green, pink, cream and brown',
    style: 'Artistic / ethnic / refined',
    detailing: 'Multicolour floral pattern',
    occasion: 'Festive / ethnic styling',
    description: 'A patterned ethnic flat combining multicolour floral detailing with a traditional mojari-inspired silhouette.',
    detailedDescription:
      'Ethnic Mojaris Flats features a refined flat silhouette decorated with a colourful floral composition across the upper. Blue, green and pink tones contrast with the warm brown edging, while the clean neutral background keeps attention on the footwear itself.',
    featured: false,
    images: [
      {
        src: '/Ethnic-Mojaris-Flats.jpg',
        alt: 'Multicolour floral-patterned ethnic mojari flat photographed against a neutral background.',
        aspectRatio: '3 / 4',
        width: 1080,
        height: 1440,
      },
    ],
  },
];
