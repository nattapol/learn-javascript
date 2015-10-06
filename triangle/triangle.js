function triangle(type) {
    var level = document.getElementById("input").value;
    result = [];
    var x = level * 2 - 1;
    var y = level - 1;
    var text = "";
    for (var j = 0; j <= y; j++) {
        for (var i = 0; i < x; i++) {
            if (type == "full") { 
                fullTriangle(i, y, j);
            } else if (type == "border") {
                borderTriangle(i, y, j);
            }
        }
        text += result.join("") + "<br>";
    }
    document.getElementById("demo").innerHTML = text;
}
function fullTriangle(i, y, j) {
    if (i >= y - j && i <= y + j) {
        result[i] = "*";
    } else {
        result[i] = "&nbsp;";
    }   
}
function borderTriangle(i, y, j) {
    if (i == y - j || i == y + j || j == y) {
        result[i] = "*";
    } else {
        result[i] = "&nbsp;";
    }  
}