import { NavLink, useLocation } from "react-router-dom";
import { useOnClickOutside } from "@hooks/useOnClickOutside";
import { useEscapeKey } from "@hooks/useEscapeKey";
import { navMenuData } from "@constants/navMenus";

interface Props {
  sidebarOpen: boolean;
  setSidebarOpen: (value: boolean) => void;
}

const Sidebar: React.FC<Props> = ({ sidebarOpen, setSidebarOpen }) => {
  const location = useLocation();
  const { pathname } = location;
  // Close sidebar by pressing escape key
  useEscapeKey({ open: sidebarOpen, setOpen: setSidebarOpen });
  // Close sidebar by clicking outside of the sidebar menu
  const { trigger, component: sidebar } = useOnClickOutside({
    open: sidebarOpen,
    setOpen: setSidebarOpen,
  });

  return (
    <aside
      ref={sidebar}
      className={`font-mont text-white absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5">
        <NavLink to="/dashboard">
          <h3 className="text-xl font-bold">Budget App</h3>
        </NavLink>
      </div>

      <div className="flex flex-col overflow-y-auto duration-300 ease-linear no-scrollbar">
        <nav className="px-4 py-4 mt-5 lg:mt-9 lg:px-6">
          <div>
            <h3 className="mb-4 ml-4 text-sm font-semibold text-bodydark2">
              MENU
            </h3>

            {navMenuData.map((menu, index) => (
              <div key={index} className="mb-4 flex flex-col gap-1.5">
                <NavLink
                  to={`/${menu.path}`}
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes(`/${menu.path}`) &&
                    "bg-graydark dark:bg-meta-4"
                  }`}
                >
                  <menu.icon />
                  {menu.title}
                </NavLink>
              </div>
            ))}
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
