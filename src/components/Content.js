const Content = ({toDoList}) => {
console.log(toDoList);
    return (
        toDoList.map(toDo => {
            <article>
            <h4>{toDo.tittel}</h4>
            <p>{toDo.innhold}</p>
            <button className="button_cards">Complete</button>
            </article>
          })

    );
}

export default Content;