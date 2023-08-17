import React from "react";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import { Job } from "../../types/job";
import { CloseIconSVG } from "../../assets/svg/icon";

interface Props {
  stepperCount: number;
  submitForm: () => void;
  setStepperCount: (x: number) => void;
  jobFormValue: Job;
  setJobFormValue: (u: Job) => void;
  closeModal: () => void;
}

const FormStepper = (props: Props) => {
  const {
    stepperCount,
    submitForm,
    setStepperCount,
    jobFormValue,
    setJobFormValue,
    closeModal,
  } = props;
  return (
    <>
      <div className="justify-end flex mb-1">
        <span
          onClick={closeModal}
          className="w-8 h-8 p-1 cursor-pointer sm:mb-0 mb-4 inline-flex items-center justify-center rounded bg-red-100 text-red-500 flex-shrink-0"
        >
          <CloseIconSVG />
        </span>
      </div>

      <div className="flex justify-between mb-6">
        <span className="text-gray-700  text-2xl">Create a job</span>{" "}
        <span className="text-gray-700 font-bold">Step {stepperCount}</span>
      </div>
      {stepperCount === 1 ? (
        <FirstStep
          setStepperCount={setStepperCount}
          formValue={jobFormValue}
          setFormValue={setJobFormValue}
        />
      ) : (
        <SecondStep
          submitForm={submitForm}
          setStepperCount={setStepperCount}
          formValue={jobFormValue}
          setFormValue={setJobFormValue}
        />
      )}
    </>
  );
};

export default FormStepper;
