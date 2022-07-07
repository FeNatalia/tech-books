import { useState } from 'react';

import axios from 'axios';
import Link from 'next/link';

import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Meta } from '../layout/Meta';
import { Section } from '../layout/Section';
import { Hero } from '../templates/Hero';
import { AppConfig } from '../utils/AppConfig';

const Index = () => {
  const [data, setData] = useState([]);

  const searchBooks = async (keyword: any) => {
    if (keyword.length < 3 || keyword === '') {
      setData([]);
      return;
    }
    const res = await axios.get(
      `https://api.itbook.store/1.0/search/${keyword}`
    );
    const dataResult = res.data.books;
    console.log('dataresult', dataResult);
    await setData(dataResult);
  };
  const AllBooks = data.map((book: any) => (
    <Link href={`/book?id=${book.isbn13}`} key={book.isbn13}>
      <a>
        <VerticalFeatureRow
          title={book.title}
          price={book.price === '$0.00' ? 'Free' : book.price}
          description={book.subtitle}
          image={book.image}
          imageAlt={'nothing'}
        />
      </a>
    </Link>
  ));

  return (
    <div className="antialiased text-gray-600">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Hero />
      <Section>
        <div className="text-center flex flex-col p-4 sm:text-left sm:flex-row sm:items-center sm:justify-between sm:p-12 bg-orange-100 rounded-md">
          <div className="text-2xl font-semibold">
            <div className="text-gray-900">Looking for tech books?</div>
            <div className="text-orange-500">Find books from our catalogue</div>
          </div>
          <section className="bg-white rounded-md">
            <label className="block">
              <input
                className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-orange-500 focus:ring-orange-500 focus:ring-1 sm:text-sm"
                name="search"
                type="text"
                placeholder="Search by keyword"
                onChange={(e) => searchBooks(e.target.value)}
              />
            </label>
          </section>
        </div>
      </Section>
      <Section>{AllBooks}</Section>
    </div>
  );
};

export default Index;
