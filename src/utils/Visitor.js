// 在访问者模式（Visitor Pattern）中，我们使用了一个访问者类，它改变了元素类的执行算法。通过这种方式，元素的执行算法可以随着访问者改变而改变。这种类型的设计模式属于行为型模式。根据模式，元素对象已接受访问者对象，这样访问者对象就可以处理元素对象上的操作。

// 意图：主要将数据结构与数据操作分离。

// 主要解决：稳定的数据结构和易变的操作耦合问题。


// 例子：
// 比如我有一个账单，账单有收入，支出两个固定方法。但是访问账单的人不确定，有可能是一个或者多个


// Visitor类
/**
 * 访问者接口
 */
class AccountBookView {
  // 查看消费的单子
  viewConsumer(consumerBill){
      throw new Error("This method must be overwritten!");
  }

  // 查看收入单子
  viewIncome(incomeBill){
      throw new Error("This method must be overwritten!");
  }
}

// ConcreteVisitor 类

// 老板类：访问者是老板，主要查看总支出和总收入
class Boss extends AccountBookView {

  constructor(){
      this.totalConsumer = 0;
      this.totalIncome = 0;
  }
  // 查看消费的单子
  viewConsumer(consumerBill) {
      this.totalConsumer = this.totalConsumer + consumerBill.getAmount();
  }

  // 查看收入单子
  viewIncome(incomeBill) {
      this.totalIncome = this.totalIncome + incomeBill.getAmount();
  }

  getTotalConsumer() {
      console.log("老板一共消费了" + this.totalConsumer);
  }

  getTotalIncome() {
      console.log("老板一共收入了" + this.totalIncome);
  }
}

/**
* 会计类：访问者是会计，主要记录每笔单子
*/

class CPA extends AccountBookView {
  constructor(){
    this.count = 0;
  }
  // 查看消费的单子
  viewConsumer(consumerBill) {
    this.count++;
    if (consumerBill.getItem() == "消费") {
      console.log("第" + count + "个单子消费了：" + consumerBill.getAmount());
    }
  }
  // 查看收入单子
  viewIncome(incomeBill) {
    if (incomeBill.getItem() == "收入") {
      console.log("第" + count + "个单子收入了：" + incomeBill.getAmount());
    }
  }

}

