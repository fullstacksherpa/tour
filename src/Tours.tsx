import React from 'react'
import Tour from './Tour';
import {TourType} from './App'

type TourProps = {
    tours:TourType[];
    removeTour: (id:string)=>void
}

const Tours:React.FC<TourProps> = ({tours, removeTour}) => {
  return (
     <section>
        <div className="text-center mb-16">
            <h2 className='tracking-wide capitalize text-4xl font-bold'>our tours</h2>
            <div className="w-[96px] h-1 bg-blue-500 mx-auto mt-3"></div>
        </div>
        <div>
            {tours.map((tour) =>{
                return <Tour key={tour.id} {...tour} removeTour={removeTour} />
            })}
        </div>
     </section>
  )
}

export default Tours
