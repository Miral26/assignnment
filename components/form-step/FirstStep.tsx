import { useState } from "react";
import { Job } from "../../types/job";
import Button from "../button";

interface Props {
  setStepperCount: (x: number) => void;
  formValue: Job;
  setFormValue: (u: Job) => void;
}
const FirstStep = (props: Props) => {
  const { setStepperCount, formValue, setFormValue } = props;
  const [error, setError] = useState<boolean>(false);

  const handleStepChange = () => {
    if (!formValue.jobTitle || !formValue.companyName || !formValue.industry) {
      setError(true);
      return;
    }

    setStepperCount(2);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (formValue.jobTitle || formValue.companyName || formValue.industry) {
      setError(false);
    }
    const { name, value } = e.target;

    setFormValue({ ...formValue, [name]: value });
  };
  return (
    <>
      {error && (
        <div>
          <span className="text-red-500 text-lg">* </span>
          <span className="text-red-500">Please fill all required fields</span>
        </div>
      )}
      <div className="mb-6">
        <label
          htmlFor="jobTitle"
          className="block text-gray-700 font-bold mb-1"
        >
          Job title <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          value={formValue.jobTitle}
          name="jobTitle"
          onChange={(e) => handleChange(e)}
          required
          placeholder="ex. UX UI Designer"
          className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="companyName"
          className="block text-gray-700 font-bold mb-1"
        >
          Company name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          value={formValue.companyName}
          name="companyName"
          onChange={(e) => handleChange(e)}
          required
          placeholder="eg. Google"
          className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-6">
        <label
          htmlFor="industry"
          className="block text-gray-700 font-bold mb-1"
        >
          Industry <span className="text-red-500">*</span>
        </label>
        <input
          value={formValue.industry}
          name="industry"
          onChange={(e) => handleChange(e)}
          required
          placeholder="ex. Information Technology"
          className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="flex items-cent gap-6">
        <div>
          <label
            htmlFor="location"
            className="block text-gray-700 font-bold mb-1"
          >
            Location
          </label>
          <input
            value={formValue.location}
            name="location"
            onChange={(e) => handleChange(e)}
            placeholder="ex. Chennai"
            className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div>
          <label
            htmlFor="remoteType"
            className="block text-gray-700 font-bold mb-1"
          >
            Remote type
          </label>
          <input
            id="message"
            value={formValue.remoteType}
            name="remoteType"
            onChange={(e) => handleChange(e)}
            placeholder="ex. In-office"
            className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
      </div>
      <div className="flex items-center justify-end mt-[96px]">
        <Button
          onClick={handleStepChange}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          label="Next"
        />
      </div>
    </>
  );
};

export default FirstStep;
