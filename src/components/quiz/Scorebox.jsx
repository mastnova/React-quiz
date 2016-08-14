import React from 'react';

export default props => {
  return (
    <div className="well">
      Question {props.current} out of {props.questions.length}
      <span className="pull-right">
        <strong>
          Score: {props.score}
        </strong>
      </span>
    </div>
  )
}
