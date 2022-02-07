const ToDoLists = (props) => {
    return (
        <>
            <div className="todo_style">
                <i className="symbol" 

                onClick={() => {
                    props.onSelect(props.id);

                }} > × </i> 
                <li>{props.text}</li>
            </div>
        </>
    );
}

export default ToDoLists;