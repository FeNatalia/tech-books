import React from 'react';

import axios from 'axios';

import { VerticalFeatures } from '../templates/VerticalFeatures';
// @ts-ignore
const New = ({ books }) => {
  return <VerticalFeatures books={books} />;
};
New.getInitialProps = async () => {
  const res = await axios.get('https://api.itbook.store/1.0/new');
  const data = res.data.books;

  return { books: data };
};
export default New;
