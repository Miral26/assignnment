import React from "react";
import Button from "../../button";

interface Props {
  isOpen: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}

const DeleteConfirmationModal = (props: Props) => {
  const { isOpen, onCancel, onConfirm } = props;
  return (
    <div
      className={`fixed inset-0 bg-gray-900 z-10 bg-opacity-50 transition-opacity ${
        isOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex items-center justify-center h-screen">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4">Confirm Deletion</h2>
          <p className="mb-4">Are you sure you want to delete this item?</p>
          <div className="flex">
            <Button
              className="px-4 py-2 mr-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
              onClick={onCancel}
              label="Cancel"
            />

            <Button
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
              onClick={onConfirm}
              label="Confirm Delete"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;
