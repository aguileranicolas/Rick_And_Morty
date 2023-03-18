import './styles/SearchBar.css'
export default function SearchBar(props) {
   return (
      <div>
         <input type='search' />
      <button onClick={() => props.onSearch('Nico')}>Agregar</button>
      </div>
   );
}
