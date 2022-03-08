function Results(props) {
  console.log(`here are the resources we are getting ${props.resources[0]}`);

  return (
    <div>
      <div>
        <h1>READ THIS</h1>
        <a href={props.resources[0]}>CLICK HERE</a>
      </div>
      <h1>Watch this!</h1>
        <img src={props.resources[1]} />
      </div>
  );
}

export default Results;
