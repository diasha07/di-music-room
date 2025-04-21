const products = [
    { id: 'a', name: 'Синтезатор (цвет черный)', price: 20000, image: '../folder/клавиши1-Photoroom 1.png' },
    { id: 'b', name: 'Микрофон (цвет черный)', price: 7599, image: '../folder/микрофон1-Photoroom 1.png' },
    { id: 'c', name: 'Чехол для гитары (цвет черный)', price: 6900, image: '../folder/чехол-Photoroom 1.png' },
    { id: 'd', name: 'Медиаторы(6 шт.)', price: 2000, image: '../folder/медиатор-Photoroom (1) 1.png' },
    { id: 'e', name: 'Музыкальная Пластинка Gorillaz', price: 20000, image: '../folder/image 7.png' },
    { id: 'f', name: 'Музыкальная Пластинка Linkin Park', price: 23100, image: '../folder/image 8 (1).png' },
    { id: 'g', name: 'Музыкальная Пластинка System of a down', price: 18900, image: '../folder/image 9 (1).png' },
    { id: 'h', name: 'Музыкальная Пластинка The Black Keys', price: 15999, image: '../folder/image 10.png' },
    { id: 'i', name: 'Гитара (цвет голубой)', price: 54000, image: '../folder/гитара1-Photoroom 1.png' },
    { id: 'j', name: 'Гитара (цвет коричневый)', price: 63500, image: '../folder/гиатра2-Photoroom 1.png' },
    { id: 'k', name: 'Гитара (цвет черный)', price: 66700, image: '../folder/гиатра3-Photoroom 1.png' },
    { id: 'l', name: 'Гитара (цвет синий)', price: 78999, image: '../folder/гитара4-Photoroom 1.png' },
    { id: 'm', name: 'Электрогитара(цвет фиолетовый)', price: 179990, image: '../folder/электрогитара1-Photoroom 1.png' },
    { id: 'n', name: 'Электрогитара(цвет неоновый, зеленый)', price: 119990, image: '../folder/электрогитара2-Photoroom 1.png' },
    { id: 'o', name: 'Электрогитара(цвет красный)', price: 135990, image: '../folder/электрогитара3-Photoroom 1.png' },
    { id: 'p', name: 'Электрогитара(цвет зеленый)', price: 289999, image: '../folder/электрогитара4-Photoroom 1.png' },
    { id: 'q', name: 'Барабан (цвет черный)', price: 27650, image: '../folder/барабан1-Photoroom 1.png' },
    { id: 'r', name: 'Барабан (цвет белый)', price: 27600, image: '../folder/барабан2-Photoroom 1.png' },
    { id: 's', name: 'Барабанная установка (цвет бирюзовый)', price: 150000, image: '../folder/барабан3-Photoroom 1.png' },
    { id: 't', name: 'Барабанная установка (цвет красный)', price: 130000, image: '../folder/барабан4-Photoroom 1.png' }
];

