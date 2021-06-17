var numbers = [4, 3, 1, 5, 8];
var selectedElement;

function selectStolpe(index) {
    if (selectedElement != index.id) {
        selectedElement = index.id;
        yesno = "enabled";
        yesno2 = "enabled";
        show();
        return `Selected ${index}`
    } else {
        selectedElement = "ingen";
        yesno = "disabled";
        yesno2 = "disabled";
        show();
        return `Deselected ${index}`;
    }
}

function fjernStolpen(index) {
    delete numbers[(selectedElement - 1)];
    yesno = "disabled";
    yesno2 = "disabled";
    selectedElement = "ingen";
    numbers = numbers.filter(() => true)
    show();
    return `removed ${index}`;
}

function editStolpen() {
    if (!(10 < inputValue || inputValue == undefined || inputValue == 0)) {
        numbers[selectedElement - 1] = inputValue;
        show();
        return `edited ${selectedElement}`;
    } else {
        alert("Feltet er tomt eller du har valgt et tall over 10!")
        return "failed";
    }
}

function addStolpe() {
    if (!(10 < inputValue || inputValue == undefined || inputValue == 0)) {
        numbers.push(inputValue);
        show();
        return "added";
    } else {
        alert("Feltet er tomt eller du har valgt et tall over 10!")
        return "failed";
    }
}