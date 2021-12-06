var countLines = 0;

function calc() {
    var a = document.getElementById('coeff1').value;
    var b = document.getElementById('coeff2').value;
    var c = document.getElementById('coeff3').value;
    var d, x1, x2;

    if(!(isNumber(a) && isNumber(b) && isNumber(c)))  alert("Fill in all fields with numeric values.");
    else if (parseFloat(a) == 0) alert("The first coefficient cannot be zero");
    else {
        a = parseFloat(a);
        b = parseFloat(b);
        c = parseFloat(c);
        d = b * b - 4 * a * c;
        var pNode = document.getElementById('table');
        var newLine = document.createElement('tr');
        var newFirstColumn = document.createElement('td');
        var newSecondColumn = document.createElement('td');
        var newThirdColumn = document.createElement('td');

        var newCol1 = document.createTextNode(++countLines);
        var newCol2;
        var newCol3;

        if (d < 0) {
            x1 = "discriminant < 0";
            x2 = "discriminant < 0";
            newCol2 = document.createTextNode(x1);
            newCol3 = document.createTextNode(x2);
        }
        else if (d == 0) {
            x1 = -b / (2 * a);
            x2 = "only one solution";
            newCol2 = document.createTextNode(x1.toFixed(2));
            newCol3 = document.createTextNode(x2);
        }
        else {
            x1 = (-b - Math.sqrt(d)) / (2 * a);
            x2 = (-b + Math.sqrt(d)) / (2 * a);
            newCol2 = document.createTextNode(x1.toFixed(2));
            newCol3 = document.createTextNode(x2.toFixed(2));
        }

        newFirstColumn.appendChild(newCol1);
        newSecondColumn.appendChild(newCol2);
        newThirdColumn.appendChild(newCol3);
        newLine.appendChild(newFirstColumn);
        newLine.appendChild(newSecondColumn);
        newLine.appendChild(newThirdColumn);

        pNode.parentNode.insertBefore(newLine, pNode.nextSibling);

        newLine.addEventListener('click', a => {
            newLine.remove();
        })

    }

}
function isNumber(value) {
         if (typeof value != "string") return false
         return !isNaN(value) && !isNaN(parseFloat(value))
     }
