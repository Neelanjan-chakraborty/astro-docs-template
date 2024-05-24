import React from 'react';
import { useStore } from '@nanostores/preact';
import { isSidebarOpen } from '../Header/cartStore';
import {toggleSidebar} from '../Header/cartStore';

const SidebarToggle = () => {
  const isOpen = useStore(isSidebarOpen);

  // const toggleSidebar = () => {
  //   isSidebarOpen.set(!isOpen);
  //   console.log('Sidebar is now:', !isOpen ? 'open' : 'closed');
  // };

  return (
    <>
      <button className="menu-toggle-button" onClick={()=> isSidebarOpen.set(!isOpen)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-6 w-6">
          {isOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          )}
          </svg>
      </button>
    </>
  );
};

export default SidebarToggle;
