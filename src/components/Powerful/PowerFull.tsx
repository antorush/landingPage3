import Container from "../../features/Container/Container";
import { getTitleElement } from "../../helpers/helper";
import bg from "../../assets/images/Desktop.svg";

const Powerfull = () => {
  return (
    <section className="relative py-[80px] block">
      <Container>
        <div className="flexBetween w-full">
          <div>
            {getTitleElement({
              subtitle: "Powerful",
              title: "All the tools you can imagine",
              text: "Scelerisque auctor dolor diam tortor, fames faucibus non interdum nunc. Ultrices nibh sapien elit gravida ac, rutrum molestie adipiscing lacinia.",
              textAlign: "text-left",
              className: "max-w-[450px]",
              type: "default",
            })}
          </div>
          <div
            style={{ backgroundImage: `url(${bg})` }}
            className="bg-contain max-w-[750px] h-[480px] block bg-no-repeat bg-center w-[750px]"
          />
        </div>
      </Container>
    </section>
  );
};

export default Powerfull;
