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
      <div className={`grid grid-flow-col h-full`}>
        <div className='col-span-4 bg-[url(/assets/pokemon-party.jpg)] bg-cover'>
          <div className='relative backdrop-blur-sm h-full bg-gradient-to-r from-[#000000ac] to-black'>
            <div className='absolute h-2/3 w-2/3 top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%]'>
              <div className='grid grid-col-4 grid-row-1 grid-flow-col items-center justify-items-center'>
                <div className='col-span-1'>
                  <RoundImage
                    url='/assets/pokemon-1.png'
                    background='#ebe9bc52'
                    height={100}
                    width={100}
                  />
                </div>
                <div className='col-span-1'>
                  <RoundImage
                    url='/assets/pokemon-2.png'
                    background='#e0c18171'
                    height={150}
                    width={150}
                  />
                </div>
                <div className='col-span-1'>
                  <RoundImage
                    url='/assets/pokemon-3.png'
                    background='#c38a6487'
                    height={175}
                    width={175}
                  />
                </div>
                <div className='col-span-1'>
                  <RoundImage
                    url='/assets/pokemon-4.png'
                    background='#81b8d07c'
                    height={75}
                    width={75}
                  />
                </div>
              </div>
              <div
                className={
                  'grid grid-rows-1 grid-cols-1 grid-flow-col items-center'
                }
              >
                <div>
                  <h1 className='m-8 text-white text-5xl text-center'>
                    Pokemon Wiki
                  </h1>
                  <h3 className='m-8 text-white text-2xl text-center'>
                    Welcome to pokemons's wiki you can find pokemon's
                    information here
                  </h3>
                  <h3 className='m-8 text-white text-xl text-center'>
                    there are 100+ of pokemon's info waiting to be discovered
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='h-full'>
          <div className='grid grid-cols-1 grid-rows-1 grid-flow-col items-center justify-items-center h-full'>
            <Card>
              <h3 className='m-5 text-white text-5xl text-center flex'>
                Find your pokem
                <span className='mr-1 ml-1'>
                  <img className='w-12 h-12' src='/assets/pokeball.png' />
                </span>
                n..
              </h3>
              <h5 className='m-5 text-white text-center text-xl'>
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
        <SearchContent />
      </Modal>
    </>
  );
};

export default IndexPage;
