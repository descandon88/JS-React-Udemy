// Async-Await
function Index(){ 
        // const getImagenPromesa = ()=>{
    //     const promesa = new Promise((resolve,reject)=>{
    //         resolve('https:/ajskdhaskjdhajs.com')
    //     })
    // }
    // getImagenPromesa()
    // .then(console.log)

    const getImagen = async ()=> {
        // return 'https:/ajskdhaskjdhajs.com';
        try {
            const apiKey = '9QRo5fCSAtaUasX6uj9agxPTJPLoJOrd';
            const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
            const {data} = await resp.json()   
            const {url} =data.images.original
            const img = document.createElement('img');
            img.src = url;
            document.body.append(img);
        } catch (error) {
            // manejo de error
            console.log(error)
        }
    
        
      
    }
    // console.log(getImagen());
    // getImagen().then(console.log)
    getImagen();

 
   

   
    // peticion
    //     .then(resp=> resp.json()) //devuelve a una promesa
        // .catch(console.warn)
        // .then(({data}) =>{
        //     const {url}=data.images.original
        //     // console.log(url)
        //     const img = document.createElement('img');
        //     img.src = url;
        //     document.body.append(img);
    //     })
    //     .catch(console.warn);
}
export default Index;