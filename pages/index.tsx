import { useState } from 'react';
import RoundImage from '../src/components/RoundImage';
import SearchTextBox from '../src/components/SearchTextBox';
import Card from '../src/components/Card';
import Modal from '../src/components/Modal';
import SearchContent from '../src/components/SearchContent';

const IndexPage = () => {
  const [openSearchModal, setOpenSearchModal] = useState(false);
  return (
    <>
      <div
        className={`grid sm:grid-cols-1 sm:grid-rows-2 sm:grid-flow-row lg:grid-cols-5 lg:grid-rows-1 lg:grid-flow-col h-full w-full`}
      >
        <div className='order-2 lg:order-2 sm:row-span-1 lg:col-span-3 bg-[url(/assets/pokemon-party.jpg)] bg-cover w-full h-screen md:h-screen lg:h-full'>
          <div className='relative backdrop-blur-sm h-full bg-gradient-to-t lg:bg-gradient-to-r from-[#000000ac] to-black h-full'>
            <div className='absolute top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%]'>
              <div className='grid grid-col-4 grid-row-1 grid-flow-col items-center justify-items-center gap-5'>
                <div className='col-span-1 hidden md:block'>
                  <RoundImage
                    url='/assets/pokemon-1.png'
                    background='#ebe9bc52'
                    height={100}
                    width={100}
                  />
                </div>
                <div className='col-span-1 hidden md:block'>
                  <RoundImage
                    url='/assets/pokemon-2.png'
                    background='#e0c18171'
                    height={150}
                    width={150}
                  />
                </div>
                <div className='col-span-1 hidden md:block'>
                  <RoundImage
                    url='/assets/pokemon-3.png'
                    background='#c38a6487'
                    height={175}
                    width={175}
                  />
                </div>
                <div className='col-span-1 hidden md:block'>
                  <RoundImage
                    url='/assets/pokemon-4.png'
                    background='#81b8d07c'
                    height={75}
                    width={75}
                  />
                </div>
              </div>
              <div>
                <h1 className='mt-6 mb-6 lg:m-8 text-white text-center text-3xl lg:text-5xl'>
                  Pokemon Wiki
                </h1>
                <h3 className='mt-3 mb-3 lg:m-8 text-white text-center text-lg lg:text-2xl'>
                  Welcome to pokemons's wiki you can find pokemon's information
                  here
                </h3>
                <h3 className='mt-3 mb-3 lg:m-8 text-white text-xl text-center'>
                  there are 100+ of pokemon's info waiting to be discovered
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div className='order-1 lg:order-2 sm:row-span-1 lg:col-span-2 h-full'>
          <div className='grid grid-cols-1 grid-rows-1 grid-flow-col items-center justify-items-center h-full'>
            <Card className='m-6'>
              <h3 className='lg:m-5 text-white text-2xl lg:text-5xl text-center'>
                Find your pokemon..
              </h3>
              <h5 className='m-5 text-white text-left lg:text-center text-lg lg:text-xl'>
                Please input pokemon's name to the textbox below
              </h5>
              <div className='grid grid-cols-1 grid-rows-1 grid-flow-col gap-2 mt-14'>
                <div>
                  <SearchTextBox
                    id='search-pokemon'
                    inputClassName='w-full'
                    placeHolder='Quick Search..'
                    readOnly={true}
                    cursor={'pointer'}
                    onFocus={() => {
                      setOpenSearchModal(true);
                    }}
                  />
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
      <Modal
        open={openSearchModal}
        onClose={() => {
          setOpenSearchModal(false);
        }}
      >
        <Card>
          <SearchContent />
        </Card>
      </Modal>
    </>
  );
};

export default IndexPage;
