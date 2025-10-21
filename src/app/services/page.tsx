'use client';
import TitleMessage from '@/app/components/constants/title-message';
import ServicesIcons from '@/app/components/constants/services-icons';
import ConsultationButton from "../components/constants/meeting-button";

const Services = () => {

  return (

    <div id='section-services' className='global-container z-40 '>
      <TitleMessage
        header='Full Service Digital Partnership'
        paragraph='By working with us you get an entire team of experienced designers, developers, copy writers, data analists and 
                     system administrators, our goal is to produce real results and propel you towards endless growth.'/>

      <ServicesIcons title="Services" />

      <div id="target-pricing" className=' scroll-mt-8 ' >
        <h2 data-aos="zoom-in" className='mx-auto pb-7 lg:pb-16 max-w-[715px] text-center' > Choose Your Website Plan</h2>
      </div>

      <div className='flex justify-center flex-wrap gap-10 mb-8 lg:mb-12' >




        <div className='  overflow-hidden rounded-lg  ring-[12px] ring-white/15   inline-block ' data-aos="flip-left" data-aos-delay='100' >
          <div className='bg-[#0c1015]  h-full '>
            <h3 className='pt-12 text-center'>Launch</h3>
            <ul className='p-6  space-y-2'>
              <li className=''><span className='text-green-500 font-bold'>✓</span> Web Design and Development</li>
              <li className=''><span className='text-green-500 font-bold'>✓</span> Domain Registration and Hosting</li>
              <li className=''><span className='text-green-500 font-bold'>✓</span> Ongoing Maintenance</li>
              <li className='text-slate-500'>&#x2717; Brand Strategy and Logo</li>
              <li className='text-slate-500'>&#x2717; Annual Design Improvements</li>
              <li className='text-slate-500'>&#x2717; Search Engine Optimization</li>
              <li className='text-slate-500'>&#x2717; Paid Ads Management</li>
            </ul>
            <p className='font-bold text-center'>Now Starting at Just</p>
            <div className="flex items-center justify-center ">
              <button className=' inline-block border-none rounded-xl bg-white bg-white/15 p-2 w-[90%] text-[#746eb8] 
                  text-2xl font-bold align-top'><span className=' text-4xl '><span className='text-xl align-top'>$</span>799</span> + <span className='relative text-base bottom-[5px]'>$</span>25/mo</button>
            </div>
            <p className='sub-title text-center underline underline-offset-4 pt-2 text-sm'>Normally valued at $999 + $25/mo</p>
            <div className="flex items-center justify-center ">
              <ConsultationButton buttonName="Book us &#x27a4;" className="button w-full mx-4 inline-block bg-colorWhite  rounded-md mt-8 mb-2" />
            </div>
            <p className='sub-title text-center pb-8 text-sm'>Terms of service Applies</p>
          </div>
        </div>



        <div
          className='block box-border  rounded-lg  ring-[12px]  ring-[#746eb8] bg-[#0c1015] mt-4 md:mt-[-8px] md:mb-[-8px]'
          data-aos="flip-left" data-aos-delay='200'
        >

          <div className='relative top-[-26px] left-[83px] inline-block border-none text-center bg-[#746eb8] px-8 py-2 rounded-[6px] '>Best Value</div>

          <div>
            <h3 className='pt-2 text-center'>Grow</h3>
            <ul className='p-6 space-y-2'>
              <li><span className='text-green-500 font-bold'>✓</span> Web Design and Development</li>
              <li><span className='text-green-500 font-bold'>✓</span> Domain Registration and Hosting</li>
              <li><span className='text-green-500 font-bold'>✓</span> Ongoing Maintenance</li>
              <li><span className='text-green-500 font-bold'>✓</span> Brand Strategy and Logo</li>
              <li><span className='text-green-500 font-bold'>✓</span> Annual Design Improvements</li>
              <li><span className='text-green-500 font-bold'>✓</span> Search Engine Optimization</li>
              <li className='text-slate-500'>&#x2717; Paid Ads Management</li>
            </ul>
            <p className='font-bold text-center'>Now Starting at Just</p>
            <div className="flex items-center justify-center ">
              <button className=' inline-block border-none rounded-xl bg-white bg-white/15 p-2 w-[90%] text-[#746eb8] 
                  text-2xl font-bold align-top'><span className=' text-4xl '><span className='text-xl align-top'>$</span>1399</span> + <span className='relative text-base bottom-[5px]'>$</span>35/mo</button>
            </div>
            <p className='sub-title text-center underline underline-offset-4 pt-2 text-sm'>Normally valued at $1999 + $35/mo</p>
            <div className="flex items-center justify-center ">
              <ConsultationButton buttonName="Book us &#x27a4;" className="button w-full mx-4 inline-block bg-colorWhite  rounded-md mt-8 mb-2" />
            </div>
            <p className='sub-title text-center pb-8 text-sm'>Terms of service Applies</p>
          </div>

        </div>


        <div className='  overflow-hidden rounded-lg  ring-[12px] ring-white/15   inline-block ' data-aos="flip-left" data-aos-delay='300' >
          <div className='bg-[#0c1015]  h-full '>
            <h3 className='pt-12 text-center'>Scale</h3>
            <ul className='p-6  space-y-2'>
              <li><span className='text-green-500 font-bold'>✓</span> Web Design and Development</li>
              <li><span className='text-green-500 font-bold'>✓</span> Domain Registration and Hosting</li>
              <li><span className='text-green-500 font-bold'>✓</span> Ongoing Maintenance</li>
              <li><span className='text-green-500 font-bold'>✓</span> Brand Strategy and Logo</li>
              <li><span className='text-green-500 font-bold'>✓</span> Annual Design Improvements</li>
              <li><span className='text-green-500 font-bold'>✓</span> Search Engine Optimization</li>
              <li><span className='text-green-500 font-bold'>✓</span> Paid Ads Management</li>
            </ul>
            <p className='font-bold text-center'>Now Starting at Just</p>
            <div className="flex items-center justify-center ">
              <button className=' inline-block border-none rounded-xl bg-white bg-white/15 p-2 w-[90%] text-[#746eb8] 
                  text-2xl font-bold align-top'><span className=' text-4xl '><span className='text-xl align-top'>$</span>1399</span> + <span className='relative text-base bottom-[5px]'>$</span>599/mo</button>
            </div>
            <p className='sub-title text-center underline underline-offset-4 pt-2 text-sm'>Normally valued at $1999 + $599/mo</p>
            <div className="flex items-center justify-center ">
              <ConsultationButton buttonName="Book us &#x27a4;" className="button w-full mx-4 inline-block bg-colorWhite  rounded-md mt-8 mb-2" />
            </div>
            <p className='sub-title text-center pb-8 text-sm'>Terms of service Applies</p>
          </div>
        </div>




      </div>

    </div>
  );
};

export default Services;
