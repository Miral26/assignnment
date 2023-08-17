import React from "react";
import { DeleteIconSVG, EditIconSVG, ImageSVG } from "../../../assets/svg/icon";
import { Job } from "../../../types/job";
import CardButton from "./CardButton";
import { useLoading } from "../../../context/LoaderContext";
import { deleteJob } from "../../../services/job.services";
import DeleteConfirmationModal from "./DeleteConfirmationModal";

interface Props {
  item: Job;
  onEditJob: (i: string) => void;
  getAllJob: () => void;
}

const JobCard = (props: Props) => {
  const { item, onEditJob, getAllJob } = props;
  const { setLoading } = useLoading();

  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleDeleteClick = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleConfirmDelete = () => {
    setIsModalOpen(false);
    item.id && deleteJobCard(item.id);
  };

  const salarySection = (item: Job) => {
    const formatter = new Intl.NumberFormat("en-GB", {
      currency: "INR",
    });
    if (item.salaryMinimum || item.salaryMaximum) {
      return (
        <span>
          INR (₹) {formatter.format(Number(item.salaryMinimum))} - {formatter.format(Number(item.salaryMaximum))} / Month
        </span>
      );
    }
  };

  const locationSection = (item: Job) => {
    if (item.location || item.remoteType) {
      return (
        <span>
          {item.location} ({item.remoteType})
        </span>
      );
    }
  };

  const experienceSection = (item: Job) => {
    if (item.exMinimum || item.exMaximum) {
      return (
        <span>
          Experience ({item.exMinimum} - {item.exMaximum}  years)
        </span>
      );
    }
  };

  const deleteJobCard = async (id: string) => {
    setLoading(true);
    await deleteJob(id);
    getAllJob();
    setLoading(false);
  };

  return (
    <div
      className="  w-[830px] min-h-[320px] ml-16 mb-16 flex rounded-lg  border-opacity-50 py-4 px-6 sm:flex-row flex-col bg-white border-solid border-2 border-slate-100"
    >
      <div className="w-16 h-16 sm:mr-2 sm:mb-0 mb-4 inline-flex items-center justify-center rounded bg-black text-[#d86161]  flex-shrink-0">
        <ImageSVG />
      </div>
      <div className="flex-grow relative">
        <div className="flex justify-between">
          {item.jobTitle && (
            <h2 className="text-gray-900 text-2xl  ">
              <span>{item.jobTitle}</span>
            </h2>
          )}
          <div className="flex">
            <div
              className="w-8 h-8 p-1 cursor-pointer sm:mr-2 sm:mb-0 mb-4 inline-flex items-center justify-center rounded bg-sky-100 text-sky-500 flex-shrink-0"
              onClick={() => item.id && onEditJob(item.id)}
            >
              <EditIconSVG />
            </div>
            <div
              className="w-8 h-8 p-1 cursor-pointer sm:mr-2 sm:mb-0 mb-4 inline-flex items-center justify-center rounded bg-red-100 text-red-500 flex-shrink-0"
              onClick={handleDeleteClick}
            >
              <DeleteIconSVG />
            </div>
          </div>
        </div>
        <div className="mb-6">
          <p className="leading-relaxed text-base">
            {item.companyName} - {item.industry}
          </p>
          <p className="leading-relaxed text-base text-slate-400">
            {locationSection(item)}
          </p>
        </div>
        <p className="leading-relaxed text-base mb-2">
          Part-Time (9:00 am - 5.00 pm IST)
        </p>
        <p className="leading-relaxed text-base mb-2">
          {experienceSection(item)}
        </p>
        <p className="leading-relaxed text-base mb-2">{salarySection(item)}</p>
        <p className="leading-relaxed text-base mb-6">
          {item.totalEmployee && <span>{item.totalEmployee} Employees</span>}
        </p>

        <CardButton applyType={item.applyType} />
      </div>
      <DeleteConfirmationModal
        isOpen={isModalOpen}
        onCancel={handleCancel}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
};

export default JobCard;
