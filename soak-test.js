import http from 'k6/http';
import { sleep } from 'k6';

//

export const options = {
    stages:[
        {
            duration:'5m',//here is the ramp up stage
            target:1000
        },
        {
            duration:'24h',//we can check here long duration- 
            //We are only streching this we are not touching ramp up and ramp down- So we are checking for soak test how to appllication is running in this stages
            //We constant load for long period of the time
            //What kind of issue that saok take and load is couldn't?
            //The answer is can be memory leaks and more answer is section2 part 19
            target:1000
        },
        {
            duration:'5m',//ramp-down stage is here
            target:0
        }
    ]
   
}

export default function () {
    http.get('https://test.k6.io');
    sleep(1);
    //for adding get request
    http.get('https://test.k6.io/contacts.php');
    sleep(2);
    http.get('https://test.k6.io/news.php');
    sleep(2);
    
}
