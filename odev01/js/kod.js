

/**function goster()
{
let image = document.getElementById('kedi').src="./img/kopek2.jpeg";
}**/

/**const photos = [
    {
        kart1 = document.getElementById("kedi").src= "./img/kedi.jpeg"
    },
    {
        kart2 = document.getElementById("kopek").src= "./img/kopek.jpeg"
    },
    {
        kart3 = document.getElementById("kopek2").src= "./img/kopek2.jpeg"
    }
]; 

let latestIndex;
const newKart = () => {

    let index = Math.floor(Math.random()*photos.length)
    if(latestIndex == index) {
        index = (index + 1) % photos.length
    }
    const kart = photos[index];
    latestIndex = index;

    displayKart(kart);
}**/

let image = document.getElementById('kedi');
        function goster() {
        
        this.src = "./img/kedi.jpeg";
        
         /** alert('Kazandın!!! Tebrik ederiz (easywin:(  )'); */
        
        } 
        
        

        image.addEventListener('click',goster);

       

        /** js ile ilk deneme daha çok fırın ekmek  lazım :) */

             





