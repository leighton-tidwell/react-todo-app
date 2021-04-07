import React from "react"
import { useParams } from "react-router-dom"

const SinglePage = () => {
  console.log(useParams())

  const aboutData = [
    {
      slug: "about-app",
      title: "About the App",
      description: "In this app you can add, delete, submit and edit items. To edit items simply double click them and once finished editing hit 'Enter'",
    },
    {
      slug: "about-author",
      title: "About the Author",
      description: "This app was developed by Donnie, blah blah blah...",
    },
  ]
  
  const { slug } = useParams()
  const aboutContent = aboutData.find(item => item.slug === slug)
  const { title, description } = aboutContent

  return (
    <div className="main__content">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  )
}

export default SinglePage
