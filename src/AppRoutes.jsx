import { Routes, Route, Navigate } from 'react-router-dom'

// PAGES
import HomePage from './pages/HomePage'
import Layout from './layouts/Layout'

import Resume from './pages/Resume'
import ProjectTab from './ProjectScreen/ProjectTab.jsx'
import October19 from './Components/blogdetail/October19.jsx'




const AppRoutes = () => {
    return (
        <Routes>
            {/* PAGES */}
            <Route path="/" element={<Layout><HomePage /></Layout>} />
       
            <Route path="Resume" element={<Layout><Resume /></Layout>}></Route>
            <Route path="Projects" element={<Layout><ProjectTab /></Layout>} />

            {/* BLOGS */}
            <Route path="blogs/1" element={<Layout><October19 /></Layout>}></Route>

        </Routes>
    )
}
export default AppRoutes