import { Routes, Route, Navigate } from 'react-router-dom'

// PAGES
import HomePage from './pages/HomePage'
import Layout from './layouts/Layout'
// import DetailedBlogs from './Components/Details/DetailedBlogs'
import Resume from './pages/Resume'
import ProjectTab from './projectScreen/ProjectTab.jsx'

// BLOGS
// import JWT from './Blogs/Jwt.jsx'
// import Auth0 from './Blogs/auth0.jsx'
// import UseForm from './Blogs/useForm.jsx'
// import BasicDokerization from './Blogs/basicDokerization.jsx'
// import CoffeAddiction from './Blogs/coffeAddiction.jsx'
// import PreRenderingMethods from './Blogs/pre-Rendering-NextJS.jsx'
// import Java_Data_Structure_A_Quick_Review from './Blogs/java_Data_Structure_A_Quick_Review.jsx'
// import ThreadingAndTasking from './Blogs/threadingAndTasking.jsx'
// import AnnotationInSpringBoot from './Blogs/annotationInSpringBoot.jsx'
// import ItalianBlog from './Blogs/italianBlog.jsx'
// import JDBCDetailed from './Blogs/jdbcDetailed.jsx'
// import ServletInfo from './Blogs/servlet.jsx'
// import ORMAndCRUD from './Blogs/orm.jsx'





const AppRoutes = () => {
    return (
        <Routes>
            {/* PAGES */}
            <Route path="/" element={<Layout><HomePage /></Layout>} />
            {/* <Route path="pages/blogs" element={<Layout><DetailedBlogs /></Layout>}></Route> */}
            <Route path="Resume" element={<Layout><Resume /></Layout>}></Route>
            <Route path="Projects" element={<Layout><ProjectTab /></Layout>} />

            {/* BLOGS */}
            {/* <Route path="blogs/1" element={<Layout><JWT /></Layout>}></Route>
            <Route path="blogs/2" element={<Layout><Auth0 /></Layout>}></Route>
            <Route path="blogs/3" element={<Layout><UseForm /></Layout>}></Route>
            <Route path="blogs/4" element={<Layout><PreRenderingMethods /></Layout>}></Route>
            <Route path="blogs/5" element={<Layout><BasicDokerization /></Layout>}></Route>
            <Route path="blogs/6" element={<Layout><CoffeAddiction /></Layout>}></Route>
            <Route path="blogs/8" element={<Layout><Java_Data_Structure_A_Quick_Review /></Layout>}></Route>
            <Route path="blogs/9" element={<Layout><ThreadingAndTasking /></Layout>}></Route>
            <Route path="blogs/10" element={<Layout><AnnotationInSpringBoot/></Layout>}/>
            <Route path="blogs/11" element={<Layout><ItalianBlog /></Layout>}></Route>
            <Route path="blogs/12" element={<Layout><JDBCDetailed/></Layout>}></Route>
            <Route path="blogs/13" element={<Layout><ServletInfo/></Layout>}></Route>
            <Route path="blogs/14" element={<Layout><ORMAndCRUD/></Layout>}></Route> */}
        </Routes>
    )
}
export default AppRoutes