import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  vus: 5,           // virtual users
  duration: '30s',  // run for 30 seconds
  thresholds: {
    'http_req_failed': ['rate<0.01'],          // <1% failed requests
    'http_req_duration': ['p(95)<500']        // 95% requests < 500ms
  }
};

export default function () {
  const res = http.get('https://agreeable-meadow-0eb877f1e.6.azurestaticapps.net/');
  check(res, { 'status was 200': (r) => r.status === 200 });
  sleep(1);
}
