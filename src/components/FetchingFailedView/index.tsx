import React from 'react';
import CenterBox from '../CenterBox';
import { ExclamationCircleIcon } from '@heroicons/react/24/outline';

function FetchingFailedView() {
  return (
    <CenterBox>
      <div className='w-[400px] h-[300px]'>
        <div className='grid grid-cols-1 grid-rows-3 grid-flow-row gap-3 content-center'>
          <div>
            <ExclamationCircleIcon className='h-32 w-full text-zinc-700' />
          </div>
          <div className='flex flex-col gap-2'>
            <p className='text-purple-400 text-2xl text-center font-bold'>
              Something went wrong!
            </p>
            <p className='text-zinc-200 text-md text-center'>
              there is something error occured during fetching
            </p>
            <p className='text-zinc-400 text-sm text-center'>
              please try again later
            </p>
          </div>
          <div></div>
        </div>
      </div>
    </CenterBox>
  );
}

export default FetchingFailedView;
