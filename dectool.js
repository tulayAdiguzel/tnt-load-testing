import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
    duration: "1m",
    vus: 10,
    thresholds: {
      http_req_duration: ["p(95)<500"] // 95 percent of response times must be below 500ms
    }
  };

export default function () {
    http.get('https://declarations.elsevier.com/');
    sleep(1);
}