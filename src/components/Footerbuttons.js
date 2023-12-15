import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Footerbuttons() {
    const storedDarkMode = localStorage.getItem('darkMode');
    const [darkMode, setDarkMode] = useState(storedDarkMode === 'true' ? true : false);

    useEffect(() => {
      localStorage.setItem('darkMode', darkMode);
    }, [darkMode]);

    const navigate = useNavigate();

    const handleButtonClick = () => {
      console.log("Button clicked!");
      navigate("/");
    };
  return (
    <div className="flex items-center justify-between w-[1130px] h-[105px] overflow-hidden mb-8">

    <div className="flex flex-col items-start justify-start w-[200px] h-[105px] overflow-hidden">
    <button
            className="cursor-pointer p-0 bg-teal rounded-[5px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[127px] h-[52px] overflow-hidden border-[1px] border-solid border-teal-400 flex items-center justify-center"
            autoFocus={true}
            id="filterbut"
        >
            <div className="text-xl font-inter text-white">
                Delete
            </div>
        </button>

    </div>

    {/* Container for Buttons */}
    <div className="flex gap-4 items-end">
        {/* Button 1 */}
        <button
            className="cursor-pointer p-0 bg-teal rounded-[5px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[127px] h-[52px] overflow-hidden border-[1px] border-solid border-teal-400 flex items-center justify-center"
            autoFocus={true}
            onClick={handleButtonClick}
            id="filterbut"
        >
            <div className="text-xl font-inter text-white">
                Cancel
            </div>
        </button>


        <button
            className="cursor-pointer p-0 bg-teal rounded-[5px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] box-border w-[127px] h-[52px] overflow-hidden border-[1px] border-solid border-teal-400 flex items-center justify-center"
            autoFocus={true}
            id="filterbut"
        >
            <div className="text-xl font-inter text-white">
                Save
            </div>
        </button>
    </div>
</div>

  )
}

export default Footerbuttons
