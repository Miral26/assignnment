import React, { useEffect } from "react";
import { useState } from "react";
import { initialState } from "../constants/job";
import { Job } from "../types/job";
import { useLoading } from "../context/LoaderContext";
import { toast } from "react-toastify";
import {
  createJob,
  fetchAllJob,
  getSingleJob,
  updateJob,
} from "../services/job.services";
import JobList from "../components/job-list";
import Loader from "../components/loader/Loader";
import FormStepper from "../components/form-step";
import NoJobFoundPage from "../components/no-data-found/NoJobFoundPage";
import Header from "../components/header";

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
    setJobFormValue(initialState);
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

    toast.success("Job created successfully.", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
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
      <Header openModal={openModal} />

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
          <div
            onClick={(e) => e.stopPropagation()}
            className="w-[577px] h-[564] bg-white p-8 rounded shadow-md "
          >
            <FormStepper
              stepperCount={stepperCount}
              setStepperCount={setStepperCount}
              submitForm={submitForm}
              jobFormValue={jobFormValue}
              setJobFormValue={setJobFormValue}
              closeModal={closeModal}
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
