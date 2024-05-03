
import React, { useEffect, useRef } from 'react';

function Palette(props) {
  const containerRef = useRef(null);
  const iconRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const icon = iconRef.current;
    
    if (container) {
      container.style.borderColor = props.code;
    }
    if(icon){
      icon.style.backgroundColor = props.code;
    }
  }, [props.code]);

  return (
    <div
      ref={containerRef}
      className={`flex bg-white w-64 h-20 rounded-sm border-l-[4px] border-black`}
    >
      <span className={`flex flex-col pl-2 justify-center`}>
        <label className='text-green-800 text-sm font-semibold'>{props.title}</label>
        <label className='font-bold text-gray-700'>{props.numerator}/{props.denominator}</label>
        <label className="text-xs font-semibold text-gray-600">Today/Period</label>
      </span>
      <span ref ={iconRef} id="hello" className={`m-auto rounded-full p-[14px] ml-auto mr-[30px] `}><i>{props.icon}</i></span>
    </div>
  );
}

export default Palette;

