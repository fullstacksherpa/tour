import React, {useState} from 'react';

type TourProps={
    id: string;
  image: string;
  info: string;
  name: string;
  price: number;
  removeTour: (id: string) => void;

}


const Tour:React.FC<TourProps>= ({id, image, info, name, price, removeTour}):React.JSX.Element =>{
    const [readMore, setReadMore]=useState(false);
    return (
        <article className='bg-white rounded-md mb-6 mx-0 shadow-sm transition-all duration-300 ease-linear hover:shadow-lg'>
            <img src={image}  className=" w-full h-[20rem] object-cover rounded-tr-lg rounded-tl-lg"alt={name}/>
            <footer className='py-6 px-8'>
                <div className="flex justify-between items-center mb-[1.5rem]">
                    <h4 className='mb-0 font-bold text-[1rem] leading-5 tracking-widest'>{name}</h4>
                    <h4 className='text-blue-700 bg-blue-200 py-1 px-2 rounded-md'>${price}</h4>
                </div>
                <p>
                    {readMore ? info : `${info.substring(0,200)}...`}
                    <button className='bg-transparent capitalize text-blue-400 text-md pointer pl-1' onClick={()=>setReadMore(!readMore)} >
                        {readMore ? 'show less': 'read more'}
                    </button>
                </p>
                <button className='block w-[200px] mt-2 mb-0 mx-auto text-red-500 tracking-wide bg-transparent border-2 border-solid border-red-500 py-1 px-2 rounded-2xl capitalize ' onClick={()=> removeTour(id)}>
                    not interested
                </button>
            </footer>
        </article>
    )
}

export default Tour;
