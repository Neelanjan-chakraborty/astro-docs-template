import { useStore } from '@nanostores/preact';
import { isSidebarOpen ,currentPage} from './cartStore';
import exp from 'constants';
import Sidebar from '../MobileSidebar/Sidebar.astro';

const MobileSidebar=() => {
  const $isSidebarOpen = useStore(isSidebarOpen);
  console.log('Sidebar is now:', $isSidebarOpen ? 'open' : 'closed');
  currentPage=useStore(currentPage);

  return $isSidebarOpen ? <Sidebar currentPage={(currentPage)}/>: null;
}
export default MobileSidebar;