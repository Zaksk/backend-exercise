const fruits = require("../fruit.json")

class Fruits{
    constructor({genus, name, id, family, order, nutritions}){
        this.genus = genus,
        this.name = name,
        this.id = id,
        this.family = family,
        this.order = order,
        this.nutritions = nutritions
 
    }

    static showAll = () =>{
        return fruits.map(fruit => new Fruits(fruit))
    }
    
    static show = (name) => {
        const fruit = fruits.find(fruit => fruit.name.toLowerCase() === name)
        console.log(fruit)
        if (fruit){
            return new Fruits(fruit)
            
        }else{
            throw "The fruit doesn't exist."
        }
    }
    
    static create(data) {
        const newFruit = data;
        const fruit = fruits.find((fruit) => fruit.name.toLowerCase() == data.name.toLowerCase());
  
          if (fruit) {
              throw "The fruit already exists.";
          } else {
              newFruit["id"] = fruits.length + 1;
              fruits.push(newFruit);
        
              return new Fruits(newFruit)
          }
    }

    update(data){
        console.log("this",this)
        const updatedFruit = fruits.find(fruit => fruit.name.toLowerCase() === this.name.toLowerCase())
        if(updatedFruit){
            updatedFruit.name  = data.name
            updatedFruit.family = data.family
            return new Fruits(updatedFruit)
        }else{
            throw Error("Fruit not found")
        }
    }

    destroy(){
        const deletedFruit = fruits.find(fruit => fruit.name.toLowerCase() === this.name.toLowerCase())
        if(deletedFruit){
            const index = fruits.indexOf(deletedFruit)
            fruits.splice(index,1)
        }else{
            throw Error("Fruit not found")
        }
    }

}
    
    
    
    
    module.exports = Fruits
