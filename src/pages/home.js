import React from 'react'
import Card from '../components/card'


function Home() {

  const card=[
    {
      image:"C:\Users\Asus\Downloads\Black and Grey Monochrome Initial Catering Logo.png",
      Title:"qwert",
      Text:'dsfsdfsdfsdfsdf'

    },
    {
      image:"C:\Users\Asus\Downloads\Black and Grey Monochrome Initial Catering Logo.png",
      Title:"qwert",
      Text:'dsfsdfsdfsdfsdf'

    },
    {
      image:"C:\Users\Asus\Downloads\Black and Grey Monochrome Initial Catering Logo.png",
      Title:"rewq",
      Text:'dsfsdfsdfsdfsdf'

    },
        {
      image:"C:\Users\Asus\Downloads\Black and Grey Monochrome Initial Catering Logo.png",
      Title:"rewq",
      Text:'dsfsdfsdfsdfsdf'

    }
  ]
  return (
    <div>
      <h1>home</h1>
      <Card cards={card}/>

    </div>
  )
}

export default Home
