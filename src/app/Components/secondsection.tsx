"use client"
import React from 'react'
import { useState } from 'react';

function Second () {
    const [selectedYear, setSelectedYear] = useState("");

  const handleChange = (event:any) => {
    setSelectedYear(event.target.value);
  }
  return (
    <div>
         <div className="second-section flex flex-col md:flex-row">
      <div className="section2-part1 w-auto h-auto ml-0 md:w-[582px] md:h-[132px] bg-white mt-[29px] md:ml-[61px] rounded-[10px] ">
        <div className="flex items-center ml-[45px] pt-[28px] font-semibold"> 
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="16" height="16" rx="8" fill="#3563E9" fill-opacity="0.3"/>
        <circle cx="8" cy="8" r="4" fill="#3563E9"/>
        </svg>
        <p className="ml-[10px]">Pick-Up</p>
        </div>
        <div className="flex flex-col md:flex-row justify-evenly ml-[33px]">
          <div className="part1 " >
            <p className="ml-1">Location</p>
            <select className="text-gray-400" id="year" value={selectedYear} onChange={handleChange}>
            <option value="">Select your city</option>
            <option value="2020">Karachi</option>
            <option value="2021">Lahore</option>
            <option value="2022">Rawalpindi</option>
            <option value="2023">Hyderabad</option>
            <option value="2024">Islamabad</option>
          </select>
          </div>
          <svg width="1" height="48" viewBox="0 0 1 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="0.5" y1="0.5" x2="0.5" y2="47.5" stroke="#C3D4E9" stroke-opacity="0.4" stroke-linecap="round"/>
</svg>

          <div className="part2">
            <p className="ml-1">Date</p>
            <select className="text-gray-400" id="year" value={selectedYear} onChange={handleChange}>
            <option value="">Select your date</option>
            <option value="2020">1</option>
            <option value="2021">2</option>
            <option value="2022">3</option>
            <option value="2023">4</option>

          </select>
          </div>
          <svg width="1" height="48" viewBox="0 0 1 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="0.5" y1="0.5" x2="0.5" y2="47.5" stroke="#C3D4E9" stroke-opacity="0.4" stroke-linecap="round"/>
</svg>

          <div className="part3">
            <p className="ml-1"  >Time</p>
            <select className="text-gray-400" id="year" value={selectedYear} onChange={handleChange}>
            <option value="hide">Select your time</option>
            <option value="2020">Morning</option>
            <option value="2021">Evening</option>
            <option value="2022">Afternoon</option>
            <option value="2023">Night</option>
          </select>
          </div>
        </div>
      </div>



      <div className="arrow h-[60px] w-[60px] bg-[#3563E9] rounded-[10px] mt-[67px] ml-32 md:ml-[42px] p-[16px] shadow shadow-black ">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.16124 3.83632L7.16124 17.4541" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M3.0837 7.93262L7.16148 3.83595L11.2393 7.93262" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M17.089 20.167L17.089 6.54921" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M21.167 16.0713L17.0892 20.168L13.0114 16.0713" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      </div>

      <div className="section2-part2w-auto h-auto ml-0 md:w-[582px] md:h-[132px] bg-white mt-[29px] md:ml-[61px] rounded-[10px] ">
      <div className="flex items-center ml-[45px] pt-[28px] font-semibold"> 
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="16" height="16" rx="8" fill="#3563E9" fill-opacity="0.3"/>
        <circle cx="8" cy="8" r="4" fill="#3563E9"/>
        </svg>
        <p className="ml-[10px]">Drop-Off</p>
        </div>
        <div className="flex flex-col md:flex-row justify-evenly ml-[33px]">
        <div className="part1 " >
            <p className="ml-1">Location</p>
            <select className="text-gray-400" id="year" value={selectedYear} onChange={handleChange}>
            <option value="">Select your city</option>
            <option value="2020">Karachi</option>
            <option value="2021">Lahore</option>
            <option value="2022">Rawalpindi</option>
            <option value="2023">Hyderabad</option>
            <option value="2024">Islamabad</option>
          </select>
          </div>
          <svg width="1" height="48" viewBox="0 0 1 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="0.5" y1="0.5" x2="0.5" y2="47.5" stroke="#C3D4E9" stroke-opacity="0.4" stroke-linecap="round"/>
          </svg>

          <div className="part2">
            <p className="ml-1">Date</p>
            <select className="text-gray-400" id="year" value={selectedYear} onChange={handleChange}>
            <option value="">Select your date</option>
            <option value="2020">1</option>
            <option value="2021">2</option>
            <option value="2022">3</option>
            <option value="2023">4</option>

          </select>
          </div>
          <svg width="1" height="48" viewBox="0 0 1 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <line x1="0.5" y1="0.5" x2="0.5" y2="47.5" stroke="#C3D4E9" stroke-opacity="0.4" stroke-linecap="round"/>
          </svg>

          <div className="part3">
            <p className="ml-1"  >Time</p>
            <select className="text-gray-400" id="year" value={selectedYear} onChange={handleChange}>
            <option value="hide">Select your time</option>
            <option value="2020">Morning</option>
            <option value="2021">Evening</option>
            <option value="2022">Afternoon</option>
            <option value="2023">Night</option>
          </select>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Second;