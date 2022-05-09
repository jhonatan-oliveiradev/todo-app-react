import AnotherComponent from "./AnotherComponent";

function FirstComponent() {
  const name = "Jhon";

  return (
    <div className="firstcomponent">
      <p>Primeiro Componente</p>
      {2 + 2}
      <p>Nome: {name}</p>
      <AnotherComponent />
    </div>
  );
}

export default FirstComponent;
