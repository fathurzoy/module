
import Navbar from './components/Navbar.js'
import Hero from './components/Hero.js'

const App = ()=>{
    return `
    
        ${Navbar()}
        ${Hero()}

    `
}

// export //agar bisa diambil di tempat lain
export default App;