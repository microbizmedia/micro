
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
                paragraph='A clean, custom-designed website for a local barbershop, letting clients book appointments, explore services, view hours, browse recent work, read reviews, and connect on social media—all in one place.'
                image='/work_images/work-hawaii-1.png'
                button='Open Live Demo'
                link='https://microbizmedia.github.io/hawaii-barbershop/'
            />

            <TextAndPictureWindow
                header="Gearra – Online Store"
                paragraph='Fully featured e-commerce website for selling workout clothes. It includes a product database, secure user login, payment integration, and an admin page for managing inventory. A fully functional, user-friendly e-commerce demonstration.'
                image="/work_images/work-gearra.png"
                button='Open Live Demo'
                link='https://gearra.vercel.app/'
            />

            <TextAndPictureWindow header="Blue Oasis Healing Arts"
                paragraph='A clean, user-friendly template website for a mobile massage studio, featuring service options, contact details, an About page, and a gallery — designed to reflect a calm, professional, and inviting brand experience.'
                image="/work_images/work-blue-oasis.png"
                button='Open Live Demo'
                link='https://www.blueoasishealingarts.com/'
            />

        </div>
    );
};

export default Work;
