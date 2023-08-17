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
}

const FormStepper = (props: Props) => {
  const {
    stepperCount,
    submitForm,
    setStepperCount,
    jobFormValue,
    setJobFormValue,
  } = props;
  return (
    <>
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
