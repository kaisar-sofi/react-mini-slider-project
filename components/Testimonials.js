import Card from "./Card"
import{ FiChevronLeft, FiChevronRight} from "react-icons/fi";
import { useState } from "react";
function Testimonials(props){

    let [index,setIndex] = useState(0);

    function LeftshiftHandler(){

        if(index<=0)
        {
            setIndex(reviews.length-1)
        }
        else{
            setIndex(index-1)
        }
    }

    function RightshiftHandler()
    {
        if(index+1 >= reviews.length)
        {
            setIndex(0);
        }
        else{
            setIndex(index+1)
        }  
           
    }

    function SurpriseshiftHandler()
    {
        let result = Math.floor(Math.random() * reviews.length) ;
        setIndex(result);
    }

    let reviews = props.reviews;
    return(

         <div className="w-[85vw] md:w-[700px] bg-white hover:shadow-xl flex flex-col justify-center rounded-md mt-10 p-10 transition-all duration-700">
            <Card reviews ={reviews[index]}/>

            {/* //buttons */}
            <div className='flex text-3xl mt-5 gap-3 text-violet-400 justify-center items-center font-bold'>
                    <button onClick={LeftshiftHandler}
                     className='cursor-pointer hover:text-violet-500 '>
                        <FiChevronLeft/>
                    </button>
                    <button onClick={RightshiftHandler}
                     className="cursor-pointer hover:text-violet-500 ">
                        <FiChevronRight/>
                    </button>
            </div>

                <div className="mt-6">
                    <button onClick={SurpriseshiftHandler}
                     className='bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg'>
                        Surprise me
                    </button>
                </div>

         </div>
    )
}
export default Testimonials