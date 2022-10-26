import React from 'react';
import NotFoundView from '../src/components/NotFoundView';
import router from 'next/router';

function NotFoundPage() {
  const onGoHome = () => {
    router.push('/');
  };
  return (
    <div className='h-full w-full'>
      <NotFoundView
        bottom={
          <button
            onClick={onGoHome}
            className='text-white text-xl font-semibold bg-purple-400 hover:bg-purple-500 focus:bg-purple-700 rounded-md p-4 pt-2 pb-2 w-40'
          >
            Go Back
          </button>
        }
      />
    </div>
  );
}

export default NotFoundPage;
