const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    alert('🧡SABIA QUE DIRIAS SI🧡')
    alert('🥺GRACIAS POR HACERME LA PERSONA MAS FELIZ DEL MUNDO🥺')
    alert('💖SE QUE UN DIA PODRE VERTE, DECIRTE LO MUCHO QUE TE AMO🥺')
    alert('TENGO MUCHAS COSAS QUE DECIRTE PERO LO RESUMO EN ESTA MUSICA👉🏻👈🏻')
    location.href = 'https://www.youtube.com/watch?v=x-0KoCAV4mc';
});

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})