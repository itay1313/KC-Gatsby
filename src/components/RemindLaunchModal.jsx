import { Dialog, Transition } from "@headlessui/react"
import { Fragment } from "react"
import React from "react"
export default function RemindLaunchModal({ isOpen, setIsOpen }) {
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
                      <g clip-path="url(#clip0_14719_51968)">
                        <path
                          d="M22.5 34.5C22.5 37.6826 23.7643 40.7348 26.0147 42.9853C28.2652 45.2357 31.3174 46.5 34.5 46.5C37.6826 46.5 40.7348 45.2357 42.9853 42.9853C45.2357 40.7348 46.5 37.6826 46.5 34.5C46.5 31.3174 45.2357 28.2652 42.9853 26.0147C40.7348 23.7643 37.6826 22.5 34.5 22.5C31.3174 22.5 28.2652 23.7643 26.0147 26.0147C23.7643 28.2652 22.5 31.3174 22.5 34.5Z"
                          stroke="var(--body-text)"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M39.848 31.0117L34.038 38.7577C33.9088 38.9294 33.7442 39.0714 33.5555 39.1741C33.3668 39.2769 33.1582 39.338 32.9439 39.3533C32.7295 39.3687 32.5144 39.3379 32.3129 39.2631C32.1115 39.1883 31.9284 39.0712 31.776 38.9197L28.776 35.9197"
                          stroke="var(--body-text)"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M16.5 31.5H4.5C3.70435 31.5 2.94129 31.1839 2.37868 30.6213C1.81607 30.0587 1.5 29.2956 1.5 28.5V4.5C1.5 3.70435 1.81607 2.94129 2.37868 2.37868C2.94129 1.81607 3.70435 1.5 4.5 1.5H40.5C41.2956 1.5 42.0587 1.81607 42.6213 2.37868C43.1839 2.94129 43.5 3.70435 43.5 4.5V18"
                          stroke="var(--body-text)"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M42.822 2.60156L26.534 15.1296C25.3774 16.0193 23.9592 16.5017 22.5 16.5017C21.0408 16.5017 19.6225 16.0193 18.466 15.1296L2.17798 2.60156"
                          stroke="var(--body-text)"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_14719_51968">
                          <rect width="48" height="48" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <h2>Remind me at launch</h2>
                  <div className="mt-2 mb-[16px]">
                    <p className="text-base">
                      We can notify you when the feature will be ready. Just
                      enter your Email below and we'll send you a message when
                      it is done. We would not use this email address for any
                      other purpose.
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
