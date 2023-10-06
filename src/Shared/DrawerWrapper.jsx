import React, { Fragment, useState } from 'react'

//import { Dialog, Transition } from "@headlessui/react"
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'

const DrawerWrapper = ({
  title,
  open = false,
  setOpen,
  footer,
  children,
  modalFooter,
  width = 'max-w-2xl',
  titleButton,
  onClose,
}) => {
  return (
    <Transition.Root appear show={open} as={Fragment} data-backdrop="static">
      <Dialog as="div" className="relative z-10" onClose={() => false}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className={`pointer-events-auto relative w-screen ${width}`}>
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                      <button
                        type="button"
                        className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                        onClick={() => setOpen(false)}
                      >
                        <span className="sr-only">Close panel</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="border-2 py-4 bg-slate-200">
                      <Dialog.Title className="text-base font-semibold leading-6 text-gray-900 ">
                        {title && <div className="mx-3 font-bold">{title}</div>}
                      </Dialog.Title>
                    </div>

                    {children && (
                      <>
                        <div className="relative mt-6 flex-1 px-4 sm:px-6">{children}</div>
                        <div className="   bg-slate-200 w-full py-3">
                          <div className="flex justify-end px-4">{footer}</div>
                        </div>
                      </>
                    )}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default DrawerWrapper
