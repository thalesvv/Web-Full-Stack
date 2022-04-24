import { TodoListItem } from "../components/TodoListItem";
import "./Home.css";

export function Home() {
  const itemsArray = [
    { id: 1, text: "Acordar as 7 horas da manhã", checked: false },
    {
      id: 2,
      text: "Lavar toda a louça suja que está dentro ou fora da pia",
      checked: false,
    },
    {
      id: 3,
      text: "Levar os cachorros para passear por 30 min",
      checked: false,
    },
    { id: 4, text: "Lavar o carro todo", checked: true },
  ];

  //   console.log(itemsArray);
  //   console.log(...itemsArray);
  //   console.log({ ...itemsArray[0], horario: "12:25" });

//   localStorage.setItem("abc", "oi, tudo bem"); //mantem gravado no browser, então mesmo fe fechar o aplicativo do Browser, ele vai manter os dados salvos
//   sessionStorage.setItem("def", "não, ta td uma bela de uma bosta!"); // mantem somente na aba enquanto aberto

  return (
    <div className="container">
      {/* {itemsArray.map((obj) => { 
      return <TodoListItem {...obj} /> */}
      {itemsArray.map(({ id, text, checked }) => {
        return <TodoListItem key={id} id={id} text={text} checked={checked} />;
      })}
    </div>
  );
}
