import React from 'react';
import { Button } from '@mui/material';
import { NotebookPen } from 'lucide-react';

interface TransparentReviewButtonProps {
  onClick?: () => void;
}

const Review: React.FC<TransparentReviewButtonProps> = ({ onClick }) => {
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
    >
      <NotebookPen size={24} />
      Review
    </Button>
  );
};

export default Review;
