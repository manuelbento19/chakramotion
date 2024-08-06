
function App() {

  return (
    <section>
      <article>
        <form action="">
          <h1>Shopping List</h1>
          <div className="">
            <input type="text" placeholder='Add an item' />
            <button>Add</button>
          </div>
        </form>
        <div className="">
          <ul>
            {Array.from({length: 4}).map((_,index)=>(
              <li key={index}>
                <span>I'm item {index+1} </span>
                <button>Delete</button>
              </li>
            ))}
          </ul>
        </div>
      </article>
    </section>
  )
}

export default App
