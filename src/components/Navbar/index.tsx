import router from 'next/router';
function Navbar() {
  const onGoHomePage = () => {
    router.push('/');
  };
  return (
    <nav className='bg-white border-grey-200 px-2 bg-black'>
      <div
        className={`container flex flex-wrap justify-between items-center mx-auto h-[70px]`}
      >
        <div
          onClick={onGoHomePage}
          className='flex items-center cursor-pointer'
        >
          <img src='/assets/pokeball.png' className='mr-3 h-6 sm:h-9' />
          <span className='self-center text-xl font-semibold whitespace-nowrap text-white'>
            Pokemon Wiki
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
