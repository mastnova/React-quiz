import React from 'react';

export default props => {
  let message;
  let percent = props.score / props.questions.length * 100;
  if (percent > 80) {
    message = 'Awesome job!';
  } else if(percent > 60) {
    message = 'You did ok!';
  } else {
    message = 'You did bad!';
  }
  return (
    <div className="well">
      <h4>You got {props.score} out of {props.questions.length} correct</h4>
      <h1>{percent}% - {message}</h1>
      <hr />
      <a href="/app">Take again!</a>
    </div>
  )
}
