#! /usr/bin/env node

import chalk from "chalk";
import { number } from "@inquirer/prompts";
import {differenceInSeconds} from "date-fns";

//question for asking countdown seconds

const  message1 = await number ({
       message : "Enter the amount of seconds to start the countdown"
})

let seconds = message1;

function startTime(value : any){
    const intTime = new Date().setSeconds(new Date().getSeconds() + value + 2); // this date method will allow to get current seconds and will add user seconds to it
    const timeInterval = new Date(intTime); // will allow to format the time 
    console.log(chalk.greenBright.italic(" \t Countdown Started! \t"));
    console.log("-" .repeat(50));

    setInterval((() => {
        const currentTime = new Date();
        const timeDifference = differenceInSeconds(intTime,currentTime);
        if(timeDifference <= 0){
            console.log(chalk.red("Timer has expired!"));
            console.log("-" .repeat(50));
            process.exit();
        }
        // calculating minutes and seconds
        const mins = Math.floor((timeDifference%(3600*24))/3600);
        const sec = Math.floor (timeDifference%60);
        console.log(chalk.blueBright(`  \t ${mins.toString().padStart(2 , "0")} : ${sec.toString().padStart(2 , "0")} \t`));
    }), 1000);
    
}
startTime(seconds);