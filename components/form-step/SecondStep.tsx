import { Job } from "../../types/job";
import Button from "../button";

interface Props {
  setStepperCount: (x: number) => void;
  submitForm: () => void;
  formValue: Job;
  setFormValue: (u: Job) => void;
}

const SecondStep = (props: Props) => {
  const { setStepperCount, submitForm, formValue, setFormValue } = props;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (e.target.checked) {
      setFormValue({ ...formValue, applyType: e.target.name });
      return;
    }

    setFormValue({ ...formValue, [name]: value });
  };

  return (
    <>
      <div className="mb-6">
        <label
          htmlFor="experience"
          className="block text-gray-700 font-bold mb-1"
        >
          Experience
        </label>
        <div className="flex gap-6">
          <input
            type="number"
            value={formValue.exMinimum}
            name="exMinimum"
            onChange={(e) => handleChange(e)}
            required
            min={0}
            placeholder="Minimum"
            className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          />

          <input
            type="number"
            value={formValue.exMaximum}
            name="exMaximum"
            onChange={(e) => handleChange(e)}
            required
            min={0}
            placeholder="Maximum"
            className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
      </div>
      <div className="mb-6">
        <label htmlFor="salary" className="block text-gray-700 font-bold mb-1">
          Salary
        </label>
        <div className="flex gap-6">
          <input
            type="number"
            value={formValue.salaryMinimum}
            name="salaryMinimum"
            onChange={(e) => handleChange(e)}
            required
            min={0}
            placeholder="Minimum"
            className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          />

          <input
            type="number"
            value={formValue.salaryMaximum}
            name="salaryMaximum"
            onChange={(e) => handleChange(e)}
            required
            min={0}
            placeholder="Maximum"
            className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
      </div>
      <div className="mb-6">
        <label
          htmlFor="totalEmployee"
          className="block text-gray-700 font-bold mb-1"
        >
          Total Employee
        </label>
        <input
          type="text"
          value={formValue.totalEmployee}
          name="totalEmployee"
          onChange={(e) => handleChange(e)}
          required
          placeholder="ex. 100"
          className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div>
        <label
          htmlFor="applyType"
          className="block text-gray-700 font-bold mb-1"
        >
          Apply type
        </label>
        <div className="flex items-center gap-6">
          <div className="flex items-center">
            <input
              checked={formValue.applyType === "Quick apply"}
              type="radio"
              value="Quick apply"
              name="Quick apply"
              onChange={(e) => handleChange(e)}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 "
            />
            <label
              htmlFor="default-radio-1"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Quick apply
            </label>
          </div>
          <div className="flex items-center">
            <input
              checked={formValue.applyType === "External apply"}
              type="radio"
              value="External apply"
              name="External apply"
              onChange={(e) => handleChange(e)}
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 "
            />
            <label
              htmlFor="default-radio-2"
              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              External apply
            </label>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between mt-[96px]">
        <Button
          onClick={() => setStepperCount(1)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          label="Previous"
        />

        <Button
          onClick={submitForm}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          label="Save"
        />
      </div>
    </>
  );
};

export default SecondStep;
