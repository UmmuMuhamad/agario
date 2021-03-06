function Blob(x,y,r){

    this.pos = createVector(x, y);
    this.r = r;

    this.update= function(){
        var vel = createVector(mouseX-width/2, mouseY-height/2);
        vel.sub(this.pos);
        vel.setMag(3);
        this.pos.add(vel);
    }

    this.eats = function(other){
        var d = p5.Vector.dist(this.pos, other.pos);
        if (d< this.r + other.r){
            this.r += other.r;
            return true;
        } else {
            return false;
        }
    }
    this.show = function(){
        fill(255);
        ellipse(this.pos.x, this.pos.y, this.r*2, this.r*2);
    }
}