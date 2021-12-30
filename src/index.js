const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
const result = document.querySelector('.result');

let count = 0;
result.innerText = count;

const updateResult = () => {
    result.innerText = count;
};

const handleAdd = () => {
    count = count + 1;
    updateResult();
};

const handleMinus = () => {
    count = count - 1;
    updateResult();
};

plus.addEventListener('click', handleAdd);
minus.addEventListener('click', handleMinus);
