import React from 'react'
import { Layout, Seo } from '../components/common'
import { Intro, Projects, Skills, Contact } from '../components/landing'

const Home = () => {
  return (
    <Layout>
      <Seo />
      <Intro />
      <Projects />
      <Skills />
      <Contact />
	  </Layout>
  )
}

export default Home