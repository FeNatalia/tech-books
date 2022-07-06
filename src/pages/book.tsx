import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '../button/Button';

// @ts-ignore
const Book = ({ book }) => {
  return (
    <div className="m-20 flex flex-wrap items-center justify-center">
      <main className="w-full sm:w-1/2 text-center sm:px-6">
        <Image src={book.image} alt={book.title} width={300} height={300} />
        <h2 className="text-3xl text-gray-900 font-semibold">{book.title}</h2>
        <div className="flex m-10 items-center justify-center">
          <p className="mr-5">
            <strong>Price: </strong>
            {book.price === '$0.00' ? 'No Price' : book.price}
          </p>
          <p className="mr-5">
            <strong>Year: </strong>
            {book.year}
          </p>
          <p>
            <strong>Rating: </strong>
            {book.rating === '0' ? 'No Rating' : book.rating}
          </p>
        </div>
        <strong>Description: </strong>
        <p className="m-5">{book.desc}</p>
        <Link href="/new">
          <a>
            <Button xl>Go Back</Button>
          </a>
        </Link>
      </main>
    </div>
  );
};

// @ts-ignore
export async function getServerSideProps({ query }) {
  const { id } = query;
  const res = await axios.get(`https://api.itbook.store/1.0/books/${id}`);
  const productData = res.data;
  return { props: { book: productData } };
}

export default Book;
