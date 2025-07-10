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

 
  //  ? 1.
  let allenWallet = 200;
  let burgerPrice = 50;
  let frenchFricePrice = 40;
  let restMoney = allenWallet - (burgerPrice + frenchFricePrice);
  console.log('Allen剩下'+restMoney+'元')

  // ? 2.
  // let allenWallet = 5000;
  // let burgerPrice = 50;
  // let frenchFricePrice = 40;
  // let restMoney = 5000-((burgerPrice*10+frenchFricePrice*10)*0.9)
  // console.log('剩下'+restMoney);
  
  // ? 3.
  let jsonData = [
    {
      userName: 'Allen',
      payMoney: 500
    },
    {
      userName: 'Ben',
      payMoney: 20
    },
    {
      userName: 'Eric',
      payMoney: 120
    }
  ]
 
  let vipUsers = [];
  for(let data of jsonData) {
    if(data.payMoney > 200) {
      vipUsers.push(data.userName)
    }
  }
  console.log(vipUsers)

  // forEach
  // jsonData.forEach(i => {
  //   if (i.payMoney >= 200) {
  //     console.log(`${i.userName} 有符合 VIP 資格`)
  //   }
  // })

  // ? 4.

  this.showBmi(85, 182) // showBmi 呼叫

}

showBmi(weight: number, height: number) {
  let bmi: number = Number((weight / (height / 100) ** 2).toFixed(2));

  if (bmi < 18.5) {
    console.log(`BMI 為 ${bmi}，體重過輕`)
  }else if(bmi >= 18.5 && bmi < 24) {
    console.log(`BMI 為 ${bmi}，體重正常`)
  }else if(bmi >= 24 && bmi < 27) {
    console.log(`BMI 為 ${bmi}，體重過重`)
  }else if(bmi >= 27 && bmi < 30) {
    console.log(`BMI 為 ${bmi}，輕度肥胖`)
  }else if(bmi >= 30 && bmi < 35) {
    console.log(`BMI 為 ${bmi}，中度肥胖`)
  }else if(bmi >= 35) {
    console.log(`BMI 為 ${bmi}，重度肥胖`)
  }

}

 


}

