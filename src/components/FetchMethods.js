const headers = { 'Content-Type': 'application/json' }

async function getFetch(path) {
  let urlApi = process.env.REACT_APP_API_URL
  let response = await fetch(`${urlApi}/${path}`)
  return (await response).json()
}

async function postFetch(path, body) {
  let urlApi = process.env.REACT_APP_API_URL
  let response = await fetch(`${urlApi}/${path}`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(body),
  })
  return (await response).json()
}

export { getFetch, postFetch }
