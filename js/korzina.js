let kolvo = 0;
let sum = 0;
function perehod(){
    
    p=window.localStorage.getItem('perehod')
    if(p==1){
        window.open('../html/profile.html')
    }
    else{
        window.open('../html/log.html')
    }
}

function formatPrice(price) {
    return new Intl.NumberFormat('ru-RU').format(price);
}

function updateCartDisplay() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const itemsContainer = document.querySelector('.tovari');
    const totalElement = document.getElementById('sum');
    const countElement = document.getElementById('kolvo');
    
    document.querySelectorAll('[class^="a"], [class^="hr"]').forEach(el => {
        el.style.display = 'none';
    });

    // Показываем только элементы из корзины
    cart.forEach((item, index) => {
        const itemNumber = index + 1;
        const itemElement = document.querySelector(`.a${itemNumber}`);
        const hrElement = document.querySelector(`.hr${itemNumber}`);
        
        if (itemElement && hrElement) {
            // Заполняем данные
            itemElement.querySelector('.opis1').textContent = item.name;
            itemElement.querySelector('.cost1').textContent = `${formatPrice(item.price)} руб.`;
            itemElement.querySelector('img').src = item.image;
            itemElement.querySelector('a').onclick = () => del(item.id);
            
            // Настраиваем ширину изображения
            const imgContainer = itemElement.querySelector('.fon img');
            imgContainer.style.width = `${getImageWidth(item.id)}%`;
            function getImageWidth(productId) {
                const widths = {
                    'a': 100, 
                    'b': 60,   
                    'c': 50,    
                    'd': 80,   
                    'e': 90,  
                    'f': 90,  
                    'g': 80,    
                    'h': 80,    
                    'i': 40,   
                    'j': 40,    
                    'k': 40,    
                    'l': 35,    
                    'm': 40,    
                    'n': 35,    
                    'o': 40,    
                    'p': 45,    
                    'q': 90,    
                    'r': 90,    
                    's': 90,    
                    't': 90    
                };
                return widths[productId] || 90; // Значение по умолчанию
            }
            
            // Показываем элементы
            itemElement.style.display = 'flex';
            hrElement.style.display = 'block';
        }
    });

    // Обновляем итоговые значения
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    totalElement.textContent = formatPrice(total);
    countElement.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
}

// Функция удаления товара
function del(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    
    updateCartDisplay();
    if (window.opener) window.opener.updateButtonsState();
}

// Инициализация при загрузке
window.onload = () => {
    updateCartDisplay();
    
    // Добавляем проверку пустой корзины для кнопки
    document.querySelector('.buy').addEventListener('click', function(e) {
        if (!JSON.parse(localStorage.getItem('cart'))?.length) {
            e.preventDefault();
            alert('Корзина пуста!');
        }
    });
};

// function del(a){
//         if(a=='a'){
            
