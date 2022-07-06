import { Meta } from '../layout/Meta';
import { Banner } from '../templates/Banner';
import { Hero } from '../templates/Hero';
import { AppConfig } from '../utils/AppConfig';

const Index = () => {
  return (
    <div className="antialiased text-gray-600">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Hero />
      <Banner />
    </div>
  );
};

export default Index;
