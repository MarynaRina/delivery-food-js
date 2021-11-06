const tanuki = 'tanuki';

const renderItem = (data) => {
    console.log(data);
}

fetch(`./db/${tanuki}.json`)
    .then((response) => response.json())
    .then((data) => {
        renderItem(data)
    })