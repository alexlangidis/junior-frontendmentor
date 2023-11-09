const fetchAdvice = async() => {
    const res = await fetch("https://api.adviceslip.com/advice") ;
    const data = await res.json();

    const dataId = data.slip.id
    const dataText = data.slip.advice
    console.log(data);

    document.getElementById('title').innerHTML = `Advice #${dataId}` 
    document.getElementById('text').innerHTML = `"${dataText}"` 

}

const button = document.getElementById('btn');

button.addEventListener('click', function (e) {
    fetchAdvice()
});

