const Tweet = ({username, name, date, tweet}) => {
  return (
    <div className="tweet">
      <span>{name} <span className="check">✔</span></span>
      <span className="username">@{username}</span>
      <br></br>
      <br></br>
      <span>{tweet}</span>
      <br></br>
      <span className="date">{date}</span>
    </div>
  )
};