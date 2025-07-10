import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular';
  ngOnInit(): void {
      //  1.
  for(let i = 1; i <= 50; i++) {
    console.log(i)
  }

  // ? 2.
  for(let i = 1; i <= 50; i++) {
    if(i % 2 != 0) {
      console.log(i)
    }
  }

  // ? 3.
  for(let i = 0; i <= 50; i++) {
    if(i % 3 == 2) {
      console.log(i)
    }
  }

  // ? 4.
  let data = [
    {
      name: '小明',
      age: 10
    },
    {
      name: '小陳',
      age: 24
    },
    {
      name: '小王',
      age: 16
    }
  ]
  data.forEach((i) => {
    if(i.name == "小王") {
      i.age = 18;
    }
  })
  console.log(data)

  // ! 5. 找陣列中最小值
  let arr = [4, 6, 1, 2, 7, 9, 12, 15, 13];

  // ? 1. 展開運算子 + Math.min
  console.log(Math.min(...arr))

  // ? for 迴圈
  let i = arr[0];
  for(let data of arr) {
    if(data < i) {
      i = data;
    }
  }

  // ? forEach
  let min = arr[0];
  arr.forEach(i => {
    if(i < min) {
      min = i;
    }
  })
  console.log(min)

  // ? 6.
  let str = '你好我是Allen';
  console.log(str.split('').reverse().join(""))
  
  // ? 7.
  // let str = '你好我是Allen';
  let newArr = str.split('').slice(2).join('')
  let newArr2 = str.split('').slice(0, 2).join('')
  let finallArr = newArr.concat(',', newArr2)
  console.log(finallArr)

  // ? 7.
  // let str:string = '你好，我是 Allen';
  let getName = str.slice(str.indexOf('Allen'), str.indexOf('Allen') +5);
  console.log(getName)
    
  }
 

 }




