import React, { PropsWithChildren } from 'react';

export type CenterBoxProps = {};
function CenterBox(props: PropsWithChildren<CenterBoxProps>) {
  return (
    <div className='relative w-full h-full'>
      <div className='absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]'>
        {props.children}
      </div>
    </div>
  );
}

export default CenterBox;
