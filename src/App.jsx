import React, { useState } from 'react'
import {Routes, Route, Link} from "react-router-dom"
import Header from './Header'
import Home from './Home'
import Project from './Project'
import ContactUs from './ContactUs'
import Resume from './Resume'

import './App.css'

function App() {

  return (
    <div>
      <div>
            <header class="mx-auto max-w-xl py-20 text-center">
			<a href="#" class="block text-2xl mb-12">Michael Gaynor's Portfolio</a>

			<ul class="flex justify-center uppercase text-xs">
				<li>
					<Link to="/Home" class="mx-4 hover:text-gray-600">Home</Link>
				</li>
				<li>
					<Link to="/Project" class="mx-4 hover:text-gray-600">Projects</Link>
				</li>
				<li>
					<Link to="/Resume" class="mx-4 hover:text-gray-600">Resume</Link>
				</li>
				<li>
					<Link to="/ContactUs" class="mx-4 hover:text-gray-600">Contact</Link>
				</li>
			</ul>
		</header>
  </div>


    <div>
      <Routes>
        <Route index element ={<Home/>}/>
        <Route path="/Home" element={<Home/>}/>
        <Route path="/Project" element={<Project/>}/>
        <Route path="/Resume" element={<Resume/>}/>
        <Route path="/ContactUs" element={<ContactUs/>}/>
      </Routes>
    </div>
  </div>
  )
}

export default App


