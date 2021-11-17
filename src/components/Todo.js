export const Todo = (props) => {
    const deleteHandler = () =>{
        console.log("clicked")
        console.log(props.text)
    }


    return (
        <div className="card">
            <h1>{props.text}</h1>
            <div className="actions">
                <button className="btn" onClick={deleteHandler}>Delete</button>
            </div>
        </div>
    )
}