const texts = document.querySelector('.texts');
const section = document.querySelector('section');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recoginition = new window.SpeechRecognition();

recoginition.interimResults = true; // jaise hi hum bol te hai vese hi vo print karta agar hum false like ge tho hamare baat kaatam hone ke baad print hoga

let p = document.createElement('p');


recoginition.addEventListener('result', (e) => {
    const text = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('');

    p.innerText = text;
    texts.appendChild(p)
    console.log(text)

    if (e.results[0].isFinal) {
        if (text.includes('hello')) {
            p = document.createElement('p');
            p.classList.add('reply');
            p.innerText = 'hi'
            texts.appendChild(p)

        }

        if (text.includes('good morning')) {
            p = document.createElement('p');
            p.classList.add('reply');
            p.innerText = 'Good morning, sir.'
            texts.appendChild(p)
        }

        if (text.includes('red') || text.includes('Red')) {
            section.style.background = `red`;
        };

        if (text.includes('blue') || text.includes('Blue')) {
            section.style.background = `blue`;
        };

        if (text.includes('green') || text.includes('Green')) {
            section.style.background = `green`;
        };

        if (text.includes('scroll down') || text.includes('down')) {
            section.style.minHeight = `${200}vh`;
            scrollDOWN();
        }

        if (text.includes('scroll up') || text.includes('up')) {
            section.style.minHeight = `${200}vh`;
            scrollUP();
        }

        if (text.includes('close')) {
            window.close();
        }


        p = document.createElement('p')
    }
});

recoginition.addEventListener('end', () => {
    recoginition.start();
});

recoginition.start();

function scrollDOWN() {
    window.scrollBy(0, 100);
}

function scrollUP() {
    window.scrollBy(0, -100);
}