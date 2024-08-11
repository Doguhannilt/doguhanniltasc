import {Routes, Route, Navigate} from 'react-router-dom'

// PAGES
import HomePage from './pages/HomePage'
import Layout from './layouts/Layout'
import DetailedBlogs from './Components/DetailedBlogs'
import Resume from './pages/Resume'


// BLOGS
import JWT from './Blogs/JWT'
import Auth0 from './Blogs/AuthO'
import UseForm from './Blogs/useForm'
import WhatisRedux from './Blogs/WhatisRedux'
import BasicDokerization from './Blogs/BasicDokerization'
import CoffeAddiction from './Blogs/CoffeAddiction'





const AppRoutes = () => {
    return(
        <Routes >
            <Route  path = "/"  element={<Layout><HomePage /></Layout>}/>
            <Route path="pages/blogs" element={<Layout><DetailedBlogs/></Layout>}></Route>
            <Route path="Resume" element = {<Layout><Resume /></Layout>}></Route>
            <Route path="blogs/1" element={<Layout><JWT/></Layout>}></Route>
            <Route path="blogs/2" element={<Layout><Auth0/></Layout>}></Route>
            <Route path="blogs/3" element={<Layout><UseForm/></Layout>}></Route>
            <Route path="blogs/4" element={<Layout><WhatisRedux/></Layout>}></Route>
            <Route path="blogs/5" element={<Layout><BasicDokerization/></Layout>}></Route>
            <Route path="blogs/6" element={<Layout><CoffeAddiction/></Layout>}></Route>
            

        </Routes>
    )
}
export default AppRoutes