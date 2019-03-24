export default class BookBuilder {
  constructor() {
    this.name = ''
    this.author = ''
    this.price = 0
    this.category = ''

    Object.keys(this).forEach(key => {
      const withName = `with${key.substring(0,1).toUpperCase()}${key.substring(1)}`
      // console.log(withName)
      this[withName] = value => {
        this[key] = value
        return this
      }
    })

  }

  // withName(name) {
  //   this.name = name;
  //   return this;
  // }
  // withAuthor(author) {
  //   this.author = author;
  //   return this;
  // }
  // withPrice(price) {
  //   this.price = price;
  //   return this;
  // }
  // withCategory(category) {
  //   this.category = category;
  //   return this;
  // }

  //此处四个方法可简化统一命名withXXX


  build() {
    // const keysNoFunction = Object.keys(this).filter(key => {
    //   typeof this[key] !== 'function'
    // })
    // return keysNoFunction.reduce((returnValue, key) => {
    //   // console.log(returnValue, key);
    //   return {
    //     ...returnValue,
    //     [key]: this[key]
    //   }
    // }, {})
    let result = {}
    Object.keys(this).forEach(key => {
      if(typeof this[key] !== 'function') {
        result[key] = this[key]
      }
    })
    return result
    // return {
    //   name: this.name,
    //   author: this.author,
    //   prices: this.price,
    //   category: this.category
    // }
  }
}

//调用建造者类
const book = new BookBuilder()
console.log(book)
//   .withName("高效能人士的七个习惯")
//   .withAuthor('史蒂芬·柯维')
//   .withPrice(51)
//   .withCategory('励志')
//   .build()