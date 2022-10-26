import { InboxIcon } from '@heroicons/react/24/outline';

export type NotFoundViewProps = {
  bottom?: React.ReactNode;
};

function NotFoundView(props: NotFoundViewProps) {
  return (
    <div className='w-full h-full'>
      <div className='grid grid-cols-1 grid-rows-1 grid-flow-col items-center h-full'>
        <div className='row-span-1'>
          <InboxIcon className='h-12 w-full text-zinc-700' />
          <p className='text-purple-400 text-xl text-center font-bold'>
            No data found
          </p>
          <div className='text-center mt-4'>{props.bottom}</div>
        </div>
      </div>
    </div>
  );
}

export default NotFoundView;
