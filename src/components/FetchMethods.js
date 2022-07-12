export async function getFetch(path) {
    let response = await fetch(`${process.env.REACT_APP_API_URL}/${path}`);
    console.log(response);
    return await response.json();
}

export async function postFetch (path, body) {
    let response = await fetch(`${process.env.REACT_APP_API_URL}/${path}`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    });
    return await response.json();
}