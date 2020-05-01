let button = document.querySelector('#button');
let con = document.querySelector('.container');





function checkNames() {
    let points = document.querySelector('.points');
    let inputOne = document.getElementById('one').value;
    let inputTwo = document.getElementById('two').value;
    let nameOne = inputOne.toLowerCase();
    let nameTwo = inputTwo.toLowerCase();
    if((nameOne == 'paulina' || nameOne == 'paulinka') && (nameTwo == 'krzysiek' || nameTwo == 'krzysztof')){
        points.textContent = '100% dopasowania'
        let heart = document.createElement('div');
        heart.setAttribute('class', 'heart');
        con.appendChild(heart);
        let message = document.createElement('p');
        message.textContent = `Czeka was wspaniała przyszłość pełna pięknych chwil i namiętnych uniesień!
        Jeseście sobie przeznaczeni!!`;
        con.appendChild(message);
    } else if ((nameOne == 'krzysiek' || nameOne == 'krzysztof') && (nameTwo == 'paulina' || nameTwo == 'paulinka')){
        points.textContent = '100% dopasowania'
        let heart = document.createElement('div');
        heart.setAttribute('class', 'heart');
        con.appendChild(heart);
        let message = document.createElement('p');
        message.textContent = `Czeka was wspaniała przyszłość pełna pięknych chwil i namiętnych uniesień!
        Jeseście sobie przeznaczeni!!`;
        con.appendChild(message);
    } else if ((nameOne == 'paulina' || nameOne == 'paulinka') && (nameTwo != 'krzysiek' || nameTwo != 'krzysztof')){
        points.textContent = '0% dopasowania';
        let message = document.createElement('p');
        message.textContent = `Daj sobie spokój dziewczyno! Prawdziwa miłość zaczyna się na 'K...'`;
        con.appendChild(message);
    } else if ((nameOne == 'krzysiek' || nameOne == 'krzysztof') && (nameTwo != 'paulina' || nameTwo != 'paulinka')){
        points.textContent = '0% dopasowania';
        let message = document.createElement('p');
        message.textContent = `Daj sobie spokój chłopie! Prawdziwa miłość zaczyna się na 'M...'`;
        con.appendChild(message);
    } else {
        points.textContent = '0% dopasowania';
    }
}



button.addEventListener("click", () => checkNames());