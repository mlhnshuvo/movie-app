import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { movieAction } from "../store/actions/movieAction";

const navigation = [
  { name: "Popular", to: "popular" },
  { name: "Top Rated", to: "top_rated" },
  { name: "Upcoming", to: "upcoming" },
];

export default function Example({ changeHandler, value }) {
  const dispatch = useDispatch();

  return (
    <Disclosure as="nav" className="bg-gray-600">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <Link to="/">
                  <div
                    className="flex-shrink-0 flex items-center cursor-pointer"
                    onClick={() => changeHandler("popular")}
                  >
                    <img
                      className="block lg:hidden h-8 w-auto"
                      src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                      alt="Workflow"
                    />
                    <img
                      className="hidden lg:block h-8 w-auto"
                      src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                      alt="Workflow"
                    />
                  </div>
                </Link>
                <div className="hidden sm:block sm:ml-6">
                  <Link className="flex space-x-4" to="/">
                    {navigation.map((item) => (
                      <p
                        key={item.name}
                        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        onClick={() => changeHandler(item.to)}
                      >
                        {item.name}
                      </p>
                    ))}
                  </Link>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <input
                  type="text"
                  placeholder="Movie Name"
                  className="bg-gray-100 outline-double px-2 rounded"
                  onChange={(e) =>
                    dispatch(movieAction(value, 1, e.target.value))
                  }
                />
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <div onClick={() => changeHandler(item.to)}>
                  <Disclosure.Button
                    key={item.name}
                    className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium cursor-pointer"
                  >
                    {item.name}
                  </Disclosure.Button>
                </div>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
