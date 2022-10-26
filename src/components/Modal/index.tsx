import React, { PropsWithChildren, useEffect, useRef } from 'react';
import Card from '../Card';

export type ModalProps = {
  open: boolean;
  onClose?: () => void;
};
function Modal(props: PropsWithChildren<ModalProps>) {
  if (props.open) {
    return (
      <div tabIndex={-1}>
        <div
          onClick={props.onClose}
          className='fixed top-0 left-0 right-0 bottom-0 bg-[#0000009d] backdrop-blur-sm z-99 w-screen h-screen overflow-hidden'
        >
          <div
            className='fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-999'
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <Card>{props.children}</Card>
          </div>
        </div>
      </div>
    );
  }

  return <></>;
}

export default Modal;
