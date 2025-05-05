import React from "react";

interface QualificationBoxProps {
  title: string;
  description: string;
}

const QualificationBox: React.FC<QualificationBoxProps> = ({ title, description }) => {
  return (
    <div className="qualification-box">
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
};

export default QualificationBox;
