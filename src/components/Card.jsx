import './styles/Card.css'
export default function Card(props) {
   return (
      <div className='Card'>
         <button className='button' onClick={props.onClose}>X</button>
         <h2 className='h2'>{props.name}</h2>
         <h3 className='h3'>{props.species}</h3>
         <h4 className='h4'>{props.gender} </h4>
         <img className='image' src={props.image} alt="" />
      </div>
   );
}
