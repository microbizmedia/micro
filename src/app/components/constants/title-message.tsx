"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const TitleMessage = ({
  header,
  paragraph,
  className,
}: {
  header: string;
  paragraph: string;
  className?: string;
}) => {
    const pathname = usePathname();
    const showRoutes = ["/", "work", "process", "services",];

    return (
        <section id="section-title">
            <h1 className='jos slide-from-bottom text-center pt-14 '> {header}  </h1>
            <p className={` jos sub-title tracking-wider slide-from-bottom text-center  m-auto py-6 lg:py-8 
                 ${className}`}>  {paragraph}</p>

            {showRoutes.includes(pathname) ? (
                <div className='jos flex flex-wrap justify-center gap-2 mb-6 lg:mb-10' data-jos_animation='fade' >
                    <Link href='contact' className=' button-micro hover:border-violet-400 ' >
                        Start A Free Consultation
                    </Link>
                    <Link href='about' className='border-0 bg-transparent pt-[18px] pb-[16px] px-[30px] font-semibold opacity-[0.8]'  >
                        Or read more about us &#x27a4;
                    </Link>
                </div>
            ) : null}
        </section>
    );
};

export default TitleMessage;