import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage";
import FileBasedSearchPage from "./pages/FileBasedSearchPage";
import PreLoader from "./pages/PreLoader";
import LoadingComplete from "./pages/LoadingComplete";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/search-file" element={<FileBasedSearchPage />} />
        <Route path="/loading" element={<PreLoader />} />
        <Route path="/loading-complete" element={<LoadingComplete />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};
export default App;
