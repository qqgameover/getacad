var contentDiv = document.getElementById('content');
let inputValue;
var yesno = "disabled";
var yesno2 = "disabled";
var kanskje;
var selectedElement;
var numbers = [4, 3, 1, 5, 8];

show();
function show() {
    let svgInnerHtml = '';
    for (let i = 0; i < numbers.length; i++) {
        svgInnerHtml += createBar(numbers[i], i + 1);
    }
    contentDiv.innerHTML = `
            <svg id="chart" width="500" viewBox="0 0 80 60">
                ${svgInnerHtml}
            </svg><br/>
            Valgt stolpe: <i>${selectedElement || "Ingen"}</i>
            <br />
            Verdi:
            <input type="number" min="1" max="10" oninput="inputValue = this.value" />
            <button onclick="addStolpe()">Legg til stolpe</button>
            <button onclick="editStolpen()" ${yesno2}>Endre valgt stolpe</button><br />
            <button id="buttonFjern" onclick="fjernStolpen()" ${yesno}>Fjerne valgt stolpe</button>
            `;
}

function createBar(number, barNo) {
    const width = 8;
    const spacing = 2;
    let x = (barNo - 1) * (width + spacing);
    let height = number * 10;
    let y = 60 - height;
    let color = calcColor(1, 10, barNo);
    let stroke = selectedElement == barNo ? "black" : "";
    return `<rect width="${width}" id="${barNo}" height="${height}"x="${x}" y="${y}" fill="${color}" stroke="${stroke}" onclick="selectStolpe(this)"></rect>`;
}

function calcColor(min, max, val) {
    var minHue = 240, maxHue = 0;
    var curPercent = (val - min) / (max - min);
    var colString = "hsl(" + ((curPercent * (maxHue - minHue)) + minHue) + ",100%,50%)";
    return colString;
}


