import React from "react";
import FirstStep from "./FirstStep";
import SecondStep from "./SecondStep";
import { Job } from "../../types/job";

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
      <div className="flex justify-between mb-6">
        <span className="text-gray-700  text-2xl">Create a job</span>{" "}
        <span className="text-gray-700 font-bold">Step {stepperCount}</span>
      </div>
      {stepperCount === 1 ? (
        <FirstStep
          setStepperCount={setStepperCount}
          formValue={jobFormValue}
          setFormValue={setJobFormValue}
          closeModal={closeModal}
        />
      ) : (
        <SecondStep
          submitForm={submitForm}
          setStepperCount={setStepperCount}
          formValue={jobFormValue}
          setFormValue={setJobFormValue}
          closeModal={closeModal}
        />
      )}
    </>
  );
};

export default FormStepper;
