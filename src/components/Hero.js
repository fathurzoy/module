

const Hero = ()=> {
    let img = 150
    return `

        <section class="hero" style="
            background-image: url(https://picsum.photos/seed/${Hero.state.imgNo}/900);
            width: 100vw;
            height: 90vh;
            background-size: cover;
            background-position: center;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 10%;
        ">
        

        <span class="material-icons arrow_left">
            keyboard_arrow_left
        </span>

        <h1>${Hero.state.nama}</h1>

        <span class="material-icons arrow_right">
            keyboard_arrow_right
        </span>

        </section>
    
    `
}

// STORAGE MEMORY STATE
Hero.state = {
    nama: "fathurzoy",
    imgNo: 158,
    prevImg: ()=>{
        Hero.state.imgNo -= 1
    }
}

export default Hero