import React, { useState } from 'react';

function BottomNav() {
    const [state, setState] = useState(false); // Corrected state declaration

    const data = ["Products", "Links", "Products", "Products", "Products", "Products", "Products", "Products", "Products", "Products", "Products", "Products", "Products"];

    return (
        < >
            <div><button className='z-50  p-1 px-3 w-fit h-fit  bg-red-600 absolute rounded-md font-normal text-white  top-2 right-9 shadow-base shadow-black' onClick={() => setState((prev)=>!prev)}>\/</button></div>

            {/* Ternary expression to conditionally apply classes */}
            <div className={state ? 'flex gap-3 w-full justify-center items-center overflow-hidden h-screen fixed hidden duration-200 left-[-100px]' : 'left-[100px]'}>
              <input type="text" className='absolute z-50 p-3 text-3xl rounded-sm left-[30px] top-[200px] bg-zinc-600 border-none focus:outline placeholder:text-zinc-500 outline-blue-600 b  ' placeholder='Search shop... '  />
                <div className='w-full h-screen mt-5 bg-black'>
                    <iframe
                        className='w-full h-full border-[1px] p- '
                        src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
                        style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.4)' }}
                    ></iframe>
                </div>
            </div>
        </>
    );
}

export default BottomNav;
