class Elevator {
  constructor(){
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.direction="up";
    this.requests= [];
    this.waitingList=[];
    this.passengers=[];
    this.interval =0;
  }

 //start a setInterval call the update function every second
      start() {
        this.interval=setInterval(()=>{
          this.update()}
          ,1000);
      }

    // should stop the elevator's setInterval listening for requests--USE SETTIMEOUT TO CREATE LISTENERS
      stop() {
          clearInterval(this.interval);
      }

      update() {
        // si no esta vacía mi waitinglist
      // this.log();
       console.log(this.requests)
       if (this.requests.length===0){
         this.stop();
        }else {
          this.waitingList.forEach((p,index)=>{
            if (p.startingFloor==this.floor){
              this._passengersEnter(p,index);}
           // console.log(this.requests)
          });
             console.log(this.requests)
          // NO ENTIENDO PORQUE NO SE VAN LOS DOS YA QUE ES FOR EACH Y DEBERIA SACAR A TODOS LOS QUE SE BAJEN EN ESTE PISO NO?
          this.passengers.forEach((p,index)=>{
            if (p.destinationFloor==this.floor){this._passengersLeave(p,index);}
          });
          this.log();
          if (this.requests[0]>this.floor){
            this.floorUp();
          } else if (this.requests[0]<this.floor){
            this.floorDown();
          }else{
            this.requests.shift();
          }

        }
            
      }

  _passengersEnter(person,index) {
    console.log(`${person.name} has enter the elevator`);
    this.passengers.push(person);
    console.log(this.requests.indexOf(person.startingFloor));
    this.requests.splice(this.requests.indexOf(person.startingFloor),1);
    this.waitingList.splice(index,1);
    this.requests.push(person.destinationFloor);
   }


  _passengersLeave(person,index) {
    console.log(`${person.name} has left the elevator`);
    this.passengers.splice(index,1);
    this.requests.splice(this.requests.indexOf(person.destinationFloor),1);
   }

// to update the current floor by incrementing it by one. 
  floorUp() {
    if (this.floor<this.MAXFLOOR){this.floor+=1;}
   }

  floorDown() {
    if (this.floor>0){this.floor-=1;}
   }

  call(person){ 
    this.requests.push(person.startingFloor);
    this.waitingList.push(person);
  }

  log() {
    console.log (`Direction: ${this.direction} | Floor: ${this.floor}`);
   }
}

module.exports = Elevator;
