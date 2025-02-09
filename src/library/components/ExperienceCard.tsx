import { FC } from 'react'
import AnimatedSection from './AnimatedSection'

const ExperienceCard: FC<{ item: Experience, index: number }> = ({ item,  }) => {
    return (
        <AnimatedSection key={item?.id}>
            <div className='rounded-tl-full border border-neutralgray  rounded-br-full p-2  bg-linear2  '>
            <div className='flex    p-2  flex-row  bg-black rounded-md shadow-lg items-center  justify-start    backdrop-opacity-10 backdrop-blur-md  '>
                <div
                    key={item?.id}
                    className="  flex items-center justify-center">
                    <img style={{height:130,width:130}} src={item?.image} alt="img" className="bg-background  object-contain rounded-lg" />
                </div>
                <div className='flex flex-col  sm:text-sm  text-[12px] '>
                    <h3 className="font-Poppins bg-linear2 text-transparent bg-clip-text text-neutralgray text- font-semibold">{item?.Company}</h3>
                    <h3 className="font-Poppins text-neutralgray text- font-light">{item?.title}</h3>
                    <h3 className="font-Poppins text-neutralgray text- font-light">{item?.location}</h3>
                    <h3 className="font-Poppins text-neutralgray text- font-light">{item?.timeSpan}</h3>
                    <h3 className="font-Poppins text-neutralgray text- font-light">{item?.type}</h3>
                </div>
            </div> 
            </div>

        </AnimatedSection>
    )
}

export default ExperienceCard