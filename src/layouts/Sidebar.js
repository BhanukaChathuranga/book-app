import { GiBookStorm, GiBookshelf } from 'react-icons/gi';
import { IoLocationSharp } from 'react-icons/io5';
import { BsPlusLg } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-white dark:bg-gray-900 shadow-lg">
      <SidebarIcon icon={<GiBookStorm size="25" />} path="/" />
      <Divider />
      <SidebarIcon icon={<GiBookshelf size="25" />} path="/" />
      <SidebarIcon icon={<IoLocationSharp size="25" />} path="store" />
      <Divider className="mt-4" />
      <SidebarIcon icon={<BsPlusLg size="25" />} path="add" />
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

const Divider = ({ className = '' }) => (
  <hr className={`sidebar-hr ${className}`} />
);

export default Sidebar;
