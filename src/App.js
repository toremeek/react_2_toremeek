import Header from './components/Header';
import Form from './components/Form';
import Wrapper from './components/Wrapper';
import {useState} from "react";

const createId = () => Math.floor(Math.random(0, 1) * 1000);

function App() {   
  const [title, setInputFromTitle] = useState("");
  const [content, setContent] = useState("");
  const [data, setData] = useState([]);

  function updateState(e) {
    setInputFromTitle(e.currentTarget.value);
  }
  function updateContent (e) {
    setContent(e.currentTarget.value);
  }
  const handleSubmit = (event) => {
  event.preventDefault();
  if (title.length > 0 && content.length > 0) {
  const id = createId();
  setData((prev) => [...prev, {id, title: title, content: content}]);
  setContent("");
  setInputFromTitle("");
}
else {
  alert("Du må fylle inn tekst i begge felter!");
  setData((prev) => [...prev]);
  setContent("");
  setInputFromTitle("");
  }
}
  const removeCards = (id) => {
  const oldCards = [...data];
  const cardsLeft = oldCards.filter((data) => data.id !== id);
  setData(cardsLeft);
  }
     return (
      <div className="App">
            <Header />
            <Form
              updateState={updateState}
              handleSubmit={handleSubmit}
              updateContent={updateContent}
              content={content}
              title={title} />
            <Wrapper>
            {data.length > 0 ? data.map(item => [
             <article key={item.id}>
            <h4>{item.title}</h4>
            <p>{item.content}</p>
            <button type="button" className="button_cards" onClick={ () => removeCards(item.id)}>Complete</button>
            </article>
          ])
                : null }
            </Wrapper>
            </div>
  )
}
export default App;