import React from "react";
import Button from "../features/Button/Button";
import arrow from "../assets/icons/arrow.svg";

type TgetTitleElement = {
  type?: "primary" | "secondary" | "thirtly" | "fourthy" | "default";
  text?: string;
  title?: string;
  subtitle?: string;
  textAlign?: "text-left" | "text-center" | "text-right";
  className?: string;
  linkName?: string;
};

export const getTitleElement = (props: TgetTitleElement) => {
  const {
    type,
    text = "",
    title = "",
    subtitle = "",
    textAlign = "text-center",
    className = "",
    linkName = "",
  } = props;

  // Функция для выделения первого слова

  const getHighLightedSecondWord = (style: "primary" | "secondary") => {
    if (!title) return null;
    const words = title.split(" ");
    const firstWord = words[0];
    const secondWord = words[1];
    const restWords = words.slice(2).join(" ");

    return (
      <>
        <span className="relative text-purple-400">{firstWord} </span>
        <span
          className={`relative text-primary after:absolute after:block after: ${style == "primary" ? "after:w-[85%] after:top-0 after:left-0 after:-z-10 after:h-[100%] after:left-[-10px] after:border-[5px] after:border-orange-700" : "after:w-[22%] after:-left-2 after:top-0 after:-z-10 after:h-[100%] after:bg-pink-700"}`}
        >
          {secondWord}{" "}
        </span>
        {restWords && <span className="text-primary">{restWords}</span>}
      </>
    );
  };

  const getLinkTitle = (size: "small" | "medium" | "large") => {
    return (
      <a
        href="!#"
        className={`flex justify-between items-center py-4 ${size == "small" ? "max-w-[178px]" : size == "medium" ? "max-w-[178px]" : "max-w-[350px]"} group transition-all linear duration-300 hover:translate-x-3.5`}
      >
        <span className="pr-1.5 text-btnText leading-6 font-medium tracking-wide text-primary">
          {linkName.length !== 0 && linkName}
        </span>
        <img
          src={arrow}
          width={14}
          height={14}
          alt=""
          className="transition-all duration-200 delay-300 linear group-hover:translate-x-2"
        />
      </a>
    );
  };

  // Функция для выделения среднего слова
  const getStyledTitle = (style: "primary" | "secondary") => {
    if (!title) return null;
    const words = title.split(" ");
    if (words.length < 3) return title;

    const firstWord = words[0];
    const secondWord = words[1];
    const middleWord = words[2];
    const lastPart = words.slice(3).join(" ");
    const restWords = words.slice(1).join(" ");

    return style == "primary" ? (
      <>
        <span>{firstWord} </span>
        <span className="relative after:absolute after:w-full after:h-[6px] after:bottom-0 after:left-0 after:bg-purple-400 after:z-10 ">
          {secondWord}{" "}
        </span>
        <span className="text-primary-500 text-secondary">{middleWord}</span>{" "}
        <span className="relative z-20 after:absolute after:w-full after:h-[6px] after:top-4 after:left-0 after:bg-purple-400 after:-z-10 ">
          {lastPart}
        </span>
      </>
    ) : (
      <>
        <span className="relative after:absolute z-30 after:bottom-0 after:left-0 after:z-10 after:w-[90%] after:h-[5px] after:bg-purple-400">
          {firstWord}{" "}
        </span>
        <span>{restWords}</span>
      </>
    );
  };

  const alignClass = textAlign;

  // Рендер в зависимости от типа
  switch (type) {
    case "primary":
      return (
        <div
          className={`${alignClass} ${className} flex justify-center items-center flex-col`}
        >
          {subtitle && (
            <h3 className="text-xl leading=[100%] uppercase tracking-widest text-primary mb-4">
              {subtitle}
            </h3>
          )}
          <h1 className="textH1 md:text-5xl lg:text-6xl">
            {getStyledTitle("primary")}
          </h1>
          {text && (
            <p className="max-w-[900px] text-alternativeText py-8 leading-[160%]">
              {text}
            </p>
          )}
          <ul className="flex justify-center items-center gap-4">
            {Array.from({ length: 2 }).map((_, index) => (
              <Button
                type="button"
                disabled={false}
                key={index}
                variant="secondary"
              >
                {index == 0 ? "Join Now" : "View Demo"}
              </Button>
            ))}
          </ul>
        </div>
      );

    case "secondary":
      return (
        <div className={`${alignClass} ${className}`}>
          {subtitle && (
            <h3 className="text-xl leading=[100%] uppercase tracking-widest text-primary mb-4">
              {subtitle}
            </h3>
          )}
          <h2 className="textH2">{getHighLightedSecondWord("primary")}</h2>
          {text && (
            <p className="text-alternativeText block max-w-[600px] py-8 leading-[160%]">
              {text}
            </p>
          )}
          {getLinkTitle("medium")}
        </div>
      );

    case "thirtly":
      return (
        <div className={`${alignClass} ${className}`}>
          {subtitle && (
            <h3 className="text-xl leading=[100%] uppercase tracking-widest text-primary mb-4">
              {subtitle}
            </h3>
          )}
          <h2 className="textH2">
            {getHighLightedSecondWord("secondary") || text}
          </h2>
          {text && (
            <p className="text-alternativeText py-8 leading-[160%]">{text}</p>
          )}
          {getLinkTitle("large")}
        </div>
      );

    case "fourthy":
      return (
        <div className={`${alignClass} ${className}`}>
          {subtitle && (
            <h3 className="text-xl leading=[100%] uppercase tracking-widest text-primary mb-4">
              {subtitle}
            </h3>
          )}
          <h2
            className={`textH2 ${text.length == 0 || text == undefined ? "pb-[32px]" : ""}`}
          >
            {getStyledTitle("secondary")}
          </h2>
          {text && (
            <p className="text-alternativeText py-8 leading-[160%]">{text}</p>
          )}
          {getLinkTitle("small")}
        </div>
      );

    default:
      return (
        <div className={`${alignClass} ${className}`}>
          <div className="">
            {subtitle && (
              <h3 className="text-xl leading=[100%] uppercase tracking-widest text-primary mb-4">
                {subtitle}
              </h3>
            )}
            <h2 className="textH2">{title}</h2>
            {text && (
              <p className="text-alternativeText py-8 leading-[160%]">{text}</p>
            )}
          </div>
        </div>
      );
  }
};
