import Link from "next/link";
import { Home, LayoutDashboard, Settings, User } from "lucide-react";



const Sidebar = () => {
  return (
    <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
      <div className="p-4">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
          Dashboard
        </h1>
      </div>
      <nav className="mt-4">
        <Link
          className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
          href="#"
        >
          <Home className="mr-3 h-5 w-5" />
          Home
        </Link>
        <Link
          className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
          href="#"
        >
          <LayoutDashboard className="mr-3 h-5 w-5" />
          Dashboard
        </Link>
        <Link
          className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
          href="#"
        >
          <User className="mr-3 h-5 w-5" />
          Profile
        </Link>
        <Link
          className="flex items-center px-4 py-2 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
          href="#"
        >
          <Settings className="mr-3 h-5 w-5" />
          Settings
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
