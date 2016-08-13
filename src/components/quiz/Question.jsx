import React from 'react';

const onChange = () =>
  console.log('changed')

export default props => {
  return (
    <div className="well">
      <h3>{props.question.text}</h3>
      <hr />
      <ul className="list-group">
        {
          props.question.choices.map( choice => {
            return (
              <li className="list-group-item" key={choice.id}>
                {choice.id}
                <input
                  type="radio"
                  onChange={onChange.bind(this)}
                  name={props.question.id}
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
