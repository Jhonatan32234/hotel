import '../organisms/Section.css'
import {cards} from '../../Data/mysql.js'
import { Cards } from '../molecules/Cards.jsx'
import { Subtitle } from '../atoms/Text.jsx'
import { destino } from '../../Data/mysql.js'
import '../organisms/Section.css'
import { Cards2 } from '../molecules/Cards.jsx'
import { Subtitle2 } from '../atoms/Text.jsx'
import { Cards4 } from '../molecules/Cards.jsx'
import { Cards3 } from '../molecules/Cards.jsx'
import { app } from '../../Data/mysql.js'
import { hotels } from '../../Data/mysql.js'

export function Section(){
    return (  
        <div>
            <Subtitle></Subtitle>
        <div id='cards_section'>   
        {
            cards.contacts.map(contact=>
            <Cards image={contact.image}  text={contact.text}></Cards>
        )}  
         </div>
         </div>
        
    )
}






export function Section3(){
    return (
    <div>
        
        <div id='cards_section3'> 
            {
            app.link.map(data=>
            <Cards3 image={data.image}subtitle={data.subtitle}text={data.text} subtitle2={data.subtitle2} image2={data.image2}></Cards3>
            )}
        </div>
    </div> 
    )
}









export function Section2(){
    return(

        <div>
            <Subtitle2></Subtitle2>
           <div id='cards_section2'> 
            {
            destino.sitios.map(data=>
            <Cards2 image={data.image}subtitle={data.subtitle}rating={data.rating} text={data.text}></Cards2>
            )}
        </div> 
        </div>
    )
}







export function Section4(){
    return(
        <div>
            <div id='cards_section4'> 
            {
            hotels.sitios.map(data=>
            <Cards4 image={data.image}subtitle={data.subtitle}button={data.button} subtitle2={data.subtitle2} text={data.text}></Cards4>
            )}
        </div>
        </div>
    )
}