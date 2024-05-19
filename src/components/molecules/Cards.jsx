
import "../molecules/Cards.css"
import Image from "../atoms/Image"
import {Text} from "../atoms/Text"

export function Cards(props){
    return(  
        <div id="cards_box">      
          <Image image={props.image}></Image>
          <Text text={props.text}></Text>        
        </div>     
    )
}
export function Cards2(props){
    return(    
        <div id="cards_box2">
            <Image image={props.image}></Image>
            <Text text={props.subtitle}></Text>
            <Text text={props.rating}></Text>
            <Text text={props.text}></Text> 
        </div>
    )
}

export function Cards3(props){
    return(
        <div id="cards_box3"> 
        <div>
            <Image image={props.image}></Image>
        </div>     
        <div id="text">
        <Text text={props.text}></Text>  
        <Text text={props.subtitle2}></Text> 
                 
        </div>
        <div id="image">
        <Image image={props.image2}></Image> 
        </div>
      </div>    
    )
}

export function Cards4(props){
    return(
        <div id="cards_box4">  
        <div id="cards_box_aux">    
        <Image image={props.image}></Image>
        </div>
        <div id="cards_box_aux2">
        <Text text={props.subtitle}></Text> 
        <div id="button">
            <Text text={props.button}></Text>  
        </div> 
        
        <Text text={props.subtitle2}></Text> 
        
        </div>
        <div id="cards_box_aux3">
           
        <Text text={props.text}></Text> 
        </div>
        
      </div>    
    )
}

