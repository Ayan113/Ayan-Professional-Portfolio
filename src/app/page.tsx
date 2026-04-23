import { PortfolioPage } from '@/components/portfolio/portfolio-page';
import { portfolioStructuredData } from '@/data/portfolio';

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioStructuredData) }}
      />
      <PortfolioPage />
    </>
  );
}
