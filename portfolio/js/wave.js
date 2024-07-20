class Wave {
    constructor(){
        const intro = document.getElementById("intro");
        console.log(intro);
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        intro.appendChild(this.canvas);
    }
}

window.onload = () => {
    new Wave();
}