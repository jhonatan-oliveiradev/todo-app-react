const AnotherComponent = () => {
  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <div className="anothercomponent">
      <p>Outro componente</p>
      <button onClick={handleClick}>Evento de click</button>
      <hr />
      <button onClick={() => console.log("teste")}>Evento de elemento</button>
    </div>
  );
};

export default AnotherComponent;
