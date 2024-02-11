

import arrow from './backBtn.svg'
import './style.css'

interface backBtnProps {
  onClick: () => void;
}

const backBtn: React.FC<backBtnProps> = ({ onClick}) => {
  return (
    <button className="backBtn" onClick={onClick}>
        <img src={arrow} alt="" />
    </button>
  );
};

export default backBtn;
