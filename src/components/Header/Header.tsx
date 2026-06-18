import Button from "../../features/Button/Button";
import Container from "../../features/Container/Container";
import type { THeader } from "../../types/types";

interface IHeader {
  header: THeader[];
}

const Header: React.FC<IHeader> = ({ header }) => {
  return (
    <header className="block relative py-6 w-full">
      <Container maxWidth={1440}>
        <div
          style={{ boxShadow: "1px 20px 20px rgba(0,0,0,0.5)" }}
          className="flex w-full justify-between items-center  rounded-[20px] p-6 bg-linear-to-b from-blue-gray-600/30 to-blue-gray-900"
        >
          <div className="flex justify-start items-center">
            <a href="/" className="font-bold text-[32px] leading-[110%] pr-9">
              weeb
            </a>
            <ul className="flex justify-center items-center gap-4">
              {header?.map((item) => (
                <a
                  href={"!#"}
                  key={item.id}
                  className="py-3 px-2 textHeader relative cursor-pointer transition-all duration-200  hover:drop-shadow-xl hover:brightness-150 hover:drop-shadow-secondary ease-in-out after:absolute after:w-full after:h-px after:bottom-0 after:left-0 after:bg-secondary after:scale-x-0 after:transition-all after:duration-300 after:ease-in-out hover:after:scale-x-100 hover:after:brightness-150"
                >
                  <li>{item.name}</li>
                </a>
              ))}
            </ul>
          </div>
          <div className="flex justify-center items-center gap-4">
            {Array.from({ length: 2 }).map((_, i) => (
              <Button variant="primary" key={i} type="button" disabled={false}>
                {i == 0 ? "Log In" : "Join Now"}
              </Button>
            ))}
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
