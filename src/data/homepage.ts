export const homepageContent = {
  hero: {
    eyebrow: 'JUTTI CRAFTS',
    title: 'Handcrafted Punjabi Juttis',
    description: 'Traditional and contemporary styles from Nagaur, Rajasthan.',
    metadata: 'HANDCRAFTED FOOTWEAR / NAGAUR, RAJASTHAN',
    aspectRatio: '1440 / 1919',
    imageAlt: 'Pair of green embellished juttis worn on stone paving, with a garden in the background',
    imageSrc: '/green-latkan-jutti.jpg',
    imageWidth: 1440,
    imageHeight: 1919,
    objectPosition: 'center',
  },
  introduction: {
    eyebrow: '',
    title: 'Traditional and contemporary Punjabi Juttis.',
    description:
      'Jutti Crafts is a handcrafted footwear brand based in Nagaur, Rajasthan. Its collection includes varied colours, patterns and embellishments.',
  },
  featured: {
    eyebrow: 'SELECTED PIECES',
    title: 'Featured pieces',
  },
  archive: {
    eyebrow: '',
    title: 'THE ARCHIVE',
    introduction: 'A visual index of Jutti Crafts footwear.',
  },
  craft: {
    eyebrow: 'NAGAUR / RAJASTHAN',
    title: 'Jutti Crafts',
    imageAlt: "Jutti Crafts promotional composition featuring men's footwear.",
    imageSrc: '/royal men jutti.jpeg',
    imageAspectRatio: '825 / 1024',
    imageWidth: 825,
    imageHeight: 1024,
    description:
      'Jutti Crafts is a handcrafted footwear brand based in Nagaur, Rajasthan. Its collection includes traditional and contemporary Punjabi Juttis, with varied colours, patterns and embellishments.',
  },
  instagram: {
    eyebrow: 'FROM THE STUDIO',
    handle: '@jutti.crafts',
    href: 'https://www.instagram.com/jutti.crafts/',
    images: [
      {
        src: '/royal men jutti.jpeg',
        alt: "Jutti Crafts promotional composition featuring men's footwear.",
        position: 'one',
        aspectRatio: '825 / 1024',
        width: 825,
        height: 1024,
      },
      {
        src: '/punjabi jutti.jpeg',
        alt: 'Pair of dark Punjabi juttis with colourful floral detailing.',
        position: 'two',
        aspectRatio: '681 / 1024',
        width: 681,
        height: 1024,
      },
      {
        src: '/female jutti.jpeg',
        alt: 'Colourful floral jutti photographed with decorative flowers.',
        position: 'three',
        aspectRatio: '1228 / 1536',
        width: 1228,
        height: 1536,
      },
      {
        src: '/flats.jpg',
        alt: 'Dark flats with colourful pink and multicolour detailing photographed with floral accents.',
        position: 'four',
        aspectRatio: '3277 / 4096',
        width: 3277,
        height: 4096,
      },
    ],
  },
} as const;