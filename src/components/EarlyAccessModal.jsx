import { Dialog, Transition } from "@headlessui/react"
import { Fragment } from "react"
import React from "react"
export default function EarlyAccessModal({ isOpen, setIsOpen }) {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setIsOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="smobile:w-[320px] w-[480px] transform overflow-hidden  bg-[var(--body-background)] p-[32px] smobile:p-[24px] text-left align-middle shadow-xl transition-all">
                  <button
                    className="border-none absolute top-[21px] right-[21px]"
                    onClick={() => setIsOpen(false)}
                  >
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
                        fill="var(--body-text)"
                      />
                    </svg>
                  </button>
                  <div className="mb-[17px]">
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_14782_55772)">
                        <path
                          d="M24 46.5C36.4264 46.5 46.5 36.4264 46.5 24C46.5 11.5736 36.4264 1.5 24 1.5C11.5736 1.5 1.5 11.5736 1.5 24C1.5 36.4264 11.5736 46.5 24 46.5Z"
                          stroke="var(--body-text)"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M24 12.0508V23.9988H16"
                          stroke="var(--body-text)"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M1.5 24H6.392"
                          stroke="var(--body-text)"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M3.214 15.3828L7.734 17.2568"
                          stroke="var(--body-text)"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M8.098 8.08203L11.554 11.542"
                          stroke="var(--body-text)"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M15.404 3.20703L17.272 7.72703"
                          stroke="var(--body-text)"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M24.022 1.5L24.016 6.392"
                          stroke="var(--body-text)"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_14782_55772">
                          <rect width="48" height="48" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <Dialog.Title as="h2">Request Early Access</Dialog.Title>
                  <div className="mt-2 mb-[16px]">
                    <p className="text-base">
                      We plan to provide early access to this feature for
                      limited number of users. In case you interested - please
                      sign up. We would not use this email address for any other
                      purpose.
                    </p>
                  </div>
                  <input
                    type="text"
                    placeholder="Company name"
                    onChange={e => {
                      let val = e.target.value
                      console.log(val)
                    }}
                    className="mb-[16px] border border-jumpto-border-color flex items-center p-[12px]   w-full "
                  />
                  <input
                    type="email"
                    placeholder="Your email"
                    onChange={e => {
                      let val = e.target.value
                      console.log(val)
                    }}
                    className=" border border-jumpto-border-color flex items-center p-[12px]  w-full "
                  />
                  <div className="mt-4 flex justify-between">
                    <button
                      style={{ fontFamily: "Space Grotesk", fontWeight: 600 }}
                      className=" inline-flex justify-center h-[48px] rounded-[24px] border-body-text px-[32px] py-[12px] font-[Space Grotesk] font-lm border"
                      onClick={() => setIsOpen(false)}
                    >
                      Cancel
                    </button>
                    <button
                      style={{ fontFamily: "Space Grotesk", fontWeight: 600 }}
                      className="text-body-text-invert bg-primary  inline-flex justify-center h-[48px] rounded-[24px] px-[32px] py-[12px] font-[Space Grotesk] font-lm "
                      onClick={() => setIsOpen(false)}
                    >
                      Submit
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
