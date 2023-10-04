import React from 'react';

function Header() {
  return (
    <header className='flex justify-between items-center px-10 py-4 bg-[#00616e] text-white h-[8vh] fixed w-full z-50'>
      <div className='logo text-lg font-bold'>MyTodo</div>
      <nav>
        <ul>
          <li>Home</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
