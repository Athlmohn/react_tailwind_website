import React from "react";
import menudata from "../../MenuData/Data";

function Menu() {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-4 grid md:grid-cols-3 gap-6">
      {
        menudata.map((item,index)=>(
          <div key={index} className="rounded-xl relative overflow-hidden">
        {/* overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
          <p className="font-bold px-2 text-2xl pt-4">{item.para1}</p>
          <p className="px-2">{item.para2}</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4">Order Now</button>
        </div>
        <img className="max-h-[160px] md:maz-h-[200px] w-full object-cover rounded-xl"
          src={item.img}
          alt="/"
        />
      </div>
        ))
      }
    </div>
  );
}

export default Menu;
