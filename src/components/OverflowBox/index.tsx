import React, { PropsWithChildren } from 'react';

export type OverflowBoxProps = {};

function OverflowBox(props: PropsWithChildren<OverflowBoxProps>) {
  return (
    <div className='overflow-y-scroll overflow-x-hidden'>
      <div className='mr-1 mt-[-1rem] h-full w-full'>{props.children}</div>
    </div>
  );
}

export default OverflowBox;
