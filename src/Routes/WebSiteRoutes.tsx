import React from "react"
import { Route, Routes } from "react-router-dom"
import Layout from "../Layouts/RootLayout"
import AboutUs from "../Pages/AboutUsPage/AboutUs"
import BlogDetails from "../Pages/BlogDetailsPage/BlogDetails"
import Blogs from "../Pages/BlogsPage/Blogs"
import CarDetails from "../Pages/CarDetails/CarDetails"
import CarsSearch from "../Pages/CarsSearchPage/CarsSearch"
import ContactUs from "../Pages/ContactUsPage/ContactUs"
import Home from "../Pages/HomePage/Home"
import Login from "../Pages/LoginPage/Login"
import NotFound from "../Pages/NotFoundPage/NotFound"
import Privacy from "../Pages/PrivacyPolicyPage/Privacy"
import Register from "../Pages/RegisterPage/Register"
import TradersPage from "../Pages/TradersPage/TradersPage"
import TraderGarageLayout from "../Layouts/TraderGarageLayout/TraderGarageLayout"
import TradersHomePage from "../Pages/TradersGaragePages/TradersHomePage/TradersHomePage"
import TradersInventoryPage from "../Pages/TradersGaragePages/TradersInventoryPage/TradersInventoryPage"
import TradersReviewpage from "../Pages/TradersGaragePages/TradersReviewPage/TradersReviewpage"
import TradersContactPage from "../Pages/TradersGaragePages/TradersContactPage/TradersContactPage"

const WebSiteRoutes = () => {
  return (
    <div>
      <Layout>
        <Routes>
          <Route  path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/car-search" element={<CarsSearch />} />
          <Route path="/car-details" element={<CarDetails />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/blog-details" element={<BlogDetails />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/traders" element={<TradersPage />} />
          <Route path="/traders/:id" element={<TraderGarageLayout />}>
            <Route path="/traders/:id/" element={<TradersHomePage />} />
            <Route
              path="/traders/:id/inventory"
              element={<TradersInventoryPage />}
            />
            <Route path="/traders/:id/review" element={<TradersReviewpage />} />
            <Route
              path="/traders/:id/contact"
              element={<TradersContactPage />}
            />
          </Route>
         
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </div>
  )
}

export default WebSiteRoutes
