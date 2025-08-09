import Link from 'next/link';
import Image from 'next/image';

const Error_404 = () => {
  return (
    <div id='404-section' className='global-container flex flex-col items-center justify-center  text-center mt-28 mb-20 '>
      <Image src='/404_error_image.png' alt='404 error image' width={400} height={400} />
      <h1 className='pt-8'> Oops! Page not found </h1>
      <p className='sub-title jos tracking-wider slide-from-bottom m-auto py-6'>  Sorry for the inconvenience, let's go home.  </p>
      <Link href='/' className='button rounded-md'> Take me home &#x27a4;  </Link>
    </div>
  );
};

export default Error_404;
