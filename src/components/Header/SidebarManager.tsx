import React from 'react';
import { useStore } from '@nanostores/preact';
import { isSidebarOpen, currentPage } from '../Header/cartStore';
import SidebarWrapper from '../MobileSidebar/Sidebar.astro';

const SidebarManager = () => {
  const $isSidebarOpen = useStore(isSidebarOpen);
  const current = useStore(currentPage);

  return (
    <div>
      {$isSidebarOpen && <SidebarWrapper isSidebarOpen={$isSidebarOpen} currentPage={current} />}
    </div>
  );
};

export default SidebarManager;
