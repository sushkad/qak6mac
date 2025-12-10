import http from 'k6/http'

export const options = {
  vus: 5,
  iterations: 10
}

export default function () {
  const url = 'https://pipeline-dev-b2bygkfbaaa0eab8.westcentralus-01.azurewebsites.net/v1/users/login'
  
  const payload = JSON.stringify({
    email: 'demo@hog.com',
    password: 'DemoHog@123'
  })
  
  const params = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  
  const response = http.post(url, payload, params)
  console.log(`Status: ${response.status}`)
}