import { Fragment } from "react";
import { Transition } from "@headlessui/react";
import { CancelIcon } from "@assets/icons/CancelIcon";
import { useModalContext } from "@contexts/ModalContext";
import { TransactionForm } from "@components/common/Form/TransactionForm";

export const TransactionModal: React.FC = () => {
  const { openModal, setOpenModal } = useModalContext();

  return (
    <>
      {/* Dark Overlay */}
      <div
        className={`fixed inset-0 bg-black opacity-50 z-9999 ${
          openModal ? "" : "hidden"
        }`}
      ></div>

      {/* Modal Content */}
      <Transition
        show={openModal}
        enter="transform transition-transform duration-300 ease-in-out"
        enterFrom="scale-0"
        enterTo="scale-100"
        leave="transform transition-transform duration-300 ease-in-out"
        leaveFrom="scale-100"
        leaveTo="scale-0"
        as={Fragment}
      >
        <div className="fixed inset-0 overflow-y-auto z-999999 font-mont">
          <div className="flex items-center justify-center min-h-screen p-6">
            <div className="relative overflow-hidden bg-white rounded-lg shadow-xl min-w-96">
              <div className="flex items-center justify-between px-4 py-3">
                <h2 className="text-lg font-semibold">New transaction</h2>
                <CancelIcon setOpen={setOpenModal} />
              </div>
              <div className="p-4">
                <p className="text-sm">
                  Record your income or expenses with ease &#8208; add a new
                  transaction now!
                </p>

                <div className="mt-5">
                  <TransactionForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </>
  );
};
