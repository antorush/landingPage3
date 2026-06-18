import arrow from "../../assets/icons/arrowPurrple.svg";
import Container from "../../features/Container/Container";
import Wrapper from "../../features/Wrapper/Wrapper";
import type { TDesignItem } from "../../types/types";

interface DesignProps {
  items: TDesignItem[];
}

const Design: React.FC<DesignProps> = ({ items }) => {
  return (
    <Wrapper className="bg-white">
      <Container>
        <div className="w-full flexBetween pb-6">
          <h1 className="textH2Size ">Design events near your</h1>
          <a
            href="#!"
            className="flex max-w-[168px] py-3 text-purple-600 justify-start items-center gap-4"
          >
            <span>Explore Events</span>
            <img src={arrow} alt="" />
          </a>
        </div>
        <ul className="flexBetween gap-6">
          {items?.map((item) => (
            <DesignItem
              key={item.id}
              title={item.title}
              subtitle={item.subtitle}
              status={item.status}
              image={item.image}
            />
          ))}
        </ul>
      </Container>
    </Wrapper>
  );
};

export default Design;

export const DesignItem: React.FC<TDesignItem> = ({
  id,
  image,
  status,
  subtitle,
  title,
}) => {
  return (
    <div className="relative z-10 max-w-[374px] max-h-[410px] h-auto transition-all ease-in-out duration-300 group">
      <span className="absolute top-4 left-4 z-20 px-0.5 py-1 bg-purple-100 text-purple-800 text-sm leading-[140%]">
        {status}
      </span>
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="w-[374px] rounded-md block max-h-[220px] h-[220px] bg-size-[100%] bg-contain bg-center bg-no-repeat transition-all ease-in-out duration-300 group-hover:bg-size-[200%]"
      />
      <div className="pt-6 pb-4 block text-blue-gray-900">
        <h3 className="font-medium text-primaryText leading-[110%]">
          {subtitle}
        </h3>
        <h1 className="font-bold text-[40px] leading-[110%]">{title}</h1>
      </div>
      <a
        href="#!"
        className="flex max-w-[128px] py-3 gap-4 text-purple-600 justify-start items-center"
      >
        <span className="text-primaryText leading-6">Buy Tickets</span>
        <img src={arrow} alt="" />
      </a>
    </div>
  );
};
