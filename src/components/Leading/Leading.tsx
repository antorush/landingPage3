import { logos } from "../../data/data";
import Container from "../../features/Container/Container";
import { getTitleElement } from "../../helpers/helper";

const Leading = () => {
  return (
    <section className="relative block py-[80px]">
      <Container>
        {getTitleElement({
          title: "Join Leading Companies",
          className: "w-full",
          type: "default",
          textAlign: "text-center",
        })}
        <ul className="flexCenter gap-[80px] mt-[80px]">
          {logos?.map((logo, index) => (
            <li key={index}>
              <img src={logo} alt="" />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default Leading;
