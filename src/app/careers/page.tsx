import TitleMessage from "@/app/components/constants/title-message";
import CareerWindow from "@/app/components/constants/career-window";

const Careers = () => {


    return (
        <div id="section-careers" className='global-container z-40'>
            <TitleMessage
                header="Let's Form Lasting Relationships"
                paragraph='We are more than just another digital service agency. We are a collective of inovators, creators, developers
            and changemakers, who dare to dream and disrupt. Average is not a part of our DNA, our teams make us extraordinary, join us today!'/>

            <h2 className=" text-center pb-4 lg:pb-8 lg:pt-8" data-aos='zoom-in'> Discover Open Positions</h2>
            <CareerWindow
                header="Frontend Developer Intern (React.js)"
                career='Technology Department'
                description={`For more information visit our post on the job board.
                        Denver, Colorado | Munich, Germany | Remote`} />
            <CareerWindow
                header="Full Stack Developer Intern (JavaScript)"
                career='Technology Department'
                description={`For more information visit our post on the job board.
                        Denver, Colorado | Munich, Germany | Remote`} />
        </div>
    );
};

export default Careers;