// Функция для добавления в корзину
function korz(productId) {
    addToCart(productId);
    if (productId == 'a') {
        if (document.querySelector(".korzina1").innerHTML == "В корзину") {
            document.querySelector(".korzina1").innerHTML = "В корзине";
            document.querySelector(".korzina1").style.backgroundColor = "#F5F5F5";
            document.querySelector(".korzina1").style.color = "#690C01";
        } else {
            document.querySelector(".korzina1").innerHTML = "В корзину";
            document.querySelector(".korzina1").style.backgroundColor = "#690C01";
            document.querySelector(".korzina1").style.color = "#F5F5F5";
        }
    }    
    if (productId == 'b') {
        if (document.querySelector(".korzina2").innerHTML == "В корзину") {
            document.querySelector(".korzina2").innerHTML = "В корзине";
            document.querySelector(".korzina2").style.backgroundColor = "#F5F5F5";
            document.querySelector(".korzina2").style.color = "#690C01";
        } else {
            document.querySelector(".korzina2").innerHTML = "В корзину";
            document.querySelector(".korzina2").style.backgroundColor = "#690C01";
            document.querySelector(".korzina2").style.color = "#F5F5F5";
        }
    }
    
    if (productId == 'c') {
        if (document.querySelector(".korzina3").innerHTML == "В корзину") {
            document.querySelector(".korzina3").innerHTML = "В корзине";
            document.querySelector(".korzina3").style.backgroundColor = "#F5F5F5";
            document.querySelector(".korzina3").style.color = "#690C01";
        } else {
            document.querySelector(".korzina3").innerHTML = "В корзину";
            document.querySelector(".korzina3").style.backgroundColor = "#690C01";
            document.querySelector(".korzina3").style.color = "#F5F5F5";
        }
    }
    
    if (productId == 'd') {
        if (document.querySelector(".korzina4").innerHTML == "В корзину") {
            document.querySelector(".korzina4").innerHTML = "В корзине";
            document.querySelector(".korzina4").style.backgroundColor = "#F5F5F5";
            document.querySelector(".korzina4").style.color = "#690C01";
           
        } else {
            document.querySelector(".korzina4").innerHTML = "В корзину";
            document.querySelector(".korzina4").style.backgroundColor = "#690C01";
            document.querySelector(".korzina4").style.color = "#F5F5F5";
        }
    }
    
    if (productId == 'e') {
        if (document.querySelector(".korzina5").innerHTML == "В корзину") {
            document.querySelector(".korzina5").innerHTML = "В корзине";
            document.querySelector(".korzina5").style.backgroundColor = "#F5F5F5";
            document.querySelector(".korzina5").style.color = "#690C01";
           
        } else {
            document.querySelector(".korzina5").innerHTML = "В корзину";
            document.querySelector(".korzina5").style.backgroundColor = "#690C01";
            document.querySelector(".korzina5").style.color = "#F5F5F5";
        }
    }
    
    if (productId == 'f') {
        if (document.querySelector(".korzina6").innerHTML == "В корзину") {
            document.querySelector(".korzina6").innerHTML = "В корзине";
            document.querySelector(".korzina6").style.backgroundColor = "#F5F5F5";
            document.querySelector(".korzina6").style.color = "#690C01";
            
        } else {
            document.querySelector(".korzina6").innerHTML = "В корзину";
            document.querySelector(".korzina6").style.backgroundColor = "#690C01";
            document.querySelector(".korzina6").style.color = "#F5F5F5";
        }
    }
    
    if (productId == 'g') {
        if (document.querySelector(".korzina7").innerHTML == "В корзину") {
            document.querySelector(".korzina7").innerHTML = "В корзине";
            document.querySelector(".korzina7").style.backgroundColor = "#F5F5F5";
            document.querySelector(".korzina7").style.color = "#690C01";
            
        } else {
            document.querySelector(".korzina7").innerHTML = "В корзину";
            document.querySelector(".korzina7").style.backgroundColor = "#690C01";
            document.querySelector(".korzina7").style.color = "#F5F5F5";
        }
    }
    
    if (productId == 'h') {
        if (document.querySelector(".korzina8").innerHTML == "В корзину") {
            document.querySelector(".korzina8").innerHTML = "В корзине";
            document.querySelector(".korzina8").style.backgroundColor = "#F5F5F5";
            document.querySelector(".korzina8").style.color = "#690C01";
            
        } else {
            document.querySelector(".korzina8").innerHTML = "В корзину";
            document.querySelector(".korzina8").style.backgroundColor = "#690C01";
            document.querySelector(".korzina8").style.color = "#F5F5F5";
        }
    }
    
    if (productId == 'i') {
        if (document.querySelector(".korzina9").innerHTML == "В корзину") {
            document.querySelector(".korzina9").innerHTML = "В корзине";
            document.querySelector(".korzina9").style.backgroundColor = "#F5F5F5";
            document.querySelector(".korzina9").style.color = "#690C01";
            
        } else {
            document.querySelector(".korzina9").innerHTML = "В корзину";
            document.querySelector(".korzina9").style.backgroundColor = "#690C01";
            document.querySelector(".korzina9").style.color = "#F5F5F5";
        }
    }
    
    if (productId == 'j') {
        if (document.querySelector(".korzina10").innerHTML == "В корзину") {
            document.querySelector(".korzina10").innerHTML = "В корзине";
            document.querySelector(".korzina10").style.backgroundColor = "#F5F5F5";
            document.querySelector(".korzina10").style.color = "#690C01";
            
        } else {
            document.querySelector(".korzina10").innerHTML = "В корзину";
            document.querySelector(".korzina10").style.backgroundColor = "#690C01";
            document.querySelector(".korzina10").style.color = "#F5F5F5";
        }
    }
    
    if (productId == 'k') {
        if (document.querySelector(".korzina11").innerHTML == "В корзину") {
            document.querySelector(".korzina11").innerHTML = "В корзине";
            document.querySelector(".korzina11").style.backgroundColor = "#F5F5F5";
            document.querySelector(".korzina11").style.color = "#690C01";
           
        } else {
            document.querySelector(".korzina11").innerHTML = "В корзину";
            document.querySelector(".korzina11").style.backgroundColor = "#690C01";
            document.querySelector(".korzina11").style.color = "#F5F5F5";
        }
    }
    
    if (productId == 'l') {
        if (document.querySelector(".korzina12").innerHTML == "В корзину") {
            document.querySelector(".korzina12").innerHTML = "В корзине";
            document.querySelector(".korzina12").style.backgroundColor = "#F5F5F5";
            document.querySelector(".korzina12").style.color = "#690C01";
            
        } else {
            document.querySelector(".korzina12").innerHTML = "В корзину";
            document.querySelector(".korzina12").style.backgroundColor = "#690C01";
            document.querySelector(".korzina12").style.color = "#F5F5F5";
        }
    }
    
    if (productId == 'm') {
        if (document.querySelector(".korzina13").innerHTML == "В корзину") {
            document.querySelector(".korzina13").innerHTML = "В корзине";
            document.querySelector(".korzina13").style.backgroundColor = "#F5F5F5";
            document.querySelector(".korzina13").style.color = "#690C01";
            
        } else {
            document.querySelector(".korzina13").innerHTML = "В корзину";
            document.querySelector(".korzina13").style.backgroundColor = "#690C01";
            document.querySelector(".korzina13").style.color = "#F5F5F5";
        }
    }
    
    if (productId == 'n') {
        if (document.querySelector(".korzina14").innerHTML == "В корзину") {
            document.querySelector(".korzina14").innerHTML = "В корзине";
            document.querySelector(".korzina14").style.backgroundColor = "#F5F5F5";
            document.querySelector(".korzina14").style.color = "#690C01";
            
        } else {
            document.querySelector(".korzina14").innerHTML = "В корзину";
            document.querySelector(".korzina14").style.backgroundColor = "#690C01";
            document.querySelector(".korzina14").style.color = "#F5F5F5";
        }
    }
    
    if (productId == 'o') {  
        if (document.querySelector(".korzina15").innerHTML == "В корзину") {
        document.querySelector(".korzina15").innerHTML = "В корзине";
        document.querySelector(".korzina15").style.backgroundColor = "#F5F5F5";
        document.querySelector(".korzina15").style.color = "#690C01";
        
    } else {
        document.querySelector(".korzina15").innerHTML = "В корзину";
        document.querySelector(".korzina15").style.backgroundColor = "#690C01";
        document.querySelector(".korzina15").style.color = "#F5F5F5";
    }
}
    if (productId == 'p') {
        if (document.querySelector(".korzina16").innerHTML == "В корзину") {
            document.querySelector('.korzina16').innerHTML='В корзине';
            document.querySelector('.korzina16').style.backgroundColor='#F5F5F5';
            document.querySelector('.korzina16').style.color='#690C01';
            
        } else {
            document.querySelector('.korzina16').innerHTML='В корзину';
            document.querySelector('.korzina16').style.backgroundColor='#690C01';
            document.querySelector('.korzina16').style.color='#F5F5F5';
        }
    }
    
    if (productId == 'q') {
        if (document.querySelector(".korzina17").innerHTML == "В корзину") {
            document.querySelector('.korzina17').innerHTML='В корзине';
            document.querySelector('.korzina17').style.backgroundColor='#F5F5F5';
            document.querySelector('.korzina17').style.color='#690C01';
           
        } else {
            document.querySelector('.korzina17').innerHTML='В корзину';
            document.querySelector('.korzina17').style.backgroundColor='#690C01';
            document.querySelector('.korzina17').style.color='#F5F5F5';
        }
    }
    
    if (productId == 'r') {
        if (document.querySelector(".korzina18").innerHTML == "В корзину") {
            document.querySelector('.korzina18').innerHTML='В корзине';
            document.querySelector('.korzina18').style.backgroundColor='#F5F5F5';
            document.querySelector('.korzina18').style.color='#690C01';
            
        } else {
            document.querySelector('.korzina18').innerHTML='В корзину';
            document.querySelector('.korzina18').style.backgroundColor='#690C01';
            document.querySelector('.korzina18').style.color='#F5F5F5';
        }
    }
    
    if (productId == 's') {
        if (document.querySelector(".korzina19").innerHTML == "В корзину") {
            document.querySelector('.korzina19').innerHTML='В корзине';
            document.querySelector('.korzina19').style.backgroundColor='#F5F5F5';
            document.querySelector('.korzina19').style.color='#690C01';
            
        } else {
            document.querySelector('.korzina19').innerHTML='В корзину';
            document.querySelector('.korzina19').style.backgroundColor='#690C01';
            document.querySelector('.korzina19').style.color='#F5F5F5';
        }
    }
    if (productId == 't') {
        if (document.querySelector(".korzina20").innerHTML == "В корзину") {
            document.querySelector('.korzina20').innerHTML='В корзине';
            document.querySelector('.korzina20').style.backgroundColor='#F5F5F5';
            document.querySelector('.korzina20').style.color='#690C01';
            
        } else {
            document.querySelector('.korzina20').innerHTML='В корзину';
            document.querySelector('.korzina20').style.backgroundColor='#690C01';
            document.querySelector('.korzina20').style.color='#F5F5F5';
        }
    }
}

function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const product = products.find(p => p.id === productId);
    
    if (!product) {
        console.error('Товар не найден');
        return;
    }

    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    showAlert('Товар добавлен в корзину!');
}

// Красивое уведомление
function showAlert(message) {
    const alertDiv = document.createElement('div');
    alertDiv.style = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px;
        background:  #690C01;
        color: white;
        border-radius: 2vw;
        z-index: 1000;
        font-family: 'Bergamasco';
    `;
    alertDiv.textContent = message;
    document.body.appendChild(alertDiv);
    
    setTimeout(() => {
        alertDiv.remove();
    }, 2000);
}



console.log(t)


function perehod(){
    
    p=window.localStorage.getItem('perehod')
    if(p==1){
        window.open('../html/profile.html')
    }
    else{
        window.open('../html/log.html')
    }
}