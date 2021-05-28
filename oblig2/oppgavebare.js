var numbers = [4, 3, 1, 5, 8];
var selectedElement;

function selectStolpe(index) {
    selectedElement = index.id;
    yesno = "enabled";
    yesno2 = "enabled";
    show();
    return `Selected ${index}`
}

function fjernStolpen(index) {
    delete numbers[(selectedElement - 1)];
    yesno = "disabled";
    yesno2 = "disabled";
    selectedElement = "ingen";
    numbers = numbers.filter(function () {
        return true;
    });
    show();
    return `removed ${index}`;
}

function editStolpen(selectedElement) {
    if (!(10 < inputValue || inputValue == undefined)) {
        numbers[selectedElement - 1] = inputValue;
        show();
        return `edited ${selectedElement}`;
    } else {
        alert("Feltet er tomt eller du har valgt et tall over 10!")
        return "failed";
    }
}

function addStolpe() {
    if (!(10 < inputValue || inputValue == undefined)) {
        numbers.push(inputValue);
        show();
        return "added";
    } else {
        alert("Feltet er tomt eller du har valgt et tall over 10!")
        return "failed";
    }
}