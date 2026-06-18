import Container from "../../features/Container/Container";
import Wrapper from "../../features/Wrapper/Wrapper";
import { getTitleElement } from "../../helpers/helper";
import bg from "../../assets/images/Desktop.svg";

const Speed = () => {
  return (
    <Wrapper>
      <Container>
        <div className="flexBetween w-full">
          <div>
            {getTitleElement({
              subtitle: "Speed",
              title: "Work fast, w/o interruptions",
              text: "Scelerisque auctor dolor diam tortor, fames faucibus non interdum nunc. Ultrices nibh sapien elit gravida ac, rutrum molestie adipiscing lacinia.",
              className: "max-w-[450px]",
              textAlign: "text-left",
              type: "default",
            })}
          </div>
          <div
            style={{ backgroundImage: `url(${bg})` }}
            className="bg-contain bg-center bg-no-repeat w-[750px] max-w-[750px] h-[480px] pl-2.5"
          />
        </div>
      </Container>
    </Wrapper>
  );
};

export default Speed;
