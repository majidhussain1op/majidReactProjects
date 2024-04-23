function TodoItem1() {
  let todoName = 'Buy Milk';
  let todoDate = '04/10/2023';
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

export default TodoItem1;