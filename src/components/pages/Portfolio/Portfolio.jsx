import { PortfolioInfo } from 'src/utils/dbTemp';
import Landing from 'src/components/layouts/Landing';
import Section from 'src/components/layouts/Section';
import CardPortfolio from 'src/components/common/Card/CardPortfolio';
import './Portfolio.scss';

const Portfolio = () => {
  return (
    <Landing>
      <Section title="PORTFOLIO.title.1">
        {PortfolioInfo.map((item) => (
          <CardPortfolio
            key={item.id}
            image={item.image}
            title={item.title}
            description={item.description}
            link={item.link !== null ? item.link : null}
          />
        ))}
      </Section>
    </Landing>
  );
};

export default Portfolio;
