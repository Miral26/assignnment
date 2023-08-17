import React, { useEffect } from "react";
import { useState } from "react";
import { initialState } from "../constants/job";
import { Job } from "../types/job";
import { useLoading } from "../context/LoaderContext";
import {
  createJob,
  fetchAllJob,
  getSingleJob,
  updateJob,
} from "../services/job.services";
import Button from "../components/button";
import JobList from "../components/job-list";
import Loader from "../components/loader/Loader";
import FormStepper from "../components/form-step";
import NoJobFoundPage from "../components/no-data-found/NoJobFoundPage";
import { CloseIconSVG, PlusIconSVG } from "../assets/svg/icon";

const MainView = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [stepperCount, setStepperCount] = useState<number>(1);
  const [jobFormValue, setJobFormValue] = useState<Job>(initialState);
  const [job, setJob] = useState<Job[]>([]);

  const { loading, setLoading } = useLoading();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setStepperCount(1);
    setIsModalOpen(false);
  };

  const getAllJob = async () => {
    const data = await fetchAllJob();
    setJob(data);
    setLoading(false);
  };

  const submitForm = async () => {
    closeModal();
    setLoading(true);
    jobFormValue.id
      ? await updateJob(jobFormValue.id, jobFormValue)
      : await createJob(jobFormValue);

    setIsModalOpen(false);
    setStepperCount(1);
    setJobFormValue(initialState);
    getAllJob();
    setLoading(false);
  };

  const onEditJob = async (id: string) => {
    const singleJobData = await getSingleJob(id);
    singleJobData && setJobFormValue(singleJobData.data);
    openModal();
  };

  useEffect(() => {
    // Fetching all the Jobs
    getAllJob();
  }, []);

  return (
    <div className="bg-[#ebebeb] min-h-[100vh]">
      <div className=" mr-16 px-6 flex justify-end">
        <button
          onClick={openModal}
          className="mt-8 bg-[#1597e4] text-white font-bold  py-2 px-4 rounded ml-4 flex w-[400px] items-center"
        >
          <PlusIconSVG />
          Create Job
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-[577px] h-[564] bg-white p-8 rounded shadow-md "
          >
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
              <span className="text-gray-700 font-bold">
                Step {stepperCount}
              </span>
            </div>
            <FormStepper
              stepperCount={stepperCount}
              setStepperCount={setStepperCount}
              submitForm={submitForm}
              jobFormValue={jobFormValue}
              setJobFormValue={setJobFormValue}
            />
          </div>
        </div>
      )}

      {loading ? (
        <Loader />
      ) : (
        <>
          {job.length > 0 && (
            <JobList job={job} getAllJob={getAllJob} onEditJob={onEditJob} />
          )}
          {!job.length && !loading && <NoJobFoundPage />}
        </>
      )}
    </div>
  );
};

export default MainView;
