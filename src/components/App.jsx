import React, { Component } from 'react';
import { questions } from './questions.jsx'; //it should get from API
import QuestionList from './quiz/QuestionList.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = {
      questions: questions,
      score: 0,
      current: 1
    }
  }

  render() {
    return (
      <div>
        <QuestionList questions={this.state.questions}/>
      </div>
    )
  }
}

export default App;
