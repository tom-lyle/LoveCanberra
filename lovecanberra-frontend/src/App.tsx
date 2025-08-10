import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Homepage from './pages/homepage/Homepage'; 
// import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <Homepage/>
  );
}


{/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter> */}