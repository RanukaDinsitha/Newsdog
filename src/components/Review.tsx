import React from 'react';
import { Button } from '@mui/material';
import { NotebookPen } from 'lucide-react';
import { createTippy } from 'tippy.js';
import 'tippy.js/dist/tippy.css';

interface TransparentReviewButtonProps {
  onClick?: () => void;
}

const TransparentReviewButton: React.FC<TransparentReviewButtonProps> = ({ onClick }) => {
  createTippy('.review-button', {
    content: 'Review',
    placement: 'top', // Adjust placement as needed
    arrow: true,
  });

  return (
    <Button
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
      className="review-button"
    >
      <NotebookPen size={24} />
      &nbsp;&nbsp;Review
    </Button>
  );
};

export default TransparentReviewButton;
