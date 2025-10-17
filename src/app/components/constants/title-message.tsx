"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import StartAFreeConsultationButton from "./meeting-button";
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
    const showRoutes = ["/", "/work", "/process", "/services",];
    return (
        <section id="section-title">

            <h1 className=' text-center pt-14 ' data-aos="zoom-in"> {header}  </h1>
            <p className={` sub-title  text-center  m-auto py-6 lg:py-8  ${className}`} data-aos="zoom-in">  {paragraph}</p>

            {showRoutes.includes(pathname) ? (
                <div className=' flex flex-wrap justify-center gap-2 mb-6 lg:mb-10' data-aos="zoom-in">
                    <StartAFreeConsultationButton buttonName="Start a Free Consultation" className=' button-micro '/>
                    <Link href='about' className='border-0 bg-transparent pt-[18px] pb-[16px] px-[30px] font-[500]'  >
                        Or read more about us &#x27a4;
                    </Link>
                </div>
            ) : null}
        </section>
    );
};

export default TitleMessage;