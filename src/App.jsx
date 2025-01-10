import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HomeCards from './components/HomeCards';
import JobListings from './components/JobListings';

function App() {
  return (
    <div>
      
      <Navbar/>
      <Hero title='Become a React Dev' subtitle='Find
      a job that fits your skill set'/>
      <HomeCards/>
      <JobListings/>

    <section className="m-auto max-w-lg my-10 px-6">
      <a
        href="jobs.html"
        className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >View All Jobs</a>
    </section>

    </div>
  )
};

export default App;