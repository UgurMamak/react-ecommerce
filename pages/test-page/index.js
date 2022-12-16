import React from 'react';
import Image from 'next/legacy/image';


export default function index() {
  return (
    <div>
      {/* <div className='ugurmamak'>
        {process.env.DB_USER}
      </div> */}
      <div>
        <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt="test1" ></img>
        <Image src="https://swiperjs.com/demos/images/nature-2.jpg" width="100" height="100" alt="test2" />
        <div className='wrapper' style={{ "position": "relative", "height": "1024px", "width": "1024px" }}>
          <Image className="ugur" src="https://swiperjs.com/demos/images/nature-3.jpg" layout="fill" alt="test3" />
        </div>
      </div>
    </div>
  )
}
