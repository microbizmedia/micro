
const ProcessWindow = ({ header, paragraph }) => {
    return (
        <div
            className=' jos hero-img overflow-hidden rounded-2xl  border-[12px] border-white border-opacity-15 mb-8 lg:mb-12 mx-auto p-0'
            data-jos_animation='zoom'
        >
            <div className='bg-colorBackground px-4 py-10 lg:py-8 lg:pl-16 lg:pr-8 whitespace-pre-line'>
                <h3>{header}</h3>
                <p className='pt-6'>{paragraph}</p>
            </div>
        </div>
    );
};

export default ProcessWindow;