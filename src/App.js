import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MovieList from "./component/screen-1/MovieList";
import MovieSummary from "./component/screen-2/MovieSummary";
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
    </div>
  );
}

export default App;
