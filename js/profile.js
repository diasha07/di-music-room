let p=1;
let a = window.localStorage.getItem("login")
document.querySelector(".name").innerHTML=a
function delacc(){
    p=0;
    window.localStorage.setItem("perehod", p)
}
function save() {
    const inputs = document.querySelectorAll('.vvod input, .vvod select');
    const values = {
        number: inputs[0].value,
        address: inputs[1].value,
        status: inputs[2].value
    };
    
    localStorage.setItem('formData', JSON.stringify(values));
    alert('Данные сохранены!');
}

document.addEventListener('DOMContentLoaded', () => {
    const savedData = localStorage.getItem('formData');
    if(savedData) {
        const values = JSON.parse(savedData);
        const inputs = document.querySelectorAll('.vvod input, .vvod select');
        
        inputs[0].value = values.number;
        inputs[1].value = values.address;
        inputs[2].value = values.status;
    }
});