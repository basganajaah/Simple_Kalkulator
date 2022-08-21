var text = ""
function clk(val){
    // val = 8

    console.log("ini nilai screen", document.getElementById("screen").value)
    console.log("ini nilai text", text)

    document.getElementById("screen").value=document.getElementById("screen").value+val;
    console.log("ini nilai screen sesudah", document.getElementById("screen").value)
    // "7" = "7" + "8"
}

function clrdisp(){
    document.getElementById("screen").value=""
    // ketika fungsi clrdisp dijalankan akan mengosongkan value pd screen
}

function eql(){
    console.log("ini nilai screen eql", document.getElementById("screen").value)
    console.log("ini nilai text eql", text)

    text = document.getElementById("screen").value;
    console.log("ini nilai text", text)

    var result = eval(text);
    console.log("ini nilai result", result)
    document.getElementById("screen").value=result
    
}