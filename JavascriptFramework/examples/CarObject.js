function Car(){
    this.color="red";
    this.engine="turbo";
    this.brand="BMW"

    this.getModel =function(){
        console.log("this is 2020 model");
    };
};

module.exports = new Car();