//             console.log(tov)
//             document.querySelector('.a1').style.display="none";
//             document.querySelector('.hr1').style.display="none";
//             kolvo=kolvo-1;
//             sum=sum-20000;
//             document.getElementById('kolvo').innerHTML=kolvo;
//             document.getElementById('sum').innerHTML=sum;
//             tov[0]=0
//         }
//         if(a=='b'){
//             document.querySelector('.a2').style.display="none";
//             document.querySelector('.hr2').style.display="none";
//             kolvo=kolvo-1;
//             sum=sum-7599;
//             document.getElementById('kolvo').innerHTML=kolvo;
//             document.getElementById('sum').innerHTML=sum;
//         }
//         if(a=='c'){
//             document.querySelector('.a3').style.display="none";
//             document.querySelector('.hr3').style.display="none";
//             kolvo=kolvo-1;
//             sum=sum-6900;
//             document.getElementById('kolvo').innerHTML=kolvo;
//             document.getElementById('sum').innerHTML=sum;
//         }
//         if(a=='d'){
//             document.querySelector('.a4').style.display="none";
//             document.querySelector('.hr4').style.display="none";
//             kolvo=kolvo-1;
//             sum=sum-2000;
//             document.getElementById('kolvo').innerHTML=kolvo;
//             document.getElementById('sum').innerHTML=sum;
//         }
//         if(a=='e'){
//             document.querySelector('.a5').style.display="none";
//             document.querySelector('.hr5').style.display="none";
//             kolvo=kolvo-1;
//             sum=sum-20000;
//             document.getElementById('kolvo').innerHTML=kolvo;
//             document.getElementById('sum').innerHTML=sum;
//         }
//         if(a=='f'){
//             document.querySelector('.a6').style.display="none";
//             document.querySelector('.hr6').style.display="none";
//             kolvo=kolvo-1;
//             sum=sum-23100;
//             document.getElementById('kolvo').innerHTML=kolvo;
//             document.getElementById('sum').innerHTML=sum;
//         }
//         if(a=='g'){
//             document.querySelector('.a7').style.display="none";
//             document.querySelector('.hr7').style.display="none";
//             kolvo=kolvo-1;
//             sum=sum-18900;
//             document.getElementById('kolvo').innerHTML=kolvo;
//             document.getElementById('sum').innerHTML=sum;
//         }
//         if(a=='h'){
//             document.querySelector('.a8').style.display="none";
//             document.querySelector('.hr8').style.display="none";
//             kolvo=kolvo-1;
//             sum=sum-15999;
//             document.getElementById('kolvo').innerHTML=kolvo;
//             document.getElementById('sum').innerHTML=sum;
//         }
//         if(a=='i'){
//             document.querySelector('.a9').style.display="none";
//             document.querySelector('.hr9').style.display="none";
//             kolvo=kolvo-1;
//             sum=sum-54000;
//             document.getElementById('kolvo').innerHTML=kolvo;
//             document.getElementById('sum').innerHTML=sum;
//         }
//         if(a=='j'){
//             document.querySelector('.a10').style.display="none";
//             document.querySelector('.hr10').style.display="none";
//             kolvo=kolvo-1;
//             sum=sum-63500;
//             document.getElementById('kolvo').innerHTML=kolvo;
//             document.getElementById('sum').innerHTML=sum;
//         }
//         if(a=='k'){
//             document.querySelector('.a11').style.display="none";
//             document.querySelector('.hr11').style.display="none";
//             kolvo=kolvo-1;
//             sum=sum-66700;
//             document.getElementById('kolvo').innerHTML=kolvo;
//             document.getElementById('sum').innerHTML=sum;
//         }
//         if(a=='l'){
//             document.querySelector('.a12').style.display="none";
//             document.querySelector('.hr12').style.display="none";
//             kolvo=kolvo-1;
//             sum=sum-78999;
//             document.getElementById('kolvo').innerHTML=kolvo;
//             document.getElementById('sum').innerHTML=sum;
//         }
//         if(a=='m'){
//             document.querySelector('.a13').style.display="none";
//             document.querySelector('.hr13').style.display="none";
//             kolvo=kolvo-1;
//             sum=sum-179990;
//             document.getElementById('kolvo').innerHTML=kolvo;
//             document.getElementById('sum').innerHTML=sum;
//         }
//         if(a=='n'){
//             document.querySelector('.a14').style.display="none";
//             document.querySelector('.hr14').style.display="none";
//             kolvo=kolvo-1;
//             sum=sum-119990;
//             document.getElementById('kolvo').innerHTML=kolvo;
//             document.getElementById('sum').innerHTML=sum;
//         }
//         if(a=='o'){
//             document.querySelector('.a15').style.display="none";
//             document.querySelector('.hr15').style.display="none";
//             kolvo=kolvo-1;
//             sum=sum-135990;
//             document.getElementById('kolvo').innerHTML=kolvo;
//             document.getElementById('sum').innerHTML=sum;
//         }
//         if(a=='p'){
//             document.querySelector('.a16').style.display="none";
//             document.querySelector('.hr16').style.display="none";
//             kolvo=kolvo-1;
//             sum=sum-289990;
//             document.getElementById('kolvo').innerHTML=kolvo;
//             document.getElementById('sum').innerHTML=sum;
//         }
//         if(a=='q'){
//             document.querySelector('.a17').style.display="none";
//             document.querySelector('.hr17').style.display="none";
//             kolvo=kolvo-1;
//             sum=sum-27650;
//             document.getElementById('kolvo').innerHTML=kolvo;
//             document.getElementById('sum').innerHTML=sum;
//         }
//         if(a=='r'){
//             document.querySelector('.a18').style.display="none";
//             document.querySelector('.hr18').style.display="none";
//             kolvo=kolvo-1;
//             sum=sum-27600;
//             document.getElementById('kolvo').innerHTML=kolvo;
//             document.getElementById('sum').innerHTML=sum;
//         }
//         if(a=='s'){
//             document.querySelector('.a19').style.display="none";
//             document.querySelector('.hr19').style.display="none";
//             kolvo=kolvo-1;
//             sum=sum-150000;
//             document.getElementById('kolvo').innerHTML=kolvo;
//             document.getElementById('sum').innerHTML=sum;
//         }
//         if(a=='t'){
//             document.querySelector('.a20').style.display="none";
//             document.querySelector('.hr20').style.display="none";
//             kolvo=kolvo-1;
//             sum=sum-130000;
//             document.getElementById('kolvo').innerHTML=kolvo;
//             document.getElementById('sum').innerHTML=sum;
//         }
// }

