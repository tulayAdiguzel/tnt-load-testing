import http from 'k6/http';

export default function () {
    const res = http.get('https://test.k6.io/');
    console.log(res.status); //Checking the status code as it is- In report you will see INFO section for results
    console.log(res.body);//We are checking the response body - When you print this also have many info for how to print value
}