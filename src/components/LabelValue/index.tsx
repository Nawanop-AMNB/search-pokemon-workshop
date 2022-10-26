import React from 'react';

export type LabelValueProps = {
  label: string;
  value: string;
};

function LabelValue(props: LabelValueProps) {
  return (
    <div className='grid grid-cols-6 grid-rows-1 grid-flow-col gap-x-5 mt-7 mb-7'>
      <div className='col-span-2 text-right font-semibold'>{props.label}</div>
      <div className='col-span-4'>{props.value}</div>
    </div>
  );
}

export default LabelValue;
