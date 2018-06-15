
async function getPosts() {

    const resp = await fetch(url);
    const data = await resp.json();

    return data;
}

getPosts().then(posts => console.log(posts));
