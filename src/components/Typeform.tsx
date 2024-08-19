import { PopupButton } from '@typeform/embed-react'
import { NotebookPen } from 'lucide-react'
import "./Typeform.css"

const Typeform = () => {
  return (
    <PopupButton id="https://gyd6ayvs92d.typeform.com/to/REH1jRvn" style={{ fontSize: 18 }} className="typeform-button">
      <NotebookPen size={24} className='notebook-icon'></NotebookPen>
      <p className="review-text">Review</p>
    </PopupButton>
  )
}

export default Typeform;
