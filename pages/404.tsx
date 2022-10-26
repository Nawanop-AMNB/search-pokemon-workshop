import React from 'react';
import NotFoundView from '../src/components/NotFoundView';

function NotFoundPage() {
  return (
    <div className='h-full w-full'>
      <NotFoundView
        bottom={
          <button className='text-white text-xl bg-purple-400 rounded-md p-4 pt-2 pb-2 w-40'>
            Go Back
          </button>
        }
      />
    </div>
  );
}

export default NotFoundPage;
