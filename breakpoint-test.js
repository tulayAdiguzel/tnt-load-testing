import http from 'k6/http';
import { sleep } from 'k6';

//Breakpoint test we only have one stage and should be long duration like 2h

export const options = {
    stages:[
        {
            duration:'2h',
            target:10000
        }
    ]
   
}

export default function () {
    http.get('https://test.k6.io');
    sleep(1);
    
}
