import { Route, Routes } from "react-router-dom";
import "./App.css";
import Album from './components/Album';
import ListAlbums from './components/ListAlbums';

function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<ListAlbums />}></Route>
        <Route path="/album/:id" element={<Album />}></Route>
      </Routes>
    </>
  );
}

export default App;
