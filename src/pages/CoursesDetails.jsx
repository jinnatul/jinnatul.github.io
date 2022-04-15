import React from 'react'
import { Layout, Seo } from '../components/common'
import { CourseDetails } from '../components/landing'
import { Header } from '../components/theme';

const CoursesDetails = () => {
  return (
    <Layout>
    <Seo />
    <Header />
    <CourseDetails />
  </Layout>
  )
}

export default CoursesDetails
