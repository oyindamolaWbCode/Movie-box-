import { useState } from "react";
import { HashRouter as Router } from "react-router-dom";

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import Home from "./Components/Home";
import MovieDetails from "./Components/MovieDetails";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="/movies/:id" Component={MovieDetails} />
    </Route>
  )
);
function App({ routes }) {
  return (
    <>
      <div className="the-body">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
