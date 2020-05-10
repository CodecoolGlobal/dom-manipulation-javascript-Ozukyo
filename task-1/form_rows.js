// function main() {
    
   
 
// }



function createRow() {
    let parentForm = document.querySelector("form");
    let listOfLabels = document.getElementsByTagName("label");
    let lastLabelTextSplitted = listOfLabels[listOfLabels.length-1].textContent.replace(":", "").split(" ");
    let numberOfActualLabel = Number(lastLabelTextSplitted[1]) + 1;
    let labelCreated = document.createElement("label");
    let labelText = document.createTextNode("Item " + numberOfActualLabel + ":");
    labelCreated.appendChild(labelText);
    console.log(labelCreated);
    let nameAndId = "item_" + numberOfActualLabel;
    labelCreated.setAttribute("for", name);
    if(numberOfActualLabel>10) {
        let paragraph = document.createElement("p");
        let textParagraph = document.createTextNode("You can not add more than 10 rows!");
        paragraph.appendChild(textParagraph);
        document.body.appendChild(paragraph);
    } else {

        parentForm.appendChild(labelCreated);
        let inp = document.createElement("input");
        inp.setAttribute("type", "text");
        inp.setAttribute("name", nameAndId);
        inp.setAttribute("id", nameAndId);
        parentForm.appendChild(inp);
        parentForm.appendChild(document.createElement("br"));
    
    }
    
}

function removeRow() {
    let listOfLabels = document.getElementsByTagName("label");
    let parentForm = document.querySelector("form");
    let inputList = document.getElementsByTagName("input");
    parentForm.removeChild(listOfLabels[listOfLabels.length-1]);
    parentForm.removeChild(inputList[inputList.length-1]);
    
}
