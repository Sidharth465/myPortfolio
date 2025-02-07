import { FC } from 'react'
import AnimatedSection from './AnimatedSection'

const ExperienceCard: FC<{ item: Experience, index: number }> = ({ item,  }) => {
    return (
        <AnimatedSection key={item?.id}>
            <div className='flex gap-2 p-2  flex-row  shadow-lg items-center  justify-start border-[1px]  border-neutralgray  backdrop-opacity-10 backdrop-blur-md rounded-lg '>
                <div
                    key={item?.id}
                    className="  flex items-center justify-center">
                    <img style={{height:135,width:135}} src={item?.image} alt="img" className="bg-background  object-contain rounded-lg" />
                </div>
                <div className='flex flex-col   text-sm '>
                    <h3 className="font-Poppins bg-linear2 text-transparent bg-clip-text text-neutralgray text- font-semibold">{item?.Company}</h3>
                    <h3 className="font-Poppins text-neutralgray text- font-light">{item?.title}</h3>
                    <h3 className="font-Poppins text-neutralgray text- font-light">{item?.location}</h3>
                    <h3 className="font-Poppins text-neutralgray text- font-light">{item?.timeSpan}</h3>
                    <h3 className="font-Poppins text-neutralgray text- font-light">{item?.type}</h3>
                </div>
            </div> 


        </AnimatedSection>
    )
}

export default ExperienceCard