// if(tov.includes("a")){
//     document.querySelector('.a1').style.display="flex";
//     document.querySelector('.hr1').style.display="block";
//     kolvo=kolvo+1;
//     sum=sum+20000
// }
// if(tov.includes("b")){
//     document.querySelector('.a2').style.display="flex";
//     document.querySelector('.hr2').style.display="block";
//     kolvo=kolvo+1;
//     sum=sum+7599
// }
// if(tov.includes("c")){
//     document.querySelector('.a3').style.display="flex";
//     document.querySelector('.hr3').style.display="block";
//     kolvo=kolvo+1;
//     sum=sum+6900
// }
// if(tov.includes("d")){
//     document.querySelector('.a4').style.display="flex";
//     document.querySelector('.hr4').style.display="block";
//     kolvo=kolvo+1;
//     sum=sum+2000
// }
// if (tov.includes("e")) {
//     document.querySelector('.a5').style.display = "flex";
//     document.querySelector('.hr5').style.display = "block";
//     kolvo=kolvo+1;
//     sum=sum+20000
// }

// if (tov.includes("f")) {
//     document.querySelector('.a6').style.display = "flex";
//     document.querySelector('.hr6').style.display = "block";
//     kolvo=kolvo+1;
//     sum=sum+23100
// }

// if (tov.includes("g")) {
//     document.querySelector('.a7').style.display = "flex";
//     document.querySelector('.hr7').style.display = "block";
//     kolvo=kolvo+1;
//     sum=sum+18900
// }
// if (tov.includes("h")) {
//     document.querySelector('.a8').style.display = "flex";
//     document.querySelector('.hr8').style.display = "block";
//     kolvo=kolvo+1;
//     sum=sum+15999
// }
// if (tov.includes("i")) {
//     document.querySelector('.a9').style.display = "flex";
//     document.querySelector('.hr9').style.display = "block";
//     kolvo=kolvo+1;
//     sum=sum+54000
// }
// if (tov.includes("j")) {
//     document.querySelector('.a10').style.display = "flex";
//     document.querySelector('.hr10').style.display = "block";
//     kolvo=kolvo+1;
//     sum=sum+63500
// }
// if (tov.includes("k")) {
//     document.querySelector('.a11').style.display = "flex";
//     document.querySelector('.hr11').style.display = "block";
//     kolvo=kolvo+1;
//     sum=sum+66700
// }
// if (tov.includes("l")) {
//     document.querySelector('.a12').style.display = "flex";
//     document.querySelector('.hr12').style.display = "block";
//     kolvo=kolvo+1;
//     sum=sum+78999
// }
// if (tov.includes("m")) {
//     document.querySelector('.a13').style.display = "flex";
//     document.querySelector('.hr13').style.display = "block";
//     kolvo=kolvo+1;
//     sum=sum+179990
// }
// if (tov.includes("n")) {
//     document.querySelector('.a14').style.display = "flex";
//     document.querySelector('.hr14').style.display = "block";
//     kolvo=kolvo+1;
//     sum=sum+119990
// }
// if (tov.includes("o")) {
//     document.querySelector('.a15').style.display = "flex";
//     document.querySelector('.hr15').style.display = "block";
//     kolvo=kolvo+1;
//     sum=sum+135990
// }
// if (tov.includes("p")) {
//     document.querySelector('.a16').style.display = "flex";
//     document.querySelector('.hr16').style.display = "block";
//     kolvo=kolvo+1;
//     sum=sum+289999
// }
// if (tov.includes("q")) {
//     document.querySelector('.a17').style.display = "flex";
//     document.querySelector('.hr17').style.display = "block";
//     kolvo=kolvo+1;
//     sum=sum+27650
// }
// if (tov.includes("r")) {
//     document.querySelector('.a18').style.display = "flex";
//     document.querySelector('.hr18').style.display = "block";
//     kolvo=kolvo+1;
//     sum=sum+27600
// }
// if (tov.includes("s")) {
//     document.querySelector('.a19').style.display = "flex";
//     document.querySelector('.hr19').style.display = "block";
//     kolvo=kolvo+1;
//     sum=sum+150000
// }
// if (tov.includes("t")) {
//     document.querySelector('.a20').style.display = "flex";
//     document.querySelector('.hr20').style.display = "block";
//     kolvo=kolvo+1;
//     sum=sum+130000
// }
// document.getElementById('kolvo').innerHTML=kolvo;
// document.getElementById('sum').innerHTML=sum;