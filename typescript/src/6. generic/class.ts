
/**
 * 제너릭 클래스
 */

class NumberList {
  constructor(private list : number[]){}

  push(data : number){
    this.list.push(data);
  }

  pop() {
    return this.list.pop();
  }

  print(){
    console.log(this.list);
  }
}

const numberList = new NumberList([1,2,3]);
numberList.pop();
numberList.push(4);
numberList.print(); // [1,2,4]


class StringList {
  constructor(private list : string[]){}

  push(data : string){
    this.list.push(data);
  }

  pop() {
    return this.list.pop();
  }

  print(){
    console.log(this.list);
  }
}

const stringList = new StringList(['a','b','c']);
stringList.pop();
stringList.push('d');
stringList.print(); // ['a','b','d']



// 제너릭 클래스로 리팩토링
class List<T>{
  constructor(private list : T[]){}

  push(data : T){
    this.list.push(data);
  }

  pop() : T | undefined {
    return this.list.pop();
  }

  print(){
    console.log(this.list);
  }
};

const genericNumberList = new List([1,2,3]);
genericNumberList.pop();
genericNumberList.push(4);
genericNumberList.print(); // [1,2,4]

const genericStringList = new List(['a','b','c']);
genericStringList.pop();
genericStringList.push('d');
genericStringList.print(); // ['a','b','d']

