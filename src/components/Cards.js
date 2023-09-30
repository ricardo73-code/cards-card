import React from 'react'
import Card from "./Card";
import image1 from "../assets/curso1.jpg"
import image2 from "../assets/curso2.jpg"
import image3 from "../assets/curso3.jpg"

const cards =[
{
    id:1,
    title: 'curso uno',
    image: image1,
    instructor: "ric sanchez"
},
{
    id:2,
    title: 'curso dos',
    image: image2,
    instructor: "jhov sanchez"
},
{
    id:3,
    title: 'curso tres',
    image: image3,
    instructor: "ang sanchez"
}
]

export default function Cards() {
    console.log()
  return (
    <div className='container d-flex justify-content-center align-items-center h-100'>
        <div className='row'>
            {
                cards.map(c =>(
                    <div className="col-md-4" key={cards.id}>
                    <Card
                    key = {c.id}
                    id = {c.id}
                    title ={c.title}
                    image ={c.image}
                    instructor={c.instructor}
                    />
                </div>
                ))
            }
         </div>
    </div>
  );
}
