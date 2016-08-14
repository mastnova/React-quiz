import React, { Component } from 'react';
import { questions } from './questions.jsx'; //it should get from API
import QuestionList from './quiz/QuestionList.jsx';
import Scorebox from './quiz/Scorebox.jsx';
import Results from './quiz/Results.jsx';

class App extends Component {
  constructor() {
    super();
    this.state = {
      questions: questions,
      score: 0,
      current: 1
    }
  }

  setCurrent(current) {
    this.setState({current});
  }

  setScore(score) {
    this.setState({score})
  }

  render() {
    let scorebox, results;
    if (this.state.current > this.state.questions.length) {
      scorebox = '';
      results = <Results {...this.state} />
    } else {
      scorebox =  <Scorebox {...this.state}/>;
      results = '';
    }
    return (
      <div>
        {scorebox}
        <QuestionList
          {...this.state}
          setCurrent={this.setCurrent.bind(this)}
          setScore={this.setScore.bind(this)}
        />
        {results}
      </div>
    )
  }
}

export default App;
