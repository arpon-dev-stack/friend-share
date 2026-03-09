import { yeseva_one } from './ui/fonts';
import Image from 'next/image';
import friend from './public/friend.png';

export default function Home() {
  return (
    <div className='pt-[100px] overflow-hidden'>
      <h1
        className={`text-4xl sm:text-5xl text-black text-center ${yeseva_one.className}`}
      >
        Friends Together
      </h1>
      <Image
        src={friend}
        height={200}
        alt='friend'
        objectFit=''
        className='max-w-none relative left-1/2 -translate-x-1/2 z-0'
      />
      <button
        className={`${yeseva_one.className} relative left-1/2 -translate-x-1/2 button-interaction py-1 px-3 text-3xl text-white mt-16 `}
      >
        Join now
      </button>
      <div className='mt-16 p-5 bg-foreground flex gap-5'>
        <p className='w-1/2 text-black text-[20px]'>
          This is the platform where friends connect to each other and share
          anything without any third party interaction. To join this platform it
          take less minimal step than any other.
        </p>
        <div className='gap-2 grid-cols-2 grid-flow-row w-1/2 grid'>
          <span className='text-white py-1 px-3 bg-button flex justify-center items-center font-medium'>
            Online Voice Call
          </span>
          <span className='text-white py-1 px-3 bg-button flex justify-center items-center font-medium'>
            Video Call
          </span>
          <span className='text-white py-1 px-3 bg-button flex justify-center items-center font-medium'>
            Data Shairing
          </span>
        </div>
      </div>
    </div>
  );
}
