import { Routes, Route } from 'react-router-dom';
import { Books, Stores, Add } from 'pages';

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Books />} />
      <Route exact path="/store" element={<Stores />} />
      <Route exact path="/add" element={<Add />} />
    </Routes>
  );
}

export default Routers;
