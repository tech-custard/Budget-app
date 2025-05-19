import { Link } from "react-router-dom";
// import { DarkModeSwitcher } from "@components/ui/Button/DarkModeSwitcher";
import { DropdownNotification } from "@components/common/DropDown/DropdownNotification";
import { DropdownUser } from "@components/common/DropDown/DropdownUser";
import { Input } from "@components/ui/Input";
import { SearchIcon } from "@assets/icons/SearchIcon";

interface Props {
  sidebarOpen: boolean;
  setSidebarOpen: (value: boolean) => void;
}

const DashboardHeader: React.FC<Props> = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <header className="sticky top-0 flex w-full bg-white font-mont drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none z-9999">
      <div className="flex items-center justify-between flex-grow px-4 py-4 shadow-2 md:px-6 2xl:px-11">
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          <button
            aria-controls="sidebar"
            onClick={(e) => {
              e.stopPropagation();
              setSidebarOpen(!sidebarOpen);
            }}
            className="z-99999 block rounded-sm border border-stroke bg-white p-1.5 shadow-sm dark:border-strokedark dark:bg-boxdark lg:hidden"
          >
            <span className="relative block h-5.5 w-5.5 cursor-pointer">
              <span className="absolute right-0 w-full h-full du-block">
                <span
                  className={`relative top-0 left-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-[0] duration-200 ease-in-out dark:bg-white ${
                    !sidebarOpen && "!w-full delay-300"
                  }`}
                ></span>
                <span
                  className={`relative top-0 left-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white ${
                    !sidebarOpen && "delay-400 !w-full"
                  }`}
                ></span>
                <span
                  className={`relative top-0 left-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white ${
                    !sidebarOpen && "!w-full delay-500"
                  }`}
                ></span>
              </span>
              <span className="absolute right-0 w-full h-full rotate-45">
                <span
                  className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-white ${
                    !sidebarOpen && "!h-0 !delay-[0]"
                  }`}
                ></span>
                <span
                  className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out dark:bg-white ${
                    !sidebarOpen && "!h-0 !delay-200"
                  }`}
                ></span>
              </span>
            </span>
          </button>

          <Link className="flex-shrink-0 block lg:hidden" to="/">
            <h3 className="text-xl font-bold">Budget App</h3>
          </Link>
        </div>

        <div className="hidden sm:block">
          <div className="relative">
            <button className="absolute left-0 -translate-y-1/2 top-1/2">
              <SearchIcon className="fill-body hover:fill-primary dark:fill-bodydark dark:hover:fill-primary" />
            </button>

            <Input
              type="text"
              placeholder="Type to search..."
              className="w-full pr-4 bg-transparent pl-9 focus:outline-none"
            />
          </div>
        </div>

        <div className="flex items-center gap-3 2xsm:gap-7">
          <ul className="flex items-center gap-2 2xsm:gap-4">
            {/* <DarkModeSwitcher /> */}
            <DropdownNotification />
          </ul>

          <DropdownUser />
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
