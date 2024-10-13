import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

export default function NotificationModal({ setIsModalOpen, isModalOpen, }) {


    function closeModal() {
        setIsModalOpen(false)
    }



    return (
        <>
            <Transition appear show={isModalOpen} as={Fragment} className="relative z-30 bg-[#000000] sm:bg-[#101a24]">
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center ">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white  text-left align-middle p-2 shadow-xl transition-all bg-[#101a24] border border-skyblue-600">

                                    <div className=" w-full  mb-2 rounded-lg shadow p-3 " >
                                        <div className='text-center'>
                                            <span className='text-sky-blue text-bold underline block text-center'> Note:</span>    All projects in this portfolio were created as personal learning initiatives before gaining professional experience. After completing my internship, I accumulated over a year of industry experience, which has further enhanced my skills beyond what is shown here
                                        </div>

                                        <div className="mt-4 flex justify-center">
                                            <button
                                                type="button"
                                                className="text-white bg-blue-400 hover:bg-blue-600 focus:outline-none focus:ring-blue-300 font-medium rounded-[6px] text-sm px-5 py-2 text-center " onClick={closeModal}
                                            >
                                                Close
                                            </button>

                                        </div>

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
