import { openPopUp } from '../..//utils/constant';
import React, { createRef, ReactNode, useRef } from 'react';

const ConfirmPopup = ({
  id,
  clickFn,
  children,
}: {
  id: string;
  clickFn: () => void | any;
  children?: ReactNode;
}) => {
  return <div onClick={() => openPopUp(clickFn)}>{children}</div>;
};

export default ConfirmPopup;
