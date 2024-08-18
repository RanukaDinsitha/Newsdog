import React, { useState } from 'react';
import Modal from 'react-modal';
import { Button, Select, MenuItem } from '@mui/material';
import { NotebookPen, X, ArrowBigRight } from 'lucide-react';

Modal.setAppElement('#root'); // Or your app's root element

interface TransparentReviewButtonProps {
  onClick?: () => void;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const TransparentReviewButton: React.FC<TransparentReviewButtonProps> = ({ onClick }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <Button
        className="review-button"
        variant="outlined"
        color="inherit"
        onClick={handleButtonClick}
        sx={{
          border: "none",
          color: "currentColor",
          padding: "10px",
          '&:hover': {
            backgroundColor: "rgba(0, 0, 0, 0.05)",
          },
        }}
      >
        <NotebookPen size={24} className="space-notebook" />
        &nbsp;&nbsp;Review
      </Button>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleModalClose}
        contentLabel="Review Modal"
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          },
          content: {
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "#fff",
            padding: "20px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          },
        }}
      >
        {/* Your modal content here */}
        <button className="close-button" onClick={handleModalClose}>
          <X size={28}></X>
        </button>
        {/* <h1>Hello, my name is Ranuka!</h1> */}
        <div className="about-box">
          <h1 className="about-text">What is your review about?</h1>
        </div>
        <div className="selector-review-box">
          <Select
            value={selectedOption}
            onChange={handleChange}
            label="Select an option"
            className="selector-parent"
          >
            <MenuItem value="review">Review</MenuItem>
            <MenuItem value="issue">Issue</MenuItem>
            {/* Add more options as needed */}
          </Select>
          <button className="next-button" onClick={handleModalClose}>
            <ArrowBigRight size={24} className="arrow-button"></ArrowBigRight>
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default TransparentReviewButton;
