import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <main id='404-section' className='global-container flex flex-col items-center justify-center  text-center mt-28 mb-20'>
      <Image src='/404_error_image.png' loading='lazy' alt='404 error image'  width={400} height={400}/>
      <h1 className='pt-8'> Oops! Page not found </h1>
      <p className='sub-title m-auto py-6'>  Sorry for the inconvenience, let&apos;s go home.  </p>
      <Link href='/' className='button rounded-md' aria-label="Go back to homepage"> Take me home &#x27a4;  </Link>
    </main>
  );
};

