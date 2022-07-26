export class gameState {
  palett = {min: 1, max: 9};
  grid = [];
  
  constructor(){
    
  }
  
  generateGrid (){
    let numbers = [];
    
    for(let x = 0;x<3;x++){
      this.grid.push([]);
      for(let y = 0;y<3;y++){
        let type = "number";
        let content;
        if(x%2 == 0 && y%2!=0) {
          type = "operator"
          content = "-"
        }
        else if(x%2 != 0 && y%2 == 0) {
          type = "operator"
          content = "+"
        }
        grid.push(new Cell())
      }
    }
  }
}

class Cell {
  constructor (type, content) {
    this.type = type;
    this.content = content;
  }
}
