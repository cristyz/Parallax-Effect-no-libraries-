const title = document.getElementById('title');
const travel_1 = document.getElementById('travel-1');
const travel_2 = document.getElementById('travel-2');
const travel_3 = document.getElementById('travel-3');
const travel_4 = document.getElementById('travel-4');

document.addEventListener('mousemove', (e) => {
    const [mouseX, mouseY] = [e.clientX, e.clientY]
    const [windowWidth, windowHeight] = [window.innerWidth, window.innerHeight]

    const porcent_mouse_x = mouseX * 100 / windowWidth;
    const porcent_mouse_y = mouseY * 100 / windowHeight;

    title.style.transform = `translate(${porcent_mouse_x}px, ${porcent_mouse_y}px) scale(${(porcent_mouse_x * 0.01) < 0.4 ? '0.4' : (porcent_mouse_x * 0.01)})`;
    travel_1.style.transform = `translate(${porcent_mouse_x}px, ${(-porcent_mouse_y + 100) * 0.1}px) rotate(${(porcent_mouse_x - 60) * 0.1}deg)`;
    travel_2.style.transform = `translate(${porcent_mouse_x}px, ${porcent_mouse_y}px) rotate(${(porcent_mouse_x - 60) * 0.1}deg)`;
    travel_3.style.transform = `translate(${porcent_mouse_x}px, ${porcent_mouse_y}px) rotate(${(-porcent_mouse_x + 60) * 0.1}deg)`;
    travel_4.style.transform = `translate(${porcent_mouse_x}px, ${porcent_mouse_y}px) rotate(${(-porcent_mouse_x + 60) * 0.1}deg)`;
})