import { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import IconButton from '@mui/material/IconButton';
import { X, NotebookPen } from 'lucide-react';
import Typeform from './Typeform';
import './Review.css';

const TransparentReviewButton = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="text"
        startIcon={<NotebookPen className="icon" size={24}/>}
        className="review-button"
        onClick={handleClickOpen}
      >
        <div className="text-box">
          Review
        </div>
      </Button>
      <Dialog open={open} onClose={handleClose} maxWidth="lg">
        <div className="modal-content">
          <IconButton className="close-icon" onClick={handleClose}>
            <X size={24}/>
          </IconButton>
          <div className="typeform-box">
            <div className="container">
              <Typeform />
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default TransparentReviewButton;
