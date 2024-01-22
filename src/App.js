import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MovieList from "./component/MovieList";

import MovieSummary from "./component/MovieSummary";
const appRouter = createBrowserRouter(
  [{
    path:"/",
    element:<MovieList />,},
    {
      path:"/shows/:movieId",
      element:<MovieSummary />,
    }
      
    
  ]
)

function App() {
  return (
    <div className="App">
      <RouterProvider router={appRouter} />
 {/* <MovieList /> */}
    </div>
  );
}

export default App;
