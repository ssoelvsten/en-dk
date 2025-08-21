import React from 'react';
import './RoundButton.scss';

interface RoundButtonProps {
  onClick: () => void;
  icon: any;
  title: string;
};

const RoundButton = ({ onClick, icon, title }: RoundButtonProps) =>
  <div className="RoundButton">
    <span className="Title">{title}</span>
    <button className="Button" onClick={onClick}>
      <img class="Icon" src={icon} alt="" />
    </button>
  </div>;

export default RoundButton;
