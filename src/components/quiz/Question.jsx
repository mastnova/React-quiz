import React, {Component} from 'react';

class Question extends Component {
  constructor(props) {
    super(props);
  }

  onChange(e) {
    e.preventDefault();
    let selected = e.target.value;
    const {setScore, setCurrent, question} = this.props;

    if (selected === question.correct) {
      setScore(this.props.score+1);
    }
    setCurrent(this.props.current+1);
  }

  render() {
    const question = this.props.question;
    return (
      <div className="well">
        <h3>{question.text}</h3>
        <hr />
        <ul className="list-group">
          {
            question.choices.map( choice => {
              return (
                <li className="list-group-item" key={choice.id}>
                  {choice.id}
                  <input
                    type="radio"
                    onChange={this.onChange.bind(this)}
                    name={question.id}
                    value={choice.id}
                  />
                  {choice.text}
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default Question;
