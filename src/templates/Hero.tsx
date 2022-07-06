import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'The book recommendations for\n'}
            <span className="text-primary-500">Web developers</span>
          </>
        }
        description="The site we developers need to succeed."
        button={
          <Link href="/new">
            <a>
              <Button xl>Check out new books</Button>
            </a>
          </Link>
        }
      />
    </Section>
  </Background>
);

export { Hero };
