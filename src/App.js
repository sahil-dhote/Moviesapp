import './App.css';
import JsonFile from "./Database.json";

function App()
{
  console.log(JsonFile);
  return (
    <div className="main">
    <div className="header">
      <h1>Movie List</h1>
    </div>

      <div className="data">
        {JsonFile.posts.map(e =>
          <div className="moviecard">
            <div className="card-body">
              <img src={`${e.poster_path}`} className="card-img-top" alt="Image" />
              <h2 className="card-title">{e.original_title}</h2>
              <h3 className="rate">
                Rating:- { e.rating}/10
              </h3>
              <h3 className="card-text"> Realease date:- {e.realease_date}</h3>
            </div>
            </div>
          )}
      </div>
    </div>
    

  );
}

export default App;
