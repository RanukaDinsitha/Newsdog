import React from 'react';
import { Button } from '@mui/material';
import { NotebookPen } from 'lucide-react';
import { Tippy } from "tippy.js";

interface TransparentReviewButtonProps {
  onClick?: () => void;
}

const TransparentReviewButton: React.FC<TransparentReviewButtonProps> = ({ onClick }) => {
  return (
    <Button
      className='review-button'
      variant="outlined"
      color="inherit"
      onClick={onClick}
      sx={{
        border: 'none',
        color: 'currentColor',
        padding: '10px',
        '&:hover': {
          backgroundColor: 'rgba(0, 0, 0, 0.05)',
        },
      }}
    >
      <NotebookPen size={24} className='space-notebook'/>
      &nbsp;&nbsp;Review
    </Button>
  );
};

export default TransparentReviewButton;
