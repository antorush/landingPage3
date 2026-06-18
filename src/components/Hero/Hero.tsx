import Container from "../../features/Container/Container";
import { getTitleElement } from "../../helpers/helper";
import bg from "../../assets/images/Desktop.svg";

const Hero = () => {
  return (
    <section className="block py-[80px]">
      <Container>
        <div className="text-center w-full">
          {getTitleElement({
            title: "Design Faster & Better",
            text: "Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris.Pharetra, eu imperdiet ipsum ultrices amet, dui sit suspendisse.",
            type: "primary",
            className: "w-full",
            textAlign: "text-center",
          })}
          <div
            style={{ backgroundImage: `url(${bg})` }}
            className="bg-contain w-full bg-no-repeat bg-center max-w-[1440px] h-[1100px] rounded-2xl"
          />
        </div>
      </Container>
    </section>
  );
};

export default Hero;
