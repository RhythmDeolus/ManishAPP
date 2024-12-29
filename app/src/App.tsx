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
import ContactPage from "./pages/ContactPage";
import CoursePage from "./pages/CoursePage";

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
    icon: <svg className="w-6 h-6 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"  fill="currentColor" viewBox="0 0 24 24">
    <path fill-rule="evenodd" d="M4 4a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2v14a1 1 0 1 1 0 2H5a1 1 0 1 1 0-2V5a1 1 0 0 1-1-1Zm5 2a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H9Zm5 0a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-1Zm-5 4a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1H9Zm5 0a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1h-1Zm-3 4a2 2 0 0 0-2 2v3h2v-3h2v3h2v-3a2 2 0 0 0-2-2h-2Z" clip-rule="evenodd"/>
  </svg>,
    Universities: { link: '/universities' },
    Courses: { link: '/courses' },
  },
  
  seperator: {},
  "Contact Us": { 
    link: '/contact',
    icon: <svg className="w-6 h-6  text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"  fill="currentColor" viewBox="0 0 24 24">
    <path d="M7.978 4a2.553 2.553 0 0 0-1.926.877C4.233 6.7 3.699 8.751 4.153 10.814c.44 1.995 1.778 3.893 3.456 5.572 1.68 1.679 3.577 3.018 5.57 3.459 2.062.456 4.115-.073 5.94-1.885a2.556 2.556 0 0 0 .001-3.861l-1.21-1.21a2.689 2.689 0 0 0-3.802 0l-.617.618a.806.806 0 0 1-1.14 0l-1.854-1.855a.807.807 0 0 1 0-1.14l.618-.62a2.692 2.692 0 0 0 0-3.803l-1.21-1.211A2.555 2.555 0 0 0 7.978 4Z"/>
  </svg>
  
   },
  About: { 
    link: '/about',
    icon: <svg className="w-6 h-6 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
    <path fill-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Zm9.408-5.5a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2h-.01ZM10 10a1 1 0 1 0 0 2h1v3h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1v-4a1 1 0 0 0-1-1h-2Z" clip-rule="evenodd"/>
  </svg>,  
   },
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
      <Route path="/about" element={(<About />)} />
      <Route path="/sign_in" element={<SignIn />} />
      <Route path="/students" element={WrapLayout(<Students />)} />
      <Route path="/applications" element={WrapLayout(<Applications />)} />
      <Route path="/universities" element={WrapLayout(<Universities />)} />
      <Route path="/contact" element={WrapLayout(<ContactPage />)} />
      <Route path="/student/:id" element={WrapLayout(<StudentPage />)} />
      <Route path="/courses" element={WrapLayout(<Courses />)} />
      <Route path="/course/:id" element={WrapLayout(<CoursePage />)} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

function WrapLayout(a: any) {
  return <Layout routes={routes}> {a} </Layout>;
}
