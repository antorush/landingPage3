// components/Container/Container.tsx
import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  maxWidth?: number; // Максимальная ширина в пикселях // Горизонтальные отступы // Вертикальные отступы
  className?: string; // Дополнительные классы
  id?: string; // ID для якоря
}

const Container: React.FC<ContainerProps> = ({
  children,
  maxWidth = 1440,
  className = "",
  id,
}) => {
  // Преобразуем отступы в правильный формат для Tailwind

  return (
    <div
      id={id}
      className={`
        w-full
        mx-auto
        px-[40px]
        ${className}
      `}
      style={{ maxWidth: `${maxWidth}px` }}
    >
      {children}
    </div>
  );
};

export default Container;
