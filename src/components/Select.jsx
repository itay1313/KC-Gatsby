import React, { Fragment } from "react"
import { Menu, Transition } from "@headlessui/react"

export default function Select({ value, options, onChange, sm, firstOption }) {
  return (
    <Menu
      as="div"
      className="relative inline-block text-left text-body-text mobile:w-[100%]"
    >
      <Menu.Button
        className={`${
          sm ? "md:w-[186px] " : "lg:w-[280px] md:w-[201px] "
        }flex justify-between drop-btn
          mobile:w-[100%] h-[48px] justify-center border  bg-body-background  
          p-[12px] pr-[0px] text-lm hover:bg-opacity-30 focus:outline-none text-ellipsis focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <div className="w-full text-lm text-ellipsis">
          {value?.name ? value?.name : "All " + firstOption}
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-4 h-4 mt-[6px] mr-[7px]"
        >
          <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
        </svg>
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className={`absolute right-0  ${
            sm ? "md:w-[186px] " : "lg:w-[280px] md:w-[201px] "
          } mobile:w-[100%] mt-[-48px] py-[8px] drop-btn z-10 origin-top-right divide-y divide-gray-100 border bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus: focus:outline-none`}
        >
          <Menu.Item>
            {({ active }) => (
              <button
                className={`${
                  active || !value?.name ? "bg-[var(--dropdown-active)]" : " "
                } group flex w-full items-center  px-2 py-2 text-lm`}
                onClick={() => onChange("")}
              >
                {"All " + firstOption}
              </button>
            )}
          </Menu.Item>
          {options.map(v => (
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active || v.codename === value
                      ? "bg-[var(--dropdown-active)]"
                      : " "
                  } group flex w-full items-center  px-2 py-2 text-lm`}
                  onClick={() => onChange(v)}
                >
                  {v.name}
                </button>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
