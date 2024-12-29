import { Button } from "flowbite-react";
import Layout from "./components/Layout";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import Students from "./pages/Students";
import Applications from "./pages/Applications";
import NotFound from "./pages/NotFound";
import Universities from "./pages/Universities";
import StudentPage from "./pages/StudentPage";
import Courses from "./pages/Courses";

import { useEffect } from 'react';

const routes = {
  Dashboard: { link: '/' },
  Students: {
    dropdown: true,
    icon: <svg className=" w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
    <path fill-rule="evenodd" d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z" clip-rule="evenodd" />
  </svg>,

    Students: {
      link: '/students',
    },
    Applications: { link: '/applications' }
  },
  Universities: {
    dropdown: true,
    icon: <svg className=" w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
    <path fill-rule="evenodd" d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z" clip-rule="evenodd" />
  </svg>,
    Universities: { link: '/universities' },
    Courses: { link: '/courses' },
  },
  
  seperator: {},
  "Contact Us": { link: '/contact' },
  About: { link: '/about' },
}

export default function App() {

  useEffect(() => {
    import('./js/charts').then(module => {
      module.default();
    });
    import('./js/sidebar').then(module => {
      module.default();
    });
  }, []);

  return (
    <Routes>
      <Route path="/" element={WrapLayout(<Home />)} />
      <Route path="/about" element={WrapLayout(<About />)} />
      <Route path="/sign_in" element={<SignIn />} />
      <Route path="/students" element={WrapLayout(<Students />)} />
      <Route path="/applications" element={WrapLayout(<Applications />)} />
      <Route path="/universities" element={WrapLayout(<Universities />)} />
      <Route path="*" element={<NotFound />} />
      <Route path="/student/:id" element={WrapLayout(<StudentPage />)} />
      <Route path="/courses" element={WrapLayout(<Courses />)} />
    </Routes>
  )
}

function WrapLayout(a: any) {
  return <Layout routes={routes}> {a} </Layout>;
}
