import React from 'react';

function SideBar() {
  return (
    <div className='w-[20%] h-[92vh] bg-[#00616e] px-2 fixed text-white'>
      <div className='content text-left pt-10 '>
        <ul className='space-y-5'>
          <li className='bg-yellow-600 py-2 px-4 rounded-lg cursor-pointer'>
            My Todos
          </li>
          <li className='bg-yellow-600 py-2 px-4 rounded-lg cursor-pointer'>
            My History
          </li>
          <li className='bg-yellow-600 py-2 px-4 rounded-lg cursor-pointer'>
            My Account
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
