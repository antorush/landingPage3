import Container from "../../features/Container/Container";
import Wrapper from "../../features/Wrapper/Wrapper";
import { getTitleElement } from "../../helpers/helper";
import phone from "../../assets/images/phone.svg";
import avatar from "../../assets/images/avatar.svg";

const Testimonials = () => {
  return (
    <Wrapper className="bg-purple-900">
      <Container>
        <div className="flexBetween w-full">
          <div>
            {getTitleElement({
              subtitle: "Testimonials",
              title: "Bigapp got to the next level",
              text: "",
              type: "fourthy",
              textAlign: "text-left",
              linkName: "View Case Study",
              className: "max-w-[385px]",
            })}
          </div>
          <img src={phone} alt="" />
          <div className="block max-w-[385px]">
            <p>
              “Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus
              viverra orci dui consequat turpis scelerisque faucibus.”
            </p>
            <div className="flex justify-start items-center gap-4 mt-4">
              <img src={avatar} alt="" />
              <div>
                <p>Rwanda Melflor</p>
                <p>Co-founder Bigapp</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

export default Testimonials;
