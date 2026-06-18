import Container from "../../features/Container/Container";
import type { TfooterMenu } from "../../types/types";
import type { TSocial } from "../../types/types";

interface IFooterProps {
  footer: TfooterMenu[];
  social: TSocial[];
}

const Footer: React.FC<IFooterProps> = ({ footer, social }) => {
  const year = new Date().getFullYear();

  return (
    <footer className="realtive block bg-white">
      <Container>
        <div>
          <div className="flex justify-between items-start border-t-[1px] border-b-[1px] py-12 border-blue-gray-600/20">
            <a
              href="/"
              className="font-bold text-[32px] leading-[110%] pr-9 text-blue-gray-900"
            >
              weeb
            </a>
            <div className="grid grid-cols-4 grid-rows-1 gap-12">
              {footer?.map((footerItem) => (
                <ul
                  key={footerItem.id}
                  className="flex justify-start items-start flex-col w-[217px] h-auto"
                >
                  <h3 className="font-medium leading-[110%] text-primaryText text-blue-gray-600 uppercase pb-3">
                    {footerItem.title}
                  </h3>
                  {footerItem?.links?.map((link) => (
                    <a
                      href={link.href}
                      className="transition-all ease-in-out duration-200 hover:opacity-50"
                    >
                      <li className="py-3 leading-[140%] font-normal text-primaryText text-blue-gray-900">
                        {link.name}
                      </li>
                    </a>
                  ))}
                </ul>
              ))}
            </div>
          </div>
          <div className="flex justify-between items-center py-12">
            <p className="text-primaryText leading-[140%] text-blue-gray-900">{`@ ${year} Weeb, Inc. All rights reserved.`}</p>
            <ul className="flex justify-center items-center gap-4">
              {social?.map((social) => (
                <a
                  href={social.href}
                  key={social.id}
                  className="transition-all duration-300 ease-in-out hover:-scale-x-75"
                >
                  <img src={social.icon} />
                </a>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
