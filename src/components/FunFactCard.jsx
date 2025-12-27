import React from 'react';

export default function FunFactCard({ years, symbol, text }) {
  return (
    <div className="lg:border-[#c5c5c5] lg:border-l-[1px] pl-8">
      <h1 className="text-8xl font-bold">
        {years}
        <span>{symbol}</span>
      </h1>
      <p className="text-lg mt-6">{text}</p>
    </div>
  );
}
