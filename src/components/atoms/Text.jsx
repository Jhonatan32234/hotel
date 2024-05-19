import '../atoms/Text.css'
export function Text(props) {
    return <p id='cards_text'>{props.text}</p>
}
export function Subtitle(){
    return <h2 id='Subtitle'>Encuentra un Hospedaje Especial</h2>
}
export function Subtitle2(){
    return (    
    <div id='Subtitle2'>
        <h2 >La mejor seleccion de hoteles</h2>
        <h3> Prueba con uno de estos hoteles populares y bien valorados</h3>
        </div>
)
}
