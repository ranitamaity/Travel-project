import React, {useEffect} from 'react'
import './main.css'

// import icons
import {HiOutlineLocationMarker} from 'react-icons/hi'
import { HiOutlineClipboardCheck } from "react-icons/hi";

// Let me paste the array named data
import imag from '../../Assets/imag.jpg'
import imag2 from '../../Assets/imag2.jpeg'
import imag3 from '../../Assets/imag3.jpg'
import imag4 from '../../Assets/imag4.jpg'
import imag5 from '../../Assets/imag5.jpg'
import imag6 from '../../Assets/imag6.jpg'
import imag7 from '../../Assets/imag7.jpg'
import imag8 from '../../Assets/imag8.jpg'
import imag9 from '../../Assets/imag9.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'



const Data = [
  {
    id:1,
    imgSrc:imag,
    desTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'The epitome of romance, Bora Bora is one of the best travel destinations in the world. This place is known for its luxurious stays and adventurous activities.'
  },


  {
    id:2,
    imgSrc:imag2,
    desTitle: 'Machu Picchu',
    location: 'Peru',
    grade: 'CULTURAL RELAX',
    fees: '$600',
    description: 'Huayna Picchu is a mountain in Peru, rising over Machu Picchu, the so-called Lost City of Incas. This place is popular among tourists as the sunrise from the Sun Gate is simply spectacular.'
  },


  {
    id: 3,
    imgSrc: imag3,
    desTitle: 'Great Barrier Reef',
    location: 'Australia',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description: 'One of the most remarkable Australian natural gifts is the Great Barrier Reef. The hallmark of this place is beauty. Always interesting to be in this place. '
  },


  {
    id:4,
    imgSrc: imag4,
    desTitle: 'Cappadocia',
    location: 'Turkey',
    grade: 'CULTURAL RELAX',
    fees: '$800',
    description: 'According to the world Tourism Ranking, 45 Million people visit Turkey each year, and from that about 2 Million come to visit Cappacodia. This place is known for its luxurious stays and adventurous activities.'
  },


  {
    id:5,
    imgSrc: imag5,
    desTitle: 'Guanajuato',
    location: 'Mexico',
    grade: 'CULTURAL RELAX',
    fees: '$1100',
    description: 'A city in central Mexico, Guanajuato is known for its history of silver mining and colonial architecture. The houses in the city are very attractively painted with the most bright colors available. Always welcome.'
  },


  {
    id:6,
    imgSrc: imag6,
    desTitle: 'Cinque Terre',
    location: 'Italy',
    grade: 'CULTURAL RELAX',
    fees: '$840',
    description: 'The vibrant hues of the houses are its benchmark and explain the beauty of this place. Also, if you are a foodie and love seafood, you will be exhilarated with the choice you are about to get here. Happy exploring great food!'
  },


  {
    id:7,
    imgSrc: imag7,
    desTitle: 'Angkor Wat',
    location: 'Cambodia',
    grade: 'CULTURAL RELAX',
    fees: '$790',
    description: 'angkot wat represents the entire range of khmer art from the 9th to the 15th century. This temple is considered the heart and soul of Cambodia. This place is known for its luxurious stays and adventurous activities.'
  },


  {
    id:8,
    imgSrc: imag8,
    desTitle: 'Taj Mahal',
    location: 'India',
    grade: 'CULTURAL RELAX',
    fees: '$900',
    description: 'An immense mausoleum of white marble, built-in Agra by Mughal emperor Shah Jahan in memory of his wife Mumtaz, the monument is breathtakingly beautiful. This place is known for its luxurious stays and adventurous activities.'
  },


  {
    id:9,
    imgSrc: imag9,
    desTitle: 'Bali Island',
    location: 'Indonesia',
    grade: 'CULTURAL RELAX',
    fees: '$500',
    description: 'Bali is an Indonesia Island and one of the best holiday destinations in the Indonesian archipelago. Bali is known for its volcanic mountains, history, art & culture, food, temples and beautiful sandy beaches.'
  },
]

const Main = () => {


  useEffect(()=>{
    Aos.init({duration: 2000})
  }, [])



  return (
    <section className='main container section'>

      <div className="secTitle">
        <h3 data-aos="fade-right"  className="title">
          Most visited destinations
        </h3>
      </div>

       <div className="secContent grid">

         
         {
          Data.map(({id, imgSrc, desTitle, location, grade, fees, description}) => {
            return(
              <div key={id} data-aos="fade-up" className="singleDestination">
                

                <div className="imageDiv">
                  <img src={imgSrc} alt={desTitle}/> 
                </div>

                <div className="cardInfo">
                  <h4 className="destTitle">{desTitle}</h4>
                  <span className="contient flex">
                     <HiOutlineLocationMarker className='icon' />
                     <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>{grade}<small>+1</small></span>
                    </div>
                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button className='btn flex'>
                    DETAILS <HiOutlineClipboardCheck className="icon"/>
                  </button>
                </div>
              </div>
            )
          })
         }
       </div>
 
    </section>
  )
}

export default Main