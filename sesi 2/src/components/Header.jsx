/* eslint-disable react/prop-types */


export default function Header({name}){
    return(<><h1>Belajar React Sesi 1 🐲</h1>
            <p onClick={e=> {alert('TerKlik AW!')}}>Belajar React With {name ? name : 'Bang Kim'}</p></>)
}