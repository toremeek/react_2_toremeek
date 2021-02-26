import Header from './components/Header';
import Form from './components/Form';
import {useState} from "react";

class Todo{
  constructor(title, content){
    this.title = title;
    this.content = content;
  }
}

var myList = []
myList.push(new Todo('testTile', "testContent"))

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
    setData([...data, {title, content}]);
    setContent("");
    setInputFromTitle("");
     } 

    


return (
<div className="App">
    <Header />
      <Form updateState={updateState} handleSubmit={handleSubmit} updateContent={updateContent} content={content} title={title} />
  <section className="wrapper_cards">
  {data.length > 0 ? data.map(item => [
    <article>
            <h4>{item.title}</h4>
            <p>{item.content}</p>
            <button className="button_cards">Complete</button>
        </article>

  ])
         : null }
  </section>
    </div>
  );

}
export default App;