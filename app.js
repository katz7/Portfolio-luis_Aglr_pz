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