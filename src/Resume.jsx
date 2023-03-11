import React from 'react'


export default function Resume(){

    return(
        <div class="mx-auto max-w-6xl bg-white py-20 px-12 lg:px-24 shadow-xl mb-24">   
            <h1 class="text-3xl lg:text-4xl text-center mb-6 tracking-wider pt-5">Michael Gaynor's Resume</h1>
            <div class="flex justify-center -mx-2">	
                    <div class="w-1/2 p-2">
                        <a href="#" class="block mb-8 bg-black hover:bg-gray-700">
                            <img src="src/ScreeShot Resume.png" class="w-200 h-200 opacity-90" />
                        </a>
                        <button onClick={"src/ScreeShot Resume.png"}
                        class="py-3 px-5 mt-5 text-sm text-center text-white bg-black rounded-lg  sm:w-fit hover:border-gray-300 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Download Resume</button>
                    </div>	
                </div>
            </div>
    
    )
}