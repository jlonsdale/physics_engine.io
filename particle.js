class Particle {

  constructor(xPos,yPos,colour,cor,cof) {
    //ball information
    this.radius = 10;
    this.mass = 0.5;
    this.colour = colour;

    //kinematic information
    this.xPos = xPos;
    this.yPos = yPos;
    this.yVel = 0;
    this.xVel = 0;
    this.goingDown = true;

    //collision information
    this.cor = cor;
    this.cof = cof;
    this.xDirection = "";

    //universe information
    this.adg = 9.81;
    this.dt = 0.1;
  }

  giveVelocity(xVel,yVel) {
      this.xVel = xVel;
    if (this.xVel<=0) {
      this.xDirection = 'left'
    }
    else {
      this.xDirection = 'right'
    }
    this.yVel = yVel;

  }

  frictionalForce() {
    return (this.cof*this.mass*this.adg)
  }

  velocity() {
    console.log(this.xDirection)
    this.yVel+=this.adg*this.dt
    if(this.yPos>=(900-this.radius)) {
    var decellerationFriction = this.frictionalForce()/this.mass
       if (this.xDirection == 'left') {
        this.xVel+=decellerationFriction*this.dt;
          if (this.xVel >= 0) {
            this.xVel = 0
          }
        }
        else {
          this.xVel-=decellerationFriction*this.dt;
            if (this.xVel <= 0) {
              this.xVel = 0
            }
            }
          }
       }



  position() {
    this.detectCollision()
    this.velocity()
    this.yPos += this.yVel*this.dt
    this.xPos += this.xVel*this.dt
  }

  detectCollision() {
    if(this.yPos+this.radius>900) {
      this.yPos = 900-this.radius
      this.yVel= -this.yVel*this.cor
    }
    if(this.yPos-this.radius<0) {
      this.yPos = this.radius
      this.yVel= -this.yVel*this.cor
    }
    if(this.xPos+this.radius>500) {
      this.xDirection = 'left'
      this.xPos = 500-this.radius
      this.xVel= -this.xVel*this.cor
    }
    if(this.xPos-this.radius<0) {
      this.xDirection = 'right'
      this.xPos = this.radius
      this.xVel= -this.xVel*this.cor
    }
  }

  }
