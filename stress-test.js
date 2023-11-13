import http from 'k6/http';
import { sleep } from 'k6';

export const options = {
    stages:[
        {
            duration:'10s',
            //for stress test we are changing the target value
            target:1000 // we are going to 1000 users
            //notes: we can run stress test after successfukl load test which means after target 10 get succsess then run 1000 users for stress
        },
        {
            duration:'30s',
            target:1000
        },
        {
            duration:'10s',
            target:1000
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
