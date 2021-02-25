import Header from './components/Header';
import Form from './components/Form';

import {useState} from "react";



function App() { 
  
  const [title, setInputFromTitle] = useState("");
  const [content, setContent] = useState("");
  const [Submitted, setSubmitted] = useState(false);

  function updateState(e) {
    setInputFromTitle(e.currentTarget.value);
    
  }

  function updateContent (e) {
    setContent(e.currentTarget.value);
   
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true)
     }



return (
<div className="App">
    <Header />
      <Form updateState={updateState} handleSubmit={handleSubmit} updateContent={updateContent} content={content} title={title} />
  <section className="wrapper_cards">
      {Submitted ?
            <article>
            <h4>{title}</h4>
            <p>{content}</p>
            <button className="button_cards">Complete</button>
        </article>
         : null }
  </section>
    </div>
  );

}

export default App;
