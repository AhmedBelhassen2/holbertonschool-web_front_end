function changeMode(size, weight, transform, background, color)
{
    return function(){
    document.body.style.fontSize = size;
    document.body.style.fontWeight = weight;
    document.body.style.textTransform = transform;
    document.body.style.backgroundColor = background;
    document.body.style.color = color;
}
}
function main()
{
    let spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
    let darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
    let screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');
    // P -> body('Welcome Holberton!') | btn -> body('Spooky) | btn -> body('Dark mode') | btn -> body('Scream mode') 
    let paragraph = document.createElement('P'); 
    paragraph.innerHTML = "Welcome Holberton!";
    let spookyBtn = document.createElement('button');
    spookyBtn.innerHTML = "Spooky";
    spookyBtn.onclick = function () {
        spooky();
      };
    let darkBtn = document.createElement('button');
    darkBtn.innerHTML = "Dark mode";
    darkBtn.onclick = function () {
        darkMode();
      };
    let screamBtn = document.createElement('button');
    screamBtn.innerHTML = "Scream mode";
    screamBtn.onclick = function () {
        screamMode();
      };
    document.body.appendChild(paragraph);
    document.body.appendChild(spookyBtn);
    document.body.appendChild(darkBtn);
    document.body.appendChild(screamBtn);
}
main ();



