class People {
  constructor() {
    console.log("Prototype Class created");
    this.country = 'hina'
    this.minzu = 'han'
  }
  // 修改特性的方法
  setFeature(key, val) {
    this[key] = val
  }

  // clone() {
  //   console.log("Prototype.clone invoked");
  // }
}

export default {
  people1: class People1 extends People {
    constructor() {
      super();
      console.log("people1 created");
      this.gender = 'female'
      this.name = 'Jane'
    }
  
    clone() {
      console.log('people1.clone invoked');
      let clone = new People1();
      let keys = Object.keys(this);
  
      keys.forEach(k => clone.setFeature(k, this[k]));
  
      console.log("people1 cloned");
      return clone;
    }
  },
  people2: class People2 extends People {
    constructor() {
      super();
      console.log("people2 created");
      this.gender = 'male'
      this.name = 'Mike'
    }
  
    clone() {
      console.log('people1.clone invoked');
      let clone = new People2();
      let keys = Object.keys(this);
  
      keys.forEach(k => clone.setFeature(k, this[k]));
  
      console.log("people1 cloned");
      return clone;
    }
  },
}


