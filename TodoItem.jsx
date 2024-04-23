function TodoItem({todoName,todoDate}) {
 
  return (
    <div className="row">
        <div className="col-4">
          {todoName}
        </div>
        <div className="col-4">
          {todoDate}
        </div>
        <div className="col-2">
        <button type="button" className="btn btn-danger kg-button my-1">Delete</button>
        </div>
      </div>
  
  );
}

export default TodoItem;