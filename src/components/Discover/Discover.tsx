import Container from "../../features/Container/Container";
import { getTitleElement } from "../../helpers/helper";
import shape from "../../assets/images/Shapes.svg";

const Discover = () => {
  return (
    <section className="block py-[80px] relative">
      <Container>
        <div className="w-full flex justify-between items-center">
          <div className="max-w-[800px]">
            {getTitleElement({
              subtitle: "Discover",
              title: "Unlimited ideas for your next great projects",
              text: "Scelerisque auctor dolor diam tortor, fames faucibus non interdum nunc.Ultrices nibh sapien elit gravida ac, rutrum molestie adipiscing lacinia.",
              className: "",
              type: "secondary",
              textAlign: "text-left",
              linkName: "Discover Ideas",
            })}
          </div>
          <img src={shape} alt="" />
        </div>
      </Container>
    </section>
  );
};

export default Discover;
