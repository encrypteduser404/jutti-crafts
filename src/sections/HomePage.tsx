import { ArchiveSection } from './ArchiveSection';
import { CraftStorySection } from './CraftStorySection';
import { CuratorialSection } from './CuratorialSection';
import { FeaturedPiecesSection } from './FeaturedPiecesSection';
import { HeroSection } from './HeroSection';
import { InstagramSection } from './InstagramSection';

export function HomePage() {
  return (
    <>
      <HeroSection />
      <CuratorialSection />
      <FeaturedPiecesSection />
      <ArchiveSection />
      <CraftStorySection />
      <InstagramSection />
    </>
  );
}