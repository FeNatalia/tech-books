import React from 'react';

import Link from 'next/link';

import { Section } from '../layout/Section';
import { Logo } from '../templates/Logo';
import { NavbarTwoColumns } from './NavbarTwoColumns';

const NavBar = () => {
  return (
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />}>
        <li>
          <Link href="/new">
            <a>New Books</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>
  );
};

export default NavBar;
