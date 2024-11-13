
function createFunc(code) {
    //var arg = text.substring(text.indexOf("(") + 1, text.indexOf(")"));
    // code = `const out = document.getElementById("result");\n${code}`;
    code = `let outStr = '';\n${code}\nreturn outStr;`;
    return new Function(code);
}

export function runCode(code) {
    //let out = document.getElementById("result");

    try {
        // out.innerHTML = '';
        let f = createFunc(code);
        return f();
    } catch (e) {
        console.log("error", e)
        return "<p style='color: red;'>Error: " + e + "</p>";
    }
}
