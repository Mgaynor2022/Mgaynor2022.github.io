import React from 'react'

export default function Header(){

    return(
        <div>
            <header class="mx-auto max-w-xl py-20 text-center">
			<a href="#" class="block text-2xl mb-12">Michael Gaynor's Portfolio</a>

			<ul class="flex justify-center uppercase text-xs">
				<li>
					<a href="/Home" class="mx-4 hover:text-gray-600">Home</a>
				</li>
				<li>
					<a href="/Project" class="mx-4 hover:text-gray-600">Projects</a>
				</li>
				<li>
					<a href="#" class="mx-4 hover:text-gray-600">Resume</a>
				</li>
				<li>
					<a href="#" class="mx-4 hover:text-gray-600">Contact</a>
				</li>
			</ul>
		</header>
        </div>
    )
}