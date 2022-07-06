import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';
// @ts-ignore
const VerticalFeatures = ({ books }) => {
  return (
    <Section
      title="Check out the latest books related to IT"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada nisi tellus, non imperdiet nisi tempor at."
    >
      {/* @ts-ignore */}
      {books.map((book: any) => {
        return (
          <div key={book.isbn13}>
            <VerticalFeatureRow
              title={book.title}
              price={book.price === '$0.00' ? 'No Price' : book.price}
              description={
                book.subtitle === '' ? 'No description' : book.subtitle
              }
              image={book.image}
              imageAlt={'nothing'}
            />
          </div>
        );
      })}
      {/* <VerticalFeatureRow
        title="Your title here"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
        image="/assets/images/feature2.svg"
        imageAlt="Second feature alt text"
        reverse
      />
      <VerticalFeatureRow
        title="Your title here"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
        image="/assets/images/feature3.svg"
        imageAlt="Third feature alt text"
      /> */}
    </Section>
  );
};

export { VerticalFeatures };
