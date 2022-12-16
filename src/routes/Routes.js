import { Routes, Route } from 'react-router-dom';
import { Books, Location } from 'pages';

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Books />} />
      <Route exact path="/store" element={<Location />} />
    </Routes>
  );
}

export default Routers;
