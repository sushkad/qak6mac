import http from 'k6/http'

export const options = {
  vus: 10,
  iterations: '20'
} 

  
export default function () {
  http.get('https://ailh.ai/login')
}