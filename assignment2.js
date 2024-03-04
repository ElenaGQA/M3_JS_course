const appartment = {
    city: "Toronto",
    street: "Lakeshore Blvd",
    rent_price: 3000,
    rooms: 4,
    getDetails: function (){
      return "The appartment on " + this.street + ", " + 
      this.city + " costs " + this.rent_price + 
      " dollars and has " + this.rooms + " rooms in total." 
    }
}
console.log (appartment.getDetails())




const appartment1 = {
    city: "New York",
    street: "5th Avenue",
    price: 5000,
    rooms: ["master bedroom", "kids room", "washroom", "kitchen"],
    getDetails1: function () {
        let result = "The appartment on " + this.street + ", " +
        this.city + " cost " + this.price + " dollars and has " +
        this.rooms.length + " rooms in total.";
        return result;
    }

}
console.log (appartment1.getDetails1());


function getDetails(appartment_object) {
    let result = "The appartment on " + appartment_object.street + ", " +
    appartment_object.city + " cost " + appartment_object.price + " dollars and has " +
    appartment_object.rooms.length + " rooms in total.";
    return result;
}

const appartment2 = {
    city: "Kiev",
    street: "Pavlova",
    price: 1500,
    rooms: ["master bedroom", "kids room", "washroom", "kitchen", "familty room"],
   
}

const appartment3 = {
    city: "Talin",
    street: "7th street",
    price: 3000,
    rooms: ["washroom", "kitchen", "familty room"],
   
}
console.log (getDetails(appartment2));
console.log (getDetails(appartment3));