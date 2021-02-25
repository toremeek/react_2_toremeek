

const Form = ({updateState, handleSubmit, updateContent, content, title}) => {
    return (
        <>
        <form onSubmit={handleSubmit} className="form" method="post" action="#">
            <label htmlFor="title1">Title</label>
            <input className="title1" placeholder="Add title" value={title} onChange={updateState} name="title1" rows="1" cols="20"></input>
            <label htmlFor="content1">Content</label>
            <textarea className="content1" placeholder="Add text" value={content} onChange={updateContent} name="content1" type="text" rows="6" cols="60"></textarea>
            <button type="submit" className="add">Add</button>
        </form>
        
        
        </>
    )
}

export default Form;
