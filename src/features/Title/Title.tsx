interface TitleProps {
  isH1: boolean;
  children: React.ReactNode;
  className?: string;
  text: string;
  title?: string;
  isHero: boolean;
  variant?: "primary" | "secondary" | "thirtly" | "fourthy";
  subtitle?: string;
  textAlign?: "text-left" | "text-center" | "text-right";
}

const Title: React.FC<TitleProps> = ({
  children,
  isH1,
  className,
  subtitle,
  varoiant = "primary",
  text,
  title,
  isHero,
  textAlign = "text-center",
}) => {
  enum Variant {
    primary,
    secondary,
    thirtly,
    fourthy,
  }

  const chooseVariant = (variant: Variant) => {
    if (variant === Variant.primary) {
      return <div></div>;
    }
  };

  const titleFirst = title?.split(" ")[0];
  let titleArr = title?.split(" ");
  titleArr[0] = "";
  titleArr = titleArr.join(" ");

  const delimiter = title?.split(" ")[2];
  const firstWords = title?.split(" ")[0] + " " + title?.split(" ")[1];
  const lastWords = title?.split(" ")[3];
  console.log(firstWords, delimiter, lastWords);

  return (
    <div className={`${textAlign}`}>
      {isH1 ? (
        <>
          {subtitle !== undefined && <h3 className="mb-4">{subtitle}</h3>}
          <h1 className={`textH1 text-shadow-2xs`}>
            {!isHero ? (
              <>
                <span>{titleFirst}</span>
                {titleArr}
              </>
            ) : (
              <>
                {firstWords} <span className="text-secondary">{delimiter}</span>{" "}
                {lastWords}
              </>
            )}
          </h1>
          {text.length > 0 && <p className={`py-8 ${textAlign}`}>{text}</p>}
          {children}
        </>
      ) : (
        <>
          {subtitle !== undefined && <h3 className="mb-4">{subtitle}</h3>}
          <h2 className={className}>{title}</h2>
          {text.length > 0 && <p className="py-8">{text}</p>}
          {children}
        </>
      )}
    </div>
  );
};

export default Title;
