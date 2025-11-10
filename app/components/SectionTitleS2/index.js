import React from 'react';

const SectionTitleS2 = (props) => {
  return (
    <div className="wpo-section-title-s2">
      <div className="flex items-center justify-center gap-3">
        <div className="w-12 md:w-16 border-t-2 border-red-600"></div>
        <h2>{props.MainTitle}</h2>
        <div className="w-12 md:w-16 border-t-2 border-red-600"></div>
      </div>
      <p>{props.SubTitle}</p>

      {/* <div className="flex items-center gap-3 mt-1">
        <div className="w-12 md:w-16 border-t-2 border-red-600"></div>
        <h1 className="text-xl md:text-2xl font-bold tracking-widest text-red-600">
          HOMES
        </h1>
        <div className="w-12 md:w-16 border-t-2 border-red-600"></div>
      </div> */}
    </div>
  );
};

export default SectionTitleS2;
