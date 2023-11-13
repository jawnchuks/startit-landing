import React from "react";
import Modal from "../Modal/Modal";
import { useModal } from "@/lib/context/modal-context";
import { toast } from "react-hot-toast";

const WaitlistForm: React.FC = () => {
    const [selectedOption, setSelectedOption] = React.useState("");

  const { hideModal } = useModal();
  const onSubmit = (e: any) => {
    // set timer to 3 secs before showing a toast message
    e.preventDefault();
    setTimeout(() => {
      toast("Thank you for your interest!");
      hideModal();
    }, 2000);
  };
  return (
    <Modal onClose={hideModal} isOpen={true}>
      <section className="w-full ">
        <div className="py-16 md:py-24 lg:py-32">
          <div className="mx-auto max-w-xl bg-[#f2f2f7] px-5 py-12 text-center md:px-10 relative">
            <button onClick={hideModal} className="absolute top-5 right-5">
              <svg
                className="w-10 h-10"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth=""></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    opacity="0.4"
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    fill="black"
                  ></path>{" "}
                  <path
                    d="M13.0594 12.0001L15.3594 9.70011C15.6494 9.41011 15.6494 8.93011 15.3594 8.64011C15.0694 8.35011 14.5894 8.35011 14.2994 8.64011L11.9994 10.9401L9.69937 8.64011C9.40937 8.35011 8.92937 8.35011 8.63938 8.64011C8.34938 8.93011 8.34938 9.41011 8.63938 9.70011L10.9394 12.0001L8.63938 14.3001C8.34938 14.5901 8.34938 15.0701 8.63938 15.3601C8.78938 15.5101 8.97937 15.5801 9.16937 15.5801C9.35937 15.5801 9.54937 15.5101 9.69937 15.3601L11.9994 13.0601L14.2994 15.3601C14.4494 15.5101 14.6394 15.5801 14.8294 15.5801C15.0194 15.5801 15.2094 15.5101 15.3594 15.3601C15.6494 15.0701 15.6494 14.5901 15.3594 14.3001L13.0594 12.0001Z"
                    fill="black"
                  ></path>{" "}
                </g>
              </svg>
            </button>
            {/* Title */}
            <h2 className="text-3xl font-bold md:text-5xl">
              Join the Waitlist
            </h2>
            <p className="mx-auto mb-5 mt-4 max-w-xl text-[#647084] md:mb-8">
              Be among the first to embark on a journey of limitless opportunities, whether you&apos;re
              eager to invest, collaborate on projects, or initiate
              groundbreaking ventures.
            </p>

            {/* Form */}
            <form
              className="mx-auto mb-4 max-w-sm pb-4"
              name="wf-form-password"
              //   method="get"
              onSubmit={onSubmit}
            >
              <div className="relative">
                <input
                  type="text"
                  className="mb-4 block h-9 w-full border border-gray-400 rounded-full bg-primaryWhite px-3 py-6 text-sm text-gray-100 focus:ring-0"
                  maxLength={256}
                  name="name"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="relative">
                <input
                  type="email"
                  className="mb-4 block h-9 w-full border border-gray-400 rounded-full bg-primaryWhite px-3 py-6 text-sm text-gray-100 focus:ring-0"
                  placeholder="Email Address"
                  required
                />
              </div>
              <div className="relative">
                <input
                  type="text"
                  className="mb-4 block h-9 w-full border border-gray-400 rounded-full bg-primaryWhite px-3 py-6 text-sm text-gray-100 focus:ring-0"
                  placeholder="Location"
                  required
                />
              </div>
              <div className="relative">
                <input
                  type="tel"
                  className="mb-4 block h-9 w-full border border-gray-400 rounded-full bg-primaryWhite px-3 py-6 text-sm text-gray-100 focus:ring-0"
                  placeholder="Phone Number"
                  required
                />
              </div>
              <div className="relative mb-4 pb-2">
                <select
                  className="mb-4 block h-9 w-full border border-gray-400 rounded-full bg-primaryWhite px-3 py-6 text-sm text-gray-100 focus:ring-0"
                  required
                  value={selectedOption}
                  onChange={(e) => setSelectedOption(e.target.value)}
                >
                  <option value="" disabled>
                    Choose One
                  </option>
                  <option value="I want to invest">I want to invest</option>
                  <option value="I want to partner on a project">
                    I want to partner on a project
                  </option>
                  <option value="I want to initiate a project">I want to initiate a project</option>
                </select>
                <div className="absolute top-3 left-4 text-gray-400 text-sm pointer-events-none">
                  {selectedOption ? selectedOption : "Select an option"}
                </div>
              </div>
              <button
                type="submit"
                className="flex max-w-full grid-cols-2 flex-row items-center justify-center bg-primaryGreen text-secondaryDarkGreen w-fit rounded-full transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] px-8 py-4 text-center font-semibold"
              >
                <p className="mr-6 font-bold">Join Waitlist</p>
                <div className="h-4 w-4 flex-none">
                  <svg
                    fill="currentColor"
                    viewBox="0 0 20 21"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Arrow Right</title>
                    <polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9"></polygon>
                  </svg>
                </div>
              </button>
            </form>
          </div>
        </div>
      </section>
    </Modal>
  );
};

export default WaitlistForm;
