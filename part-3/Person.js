const Person = ({age, name, hobbies}) => {
  const learn = <p>Learn some information about this person</p>
  let nameLimit;
  let vote;
  const hobbyList = hobbies.map(hobby => <li>{hobby}</li>);

  if(age >= 18) {
    vote = <h3>please go vote!</h3>;
  } else {
    vote = <h3>you must be 18</h3>;
  };

  if(name.length > 8) {
    nameLimit = name.slice(0,6);
  } else {
    nameLimit = name;
  };

  return (
    <div>
      {learn}
      <ul>
        <li><b>Name: </b>{nameLimit}</li>
        <li><b>Age: </b>{age}</li>
        <li><b>Hobbies:</b></li>
          <ul>
            {hobbyList}
          </ul>
      </ul>
      {vote}
    </div>
  )
}