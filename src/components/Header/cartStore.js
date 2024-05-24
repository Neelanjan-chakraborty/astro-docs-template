// cartStore.js
import exp from 'constants';
import { atom } from 'nanostores';

export const isSidebarOpen = atom(false);
export const currentPage = atom('');

export function setCurrentPage(page) {
    currentPage.set(page);
  }

export function toggleSidebar() {
    // console.log('toggleSidebar');
    isSidebarOpen.set((prev) => !prev);
    console.log('isSidebarOpen', isSidebarOpen.get());
  }