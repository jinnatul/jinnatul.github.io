import React from 'react'
import { Layout, Seo } from '../components/common'
import { Course } from '../components/landing'
import { Header } from '../components/theme';

const Courses = () => {
  return (
    <Layout>
    <Seo />
    <Header />
    <Course />
  </Layout>
  )
}

export default Courses
