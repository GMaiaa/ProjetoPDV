import React from "react";
import { GrFormClose } from "react-icons/gr";
import "./index.css";

export default function Modal({ isOpen, setModalOpen, children }) {
  if (isOpen) {
    return (
      <div className="backgroundStyle">
        <div className="modalAdd">
          <div className="closeButton">
            <button onClick={setModalOpen}>
              <GrFormClose />
            </button>
          </div>
          <div className="modalContent">{children}</div>
        </div>
      </div>
    );
  }

  return null;
}
