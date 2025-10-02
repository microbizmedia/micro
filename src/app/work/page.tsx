
import TitleMessage from '@/app/components/constants/title-message';
import TextAndPictureWindow from '@/app/components/constants/text-picture-window';

const Work = () => {

    return (
        <div id='section-work' className='global-container z-40'>
            <TitleMessage
                header='100+ B2B Partners'
                paragraph='At MicroBiz, we have a team of experienced professionals who specialize in creating digital products
                     that transform businesses. Every project we work on gets designed to help our clients become more eficient and competitive.'/>


            <TextAndPictureWindow header="Hawaii Barbershop Kempten"
                paragraph='A clean and functional website for a local barbershop, allowing clients to
                                         book appointments, view services and hours, browse recent work, read reviews, and connect 
                                         via social media—all in one place.'
                image='/work_images/work-hawaii-1.png'
                button='Open Live Demo'
                link='https://microbizmedia.github.io/hawaii-barbershop/' />

            <TextAndPictureWindow header="Blue Oasis Healing Arts"
                paragraph='A clean, user-friendly website for a mobile massage studio featuring service options, contact details,
                 an About page, and a gallery — designed to reflect a calm, professional, and inviting brand experience. '
                image="/work_images/blue-oasis-screen.png"
                button='Open Live Demo' 
                link='https://www.blueoasishealingarts.com/'
                />


            <TextAndPictureWindow
                header="Devado Vehicle Solutions"
                paragraph=' A clean, user-friendly website for a mobile massage studio featuring service options, contact details,
                 an About page, and a gallery — designed to reflect a calm, professional, and inviting brand experience.'
                image="/work_images/work-nefi-1.png"
                button='Open Live Demo'
            />
            <TextAndPictureWindow header="Devado Vehicle Solutions"
                paragraph=' The ultimate car enthusiast platform developed
                                       for both individuals and businesses boasting market
                                    leading features and a user-friendly interface'
                image="/work_images/work-placeholder-1.png"
                button='Open Live Demo' />
        </div>
    );
};

export default Work;
