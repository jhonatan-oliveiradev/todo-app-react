const RenderCond = ({x, y}) => {
  return (
    <div>
      {x > 5 && <p>x is greater than 5</p>}
      {x > 5 ? <p>x is high number</p> : <p>x is low number</p>}
      <p>Y value is: {y}</p>
    </div>
  );
};

export default RenderCond;
