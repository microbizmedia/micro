import TitleMessage from '@/app/components/constants/title-message';
import ProcessWindow from "@/app/components/constants/process-window";
import Image from 'next/image'
const Process = () => {
  return (

    <div id="section-process" className='global-container z-40'>
      <TitleMessage
        header='Full-Cycle Process'
        paragraph="Working with an external agency doesn't mean you lose control or have to manage this project by yourself.
              Our process is designed to keep you involved for the fun parts, with regular updates and progress reviews along the way.
              And because you will get a dedicated project manager, you can leave the daily planing and testing to us."/>
      <ProcessWindow
        header='Discovery Stage'
        paragraph={`Everything starts with a meeting where we discuss your project. We'll be happy to talk about how we'd approach the work, and one of our design leads will make notes so we can accurately estimate the full scope of your project.\n 
                     If the project looks like a good fit for both parties, we'll send you a detailed proposal in 1-2 business days.`}
      />
      <ProcessWindow
        header='Project Foundations'
        paragraph={`We start with some simple onboarding, adding you to our email lsiting for easy communication. We’ll also arrange a kick-off call so you can meet the project manager and hear more about the timeline.\n 
                   Next, our UX team conducts initial research into your users and competitors. They’ll also build out your information architecture and user flow, which informs how users will navigate through the app/website/web-app/service.\n 
                    To conserve your budget, our dev team doesn’t work on the back end until the UX fundamentals are shared, approved and signed off. However, they’ll build a profile of your intellectual property for future integrations since these long term interactions are what really matters to us.`} />
      <ProcessWindow
        header='First Prototype/Demo'
        paragraph={`The UI team conducts interviews and uses mood boards to decide which colors, fonts, and graphics would work best. For your specific project, formulating these UI elements into a “ Standardized design language” helps us ensure consistent design across all relevant platforms and channels.\n 
                   Meanwhile, the UX team prepares visual prototypes of the task—high-fidelity, clickable designs that can be shown to real users. They help us to meet user needs, reduce errors, and reduce both time and costs when improving the UI. By approximately the 2nd week (depending on the complexity of the project this timeframe might change), we’ll be ready to share them with you.`} />
      <ProcessWindow
        header='Design & Development Cycles'
        paragraph={`After reviewing the prototype and everything is approved, we build your project in iterations, continuously testing and quality-checking the work. Because our UX, UI and dev teams work on the same component in close succession, we deliver faster and reduce your time-to-market.\n 
                   We repeat the cycle shown in the timeline diagram bellow for every module. This means you can review each module as we build them, rather than waiting until the whole project is finished. This gives you greater control over both your expenditure and the features we develop.\n 
                    This phase can take anywhere from a few weeks to six months to two years, depending on your requirements.`} />
      <div
        className='overflow-hidden rounded-2xl  border-[12px] border-white/15 mb-8 md:mb-12 mx-auto p-0 hidden lg:block'
        data-aos='zoom-in' >
        <Image className='bg-[#0c1015] p-10' width={1000} height={300} alt="Table-process-img" src='/process_table.png' loading="lazy" />
      </div>

    </div>

  );
};

export default Process;
