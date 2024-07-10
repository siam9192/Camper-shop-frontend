import { ReactNode } from 'react';

type TWidthContainerProps = {
  children: ReactNode;
};

const WidthLayout = ({ children }: TWidthContainerProps) => {
  return <div className=" max-w-7xl mx-auto lg:px-0 px-2">{children}</div>;
};

export default WidthLayout;
