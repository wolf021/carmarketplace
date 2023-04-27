import React from "react"
import { Route, Routes } from "react-router-dom"
import Layout from "../Layouts/Layout"
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

const Navigation = () => {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </div>
  )
}

export default Navigation
