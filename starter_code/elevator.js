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

       this.log();
       console.log(this.requests)
       if (this.requests.length===0){
         this.stop();
       }else if (this.requests[0]>this.floor){
          let floor= this.floor;
          this.waitingList.forEach((p,index)=>{
            if (p.originFloor==floor){this._passengersEnter(p,index);}
          });
          this.passengers.forEach((p,index)=>{
            if (p.destinationFloor==floor){this._passengersLeave(p,index);}
          });
         this.log();
         this.floorUp();                  
       }else if (this.requests[0]<this.floor) {
          let floor= this.floor;
          this.waitingList.forEach((p,index)=>{
            if (p.originFloor==floor){this._passengersEnter(p,index);}
          });
          this.passengers.forEach((p,index)=>{
            if (p.destinationFloor==floor){this._passengersLeave(p,index);}
          });
         this.log();
         this.floorDown(); 
       }else if(this.requests[0]==this.floor){
        let floor= this.floor;
        this.waitingList.forEach((p,index)=>{
          if (p.startingFloor==floor){this._passengersEnter(p,index);}
        });
        this.passengers.forEach((p,index)=>{
          if (p.destinationFloor==floor){this._passengersLeave(p,index);}
        });
       this.requests.shift();
    
       }
      }

  _passengersEnter(person,index) {
    console.log(`${person.name} has enter the elevator`);
    this.passengers.push(person);
    this.waitingList.splice(index,1);
    this.requests.push(person.destinationFloor);
   }


  _passengersLeave(person,index) {
    console.log(`${person.name} has left the elevator`);
    this.passengers.splice(index,1);
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
