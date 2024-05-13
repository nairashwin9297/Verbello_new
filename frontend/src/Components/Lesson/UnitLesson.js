import React from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const UnitLesson = ({ lesson, handleLessonClick, iscompleted = false }) => {
  // const tooltip = <Tooltip id="tooltip"  >{iscompleted ? 'You already completed this lesson!' : 'Yet to complete'}</Tooltip>;

  return (
    <div onClick={handleLessonClick} className="lesson-item">
      <div>
        <img
          className="fixed-image"
          src={iscompleted ? '/images/lessons/star-completed.png' : '/images/lessons/star.png'}
          alt="lesson"
        />
        <span>{lesson.name}</span>
      </div>
    </div>
  );
};

export default UnitLesson;
