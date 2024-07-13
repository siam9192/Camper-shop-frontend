import React, { ReactNode } from 'react';
type TSectionContainerProps = {
  children: ReactNode;
};

const SectionContainer = ({ children }: TSectionContainerProps) => {
  return <div className="py-10 md:py-20">{children}</div>;
};

export default SectionContainer;
