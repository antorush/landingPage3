import Container from "../../features/Container/Container";
import Wrapper from "../../features/Wrapper/Wrapper";
import { getTitleElement } from "../../helpers/helper";
import shape2 from "../../assets/images/Shapes2.svg";

const Customers = () => {
  return (
    <Wrapper>
      <Container>
        <div className="w-full flexBetween">
          <div className="">
            {getTitleElement({
              title: "Target customers with our powerful AI kit",
              subtitle: "Customers",
              text: "Scelerisque auctor dolor diam tortor, fames faucibus non interdum nunc.Ultrices nibh sapien elit gravida ac, rutrum molestie adipiscing lacinia.",
              type: "thirtly",
              textAlign: "text-left",
              linkName: "How Targeting Customers Works",
              className: "max-w-[800px]",
            })}
          </div>
          <img src={shape2} width={284} height={284} alt="" />
        </div>
      </Container>
    </Wrapper>
  );
};

export default Customers;
