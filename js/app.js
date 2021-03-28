
addEventListener("DOMContentLoaded", () =>{

    const btn_menu = document.querySelector('.btn-menu');

    if(btn_menu){
        btn_menu.addEventListener('click', () =>{
            const menu_items = document.querySelector('.menu-items');
            menu_items.classList.toggle('show');
        });

    }

    let menu = document.querySelector('.cerrar');
    let cerrarMenu1 = document.querySelector('.cerrar1');
    let cerrarMenu2 = document.querySelector('.cerrar2');
    let cerrarMenu3 = document.querySelector('.cerrar3');
    let cerrarMenu4 = document.querySelector('.cerrar4');


    if(menu){
        menu.addEventListener('click', () =>{
            menu_items0 = document.querySelector('.menu-items');
            menu_items0.classList.toggle('show');
            console.log('hola1');
        });

    }

    if(cerrarMenu1){
        cerrarMenu1.addEventListener('click', () =>{
            menu_items = document.querySelector('.menu-items');
            menu_items.classList.toggle('show');
            
        });

    }
    
    if(cerrarMenu2){
        cerrarMenu2.addEventListener('click', () =>{
            const menu_items2 = document.querySelector('.menu-items');
            menu_items2.classList.toggle('show');
            console.log('hola2');
            
        });

    }
    
    if(cerrarMenu3){
        cerrarMenu3.addEventListener('click', () =>{
            const menu_items3 = document.querySelector('.menu-items');
            menu_items3.classList.toggle('show');
        });
    }
    
    if(cerrarMenu4){
        cerrarMenu4.addEventListener('click', () =>{
            const menu_items4 = document.querySelector('.menu-items');
            menu_items4.classList.toggle('show');
        });

    }
    
});

///////////////////////////////// movimiento de los ojos /////////////////////////////
document.addEventListener('mousemove', () =>{
    this.onMouseMoveEye('eye01');
    this.onMouseMoveEye('eye02');

});

function onMouseMoveEye(eyeId){
	
    const eye = document.getElementById(eyeId);

    let x = event.clientX * 100 / window.innerWidth;
    let y = event.clientY * 100 / window.innerHeight;

    x = x < 30 ? 30 : x;
    x = x > 70 ? 70 : x;

    y = y < 25 ? 25 : y;
    y = y > 62 ? 62 : y;

    eye.style.top = y + '%';
    eye.style.left = x + '%';

}

