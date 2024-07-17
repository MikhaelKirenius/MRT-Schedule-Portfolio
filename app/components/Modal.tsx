import React, { useEffect } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  // Effect to handle side effects when isOpen changes
  useEffect(() => {
    // Function to handle the modal opening logic
    const handleOpen = () => {
      console.log("Modal opened"); // Placeholder for actual open logic
    };

    // Function to handle the modal closing logic
    const handleClose = () => {
      console.log("Modal closed"); // Placeholder for actual close logic
    };

    if (isOpen) {
      handleOpen();
    } else {
      handleClose();
    }

    // Cleanup function to run when the component unmounts or before re-running the effect
    return () => {
      handleClose(); // Ensure modal is closed when component unmounts or isOpen changes
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close" onClick={onClose}>
          X
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;