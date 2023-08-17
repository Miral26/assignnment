import React from "react";
import { Job } from "../../types/job";
import JobCard from "./component/JobCard";

interface Props {
  job: Job[];
  getAllJob: () => void;
  onEditJob: (i: string) => void;
}
const JobList = (props: Props) => {
  const { job, getAllJob, onEditJob } = props;

  return (
    <>
      <section className="text-gray-600 body-font bg-[#e6e6e6] mt-8">
        <div className=" px-5 py-5 mx-auto flex flex-wrap ">
          <div className="flex flex-wrap">
            {job.length > 0 &&
              job.map((item: Job) => {
                return (
                  <React.Fragment key={item.id}>
                    <JobCard
                      item={item}
                      onEditJob={onEditJob}
                      getAllJob={getAllJob}
                    />
                  </React.Fragment>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
};

export default JobList;
