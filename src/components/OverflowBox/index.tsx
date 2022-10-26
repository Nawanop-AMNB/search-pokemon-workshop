import React, { PropsWithChildren } from 'react';

export type OverflowBoxProps = {
  width: number;
  height: number;
};

function OverflowBox(props: PropsWithChildren<OverflowBoxProps>) {
  const width = props.width;
  const height = props.height;
  return (
    <div
      className='overflow-y-scroll overflow-x-hidden'
      style={{ width, height }}
    >
      <div className='mr-1 mt-[-1rem] w-full h-full'>{props.children}</div>
    </div>
  );
}

export default OverflowBox;
