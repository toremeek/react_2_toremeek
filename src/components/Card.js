const Cards = ({title, content}) => {
    console.log("Funka")
    const cardBox = document.querySelector("todos");
    
    return (
        cardBox.innerHTML = 
        <section className="wrapper_cards">
            <article>
            <h4>{title}</h4>
            <p>{content}</p>
            <button className="button_cards">Complete</button>
        </article>
        </section>
        );
    }

    export default Cards;