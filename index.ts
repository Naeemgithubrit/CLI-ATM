#!/usr/bin/env node
import inquirer from "inquirer"

let myBalance = 50000;
let myPin = 1234;
let pin_check = await inquirer.prompt([
    {message:"Enter your pin",type:"number",name:"pin"}
])
if(pin_check.pin == myPin){
    console.log("Login Successful")
 
 let OperationAns = await inquirer.prompt([
        {message:"Select your option",type:"list",choices:["Withdraw","Deposit","Balance Enquiry","fast cash","Exit"],name:"option"}
 ])
    
    if(OperationAns.option == "Withdraw"){
            let withdraw = await inquirer.prompt([
                {message:"Enter amount to withdraw",type:"number",name:"amount"}
            ])
            if(withdraw.amount > myBalance){
                console.log("Insufficient Balance")
            }
            else{
                myBalance = myBalance - withdraw.amount
                console.log("Withdrawal Successful")
                console.log("Your Remaining Balance is", myBalance)
            }
        }
        else if(OperationAns.option == "Deposit"){
            let deposit = await inquirer.prompt([
                {message:"Enter amount to deposit",type:"number",name:"amount"}
            ])
            myBalance = myBalance + deposit.amount
            console.log("Deposit Successful")
            console.log("Your updated balance is",myBalance)

        }else if(OperationAns.option == "Balance Enquiry"){
            console.log("Your Balance is",myBalance)
        }
    else if(OperationAns.option == "fast cash"){
        let fastCash = await inquirer.prompt([
            {message:"Select your option",type:"list",choices:["1000","1500","2000","5000","10000"],name:"amount"}
        ])
        if(fastCash.amount > myBalance){
            console.log("Insufficient Balance")
        }
        else{
            myBalance = myBalance - fastCash.amount
            console.log("Withdrawal Successful")
            console.log("Your Remaining Balance is", myBalance)
        }
    }else if(OperationAns.option == "Exit"){
        console.log("Thank you for using my ATM")

    }
}  
else if(pin_check.pin != myPin){
    console.log("Invalid Pin")
}
