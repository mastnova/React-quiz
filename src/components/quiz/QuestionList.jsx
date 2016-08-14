import React, { Component } from 'react';
import Question from './Question.jsx'

class QuestionList extends Component {
  render() {
    return (
      <div className="questions">
        {
          this.props.questions.map( question => {
            if (question.id === this.props.current) {
              return (
                <Question
                  {...this.props}
                  question={question}
                  key={question.id}
                />
              )
            }
          })
        }
      </div>
    )
  }
}

export default QuestionList;
