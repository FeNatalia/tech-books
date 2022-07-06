import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Looking for new tech books?"
      subtitle="Find out what books are available."
      button={
        <Link href="/new">
          <a>
            <Button>Search for Books</Button>
          </a>
        </Link>
      }
    />
  </Section>
);

export { Banner };
