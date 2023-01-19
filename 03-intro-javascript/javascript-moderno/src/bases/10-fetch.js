//FETCH
// giphy developers
//https://api.giphy.com/v1/gifs/random?api_key=9QRo5fCSAtaUasX6uj9agxPTJPLoJOrd
function Index(){ 
    const apiKey = '9QRo5fCSAtaUasX6uj9agxPTJPLoJOrd';
 
    const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

    // peticion.then(resp =>{
    //     // console.log(resp)
    //     resp.json().then(data=>{
    //         console.log(data);
    //     })
    // })
    // .catch(console.warn);

    //*** / promesas en cadena*** //
    peticion
        .then(resp=> resp.json()) //devuelve a una promesa
        .catch(console.warn)
        .then(({data}) =>{
            const {url}=data.images.original
            // console.log(url)
            const img = document.createElement('img');
            img.src = url;
            document.body.append(img);
        })
        .catch(console.warn);

}
export default Index;