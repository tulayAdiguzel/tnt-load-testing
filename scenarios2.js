import http from 'k6/http';
import { check } from 'k6';

export default function () {
    const res = http.get('https://test.k6.io/');

    //Part23
    check(res, {
        'status is 200': (r) => r.status === 200
    
    });

}