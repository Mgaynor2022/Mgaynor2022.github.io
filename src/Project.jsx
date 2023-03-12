import React from 'react'


export default function Project(){

    return(
        <div class="mx-auto max-w-6xl bg-white py-20 px-12 lg:px-24 shadow-xl mb-24">   
            <h1 class="text-3xl lg:text-4xl text-center mb-6 tracking-wider pt-5">Projects</h1>
            <div class="flex justify-center -mx-2">	
                    <div class="w-full p-2">
                        <a href="#" class="block mb-8 bg-black hover:bg-gray-700">
                            <img src="src/InfoMovie.png" href="https://github.com/Mgaynor2022/VSchool-Assignments/tree/main/level%204/capstoneProject/movieApp"
                             class="w-200 h-200 opacity-75" />
                        </a>
                        <a href="https://github.com/Mgaynor2022/VSchool-Assignments/tree/main/level%204/capstoneProject/movieApp" class="block text-xl text-center">InfoMovie App</a>
                        <p class="p-3">Developed app to allow users to extract data from RESTful API regarding movies or Tv-shows that was entered into the search function,
                            and allows users to add their favorite movies or tv-shows to a database.</p>
                            <div class="flex flex-wrap justify-between p-2 ">
                                <a href="https://github.com/Mgaynor2022/VSchool-Assignments/tree/main/level%204/capstoneProject/movieApp">
                                <button class="py-3 px-5 mt-5 text-sm text-center text-white bg-black rounded-lg  sm:w-fit hover:border-gray-300  focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">GitHub Link</button>
                                </a>
                                <a href="">
                                <button class="py-3 px-5 mt-5 text-sm text-center text-white bg-black rounded-lg  sm:w-fit hover:border-gray-300 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">App Link</button>
                                </a>
                            </div>
                    </div>
                    <div class="w-full p-2 ml-10">
                    
                         <a href="#" class="block mb-8 bg-black hover:bg-gray-700">
                            <img src="src/AdoptAPet.png" class="w-200 h-200 opacity-75" />
                        </a>
                        
                        <a href="https://github.com/Mgaynor2022/VSchool-Assignments/tree/main/level%204/capstoneProject/movieApp" class="block text-xl text-center">AdoptAPet App</a>
                        <p class="p-3">Constructed a Pet Adoption app that provides users with information regarding adopting their 
                            dream pet. users to search, filter, and save various animals that are available
                            for adoption all within a local server.  
                        </p>
                        <div class="flex flex-wrap justify-between p-2 ">
                            <a>
                            <button class="py-3 px-5 mt-5 text-sm text-center text-white bg-black rounded-lg  sm:w-fit hover:border-gray-300  focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">GitHub Link</button>
                            </a>
                            <button class="py-3 px-5 mt-5 text-sm text-center text-white bg-black rounded-lg  sm:w-fit hover:border-gray-300 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">App Link</button>
                        </div>
                    </div>		
                </div>
            </div>
    
    )
}