export class Point {
    constructor(index, x, y){
        this.x = x;
        this.y = y;
        this.fixedY = y;
        this.speed = 0.1;
        this.cur = index;
        this.max = Math.random() * 100 + 150; // 얼마나 움직일 것인지
    }

    update(){
        this.cur += this.speed; // 현재 값을 현재 스피드만큼 증가
        this.y = this.fixedY + (Math.sin(this.cur) * this.max); // 사인함수를 이용해 아래위로 움직이도록
    }
}