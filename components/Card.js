import React from 'react'
import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa'

function Card(props){
    let reviews = props.reviews;
    return(
        <div className=" flex flex-col md:relative">
            <div className="absolute top-[-7rem] mx-auto z-20">
                <img 
                className="aspect-square rounded-full w-[140px] h-[140px] z-10 "
                src={reviews.image} 
                alt=""/>
                <div className="w-[140px] h-[140px] bg-violet-400 rounded-full absolute z-[-10] top-[-6px] left-[10px]"></div>
            </div>

                <div className="text-center mt-7">
                    <p className="font-bold text-2xl capitalize">{reviews.name}</p>
                </div>

            <div className="text-center">
                <p className="text-violet-300 uppercase text-sm">{reviews.job}</p>
            </div>

            <div className="text-violet-400 mx-auto mt-5">
                <FaQuoteLeft/>
            </div>

            <div className="text-center mt-4 text-slate-500">
                {reviews.text}
            </div>

            <div className="text-violet-400 mx-auto mt-5">
                <FaQuoteRight/>
            </div>
        </div>
    )
}
export default Card