import { GiBookStorm, GiBookshelf } from 'react-icons/gi';
import { IoLocationSharp } from 'react-icons/io5';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-white dark:bg-gray-900 shadow-lg">
      <SidebarIcon icon={<GiBookStorm size="25" />} path="/" />
      <SidebarIcon icon={<GiBookshelf size="25" />} path="/" />
      <SidebarIcon icon={<IoLocationSharp size="25" />} path="store" />
    </div>
  );
}

function SidebarIcon({ icon, path }) {
  return (
    <Link to={path}>
      <div className="sidebar-icon">{icon}</div>
    </Link>
  );
}

export default Sidebar;
