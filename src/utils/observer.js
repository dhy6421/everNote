// 观察者模式Observer
// 观察者模式，是指一个目标维护一系列观察者，每当有状态变化时则自动通知给这些依赖于该目标的观察者们。
// 一般其有四种组件:
// 目标Subject,维护观察者，抽象化，与业务无关。
// 观察者Observer,抽象观察者，抽象化，与业务无关。
// 具体目标ConcreteSubject,继承目标，对具体观察者通知，具体业务的数据获取、处理与通知中心。
// 具体观察者ConcreteObserver,继承观察者，须实现统一通知接口， 以便被具体目标更新数据，也是具体业务的数据展示。
// 201 8年的世界杯接近尾声，我们不妨以其为例，使用观察者模式实现积分排名与进球排名这个功能。


// 其中已知世界杯数据openAPI接口每条数据长这样:
var data = {
  id: 15,
  country: "Croatia",
  alternate_name: null,
  fifa_code: "CRO",
  group_id: 4,
  group_letter: "D",
  wins: 3,
  draws: 2,
  losses: 0,
  games_played: 5,
  points: 11,
  goals_for: 10,
  goals_against: 4,
  goal_differential: 6
},
// 我们只需使用积分points与得分goals_for即可


// 目标Subject
// 抽象目标，维护观察者，与业务无关
class Subject{
  constructor() {
    this.observers = []
  }
  registerObserver(obs) {
    this.observers.push(obs)
  }

  removeObserver(obs) {
    let i = this.observer.indexof(obs)
    if (i > -1) {
      this.observers.splice(i, 1)
    }
  }
}

// 观察者Observer
// 抽象观察者
class Observer {
  // 初始化时注册观察者
  constructor(concreteSubject) {
    if (concreteSubject) {
      concreteSubject.registerObserver(this)
    }
  }

  // 快速排序
  quickSort(arr, key) {
    if(Object.prototype.toString.call(arr) !== '[object Array]' || arr.length <=1) {
      return arr;
    }
    var largeArr = [],smallArr = [],len = arr.length;
    var pivot = arr[0];
    for (var i = 1; i < len; i++) {
      if (arr[i][key] < pivot[key]) {
        smallArr.push(arr[i])
      } else {
        largeArr.push(arr[i])
      }
    }
    return this.quickSort(largeArr, key).concat(pivot, this.quickSort(smallArr, key))
  }
}

// 具体目标ConcreteSubject 对具体观察者通知

class ConcreteSubject extends Subject{
  set data(data) {
    this.notifyObservers(data)
  }
  notifyObservers(data) {
    for (let i = 0;i < this.observers.length;i++) {
      this.observers[i].update(data);
    }
  }
}

// 世界杯积分排名，观察者PointsObserver

class PointsObserver extends Observer{
  updata(data) {
    this.renderHtml(this.quickSort(data, 'points'))
  }
  renderHtml(arr) {
    let html = ''
    for (let i = 0;i < arr.length;i++) {
      html = html + `<tr><td>${i+1}</td><td>${arr[i].country}</td><td>${arr[i].group_letter}</td><td>${arr[i].points}</td></tr>`;
    }
    document.getElementById('points').innerHTML = html
  }
}

// 世界杯进球排名，观察者GoldsObserver
class GoldsObserver extends Observer {
  update(data) {
    this.renderHtml(this.quickSort(data, 'goals_for'))
  }
  renderHtml(arr) {
    let html = ''
    for (let i = 0;i < arr.length;i++) {
      html = html + `<tr><td>${i+1}</td><td>${arr[i].country}</td><td>${arr[i].group_letter}</td><td>${arr[i].goals_for}</td></tr>`;
    }
    document.getElementById('goals_for').innerHTML = html
  }
}

