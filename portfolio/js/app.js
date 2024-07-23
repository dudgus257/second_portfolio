import {
    WaveGroup
} from './wavegroup.js';

class App {
    constructor(){
        // 캔버스 생성
        const intro = document.getElementById("intro");
        // console.log(intro);
        
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        intro.appendChild(this.canvas);

        this.waveGroup = new WaveGroup();

        // 리사이즈 이벤트
        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize();

        // 애니메이션 시작
        requestAnimationFrame(this.animate.bind(this));
    }

    resize(){
    
        // 레티나 디스플레이에서 잘 보일 수 있도록 더블 사이즈로 지정
        this.stageWidth = document.body.clientWidth;
        // console.log(stageWidth);
        this.stageHeight = document.body.clientHeight;

        this.canvas.width = this.stageWidth * 2;
        this.canvas.height = this.stageHeight * 2;
        this.ctx.scale(2, 2);

        this.waveGroup.resize(this.stageWidth, this.stageHeight);
    }

    // 캔버스를 클리어하는 것을 animate()함수에 추가
    animate(t) {
        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

        this.waveGroup.draw(this.ctx);

        requestAnimationFrame(this.animate.bind(this));
    }

}

window.onload = () => {
    new App();
}