'use client'
import React, {useState} from "react";
import Modal from "../Modal/Modal";
import { useModal } from "@/lib/context/modal-context";
import { toast } from "react-hot-toast";

const WaitlistForm: React.FC = () => {
  const [loading, setLoading] = useState(false)
 const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    phoneNumber: "",
    selectedOption: "",
  });

  const { hideModal } = useModal();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true)
    const response = await fetch('/api/email', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(formData),
    })
    if (response.status === 200) {
      setFormData({
        name: "",
        email: "",
        address: "",
        phoneNumber: "",
        selectedOption: "",
      });
      setLoading(false)
      hideModal()
      toast.success(`Nice one ${formData.name}, your email has been received`)
    }

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
                  className="mb-4 block h-9 w-full border border-gray-400 rounded-full bg-primaryWhite px-3 py-6 text-sm text-gray-100 focus:ring-0"
                  type="text"
                  maxLength={256}
                  placeholder="Name"
                  required
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="relative">
                <input
                  className="mb-4 block h-9 w-full border border-gray-400 rounded-full bg-primaryWhite px-3 py-6 text-sm text-gray-100 focus:ring-0"
                  type="email"
                  placeholder="Email Address"
                  required
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="relative">
                <input
                  className="mb-4 block h-9 w-full border border-gray-400 rounded-full bg-primaryWhite px-3 py-6 text-sm text-gray-100 focus:ring-0"
                  type="text"
                  placeholder="Address"
                  required
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                />
              </div>
              <div className="relative">
                <input
                  type="tel"
                  className="mb-4 block h-9 w-full border border-gray-400 rounded-full bg-primaryWhite px-3 py-6 text-sm text-gray-100 focus:ring-0"
                  placeholder="Phone Number"
                  required
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                />
              </div>
              <div className="relative mb-4 pb-2">
                <select
                  className="mb-4 block h-9 w-full border border-gray-400 rounded-full bg-primaryWhite px-3 py-6 text-sm text-gray-100 focus:ring-0"
                  required
                  name="selectedOption"
                  value={formData.selectedOption}
                  onChange={handleInputChange}
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
                <div className="absolute top-3 left-4 text-gray-100 text-sm pointer-events-none">
                  {formData.selectedOption ? formData.selectedOption : "Select an option"}
                </div>
              </div>
              <button
                type="submit"
                className="flex max-w-full grid-cols-2 flex-row items-center justify-center bg-primaryGreen text-secondaryDarkGreen w-fit rounded-full transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] px-8 py-4 text-center font-semibold"
              >
                <p className="mr-6 font-bold">{loading ? "Please wait" : "Join Waitlist"}</p>
                <span className="h-4 w-4 flex-none">{loading ? <>
                 <svg aria-hidden="true" className="w-4 h-4 text-primaryGreen animate-spin  fill-primaryWhite" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                </svg>
    </> : <>
    <svg
                    fill="currentColor"
                    viewBox="0 0 20 21"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Arrow Right</title>
                    <polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9"></polygon>
                  </svg></>}</span>
              </button>
            </form>
          </div>
        </div>
      </section>
    </Modal>
  );
};

export default WaitlistForm;
