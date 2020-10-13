// import App.js 
import App from './App.js'

const updater = ()=>{
    document.getElementById('root').innerHTML = App()
}
updater();

// export //agar bisa diambil di tempat lain
export default updater;
