export interface FeaturedPieceContent {
  id: string;
  reference: string;
  title: string;
  description: string;
  imageAlt: string;
  aspectRatio: string;
}

export const homepageContent = {
  hero: {
    eyebrow: 'JUTTI CRAFTS / DIGITAL ARCHIVE',
    title: 'Handcrafted Punjabi Juttis',
    description: 'Traditional and contemporary styles from Nagaur, Rajasthan.',
    metadata: 'HANDCRAFTED FOOTWEAR / NAGAUR, RAJASTHAN',
    imageAlt: 'Placeholder for the Jutti Crafts hero image',
  },
  introduction: {
    eyebrow: 'FIELD NOTES / NAGAUR, RAJASTHAN',
    title: 'Traditional and contemporary Punjabi Juttis.',
    description:
      'Jutti Crafts is a handcrafted footwear brand based in Nagaur, Rajasthan. Its collection includes varied colours, patterns and embellishments.',
  },
  featured: {
    eyebrow: 'SELECTED FOR THE ARCHIVE',
    title: 'Featured pieces',
    pieces: [
      {
        id: 'featured-one',
        reference: 'REF. 01 / PLACEHOLDER',
        title: '[Placeholder: product title]',
        description: '[Placeholder: one-line product description]',
        imageAlt: 'Placeholder image for featured piece 01',
        aspectRatio: '4 / 5',
      },
      {
        id: 'featured-two',
        reference: 'REF. 02 / PLACEHOLDER',
        title: '[Placeholder: product title]',
        description: '[Placeholder: one-line product description]',
        imageAlt: 'Placeholder image for featured piece 02',
        aspectRatio: '4 / 5',
      },
      {
        id: 'featured-three',
        reference: 'REF. 03 / PLACEHOLDER',
        title: '[Placeholder: product title]',
        description: '[Placeholder: one-line product description]',
        imageAlt: 'Placeholder image for featured piece 03',
        aspectRatio: '4 / 5',
      },
    ] satisfies FeaturedPieceContent[],
  },
  archive: {
    eyebrow: 'COLLECTION INDEX',
    title: 'THE ARCHIVE',
    count: '[Collection count pending]',
    introduction: 'An index of Jutti Crafts footwear, to be populated with approved product information.',
    emptyState: '[Placeholder: approved archive entries pending.]',
  },
  craft: {
    eyebrow: 'CRAFT / BRAND NOTES',
    title: 'Craft, in context',
    imageAlt: 'Placeholder for a verified Jutti Crafts brand image',
    description: 'Jutti Crafts is a handcrafted footwear brand based in Nagaur, Rajasthan.',
    missingInformation:
      '[Placeholder: additional craft and brand information pending verified source material.]',
  },
  instagram: {
    eyebrow: 'SOCIAL / IMAGE INDEX',
    title: 'Instagram',
    description: 'Instagram is an important digital platform for Jutti Crafts.',
    imageAlts: [
      'Instagram image placeholder 01',
      'Instagram image placeholder 02',
      'Instagram image placeholder 03',
      'Instagram image placeholder 04',
    ],
  },
} as const;