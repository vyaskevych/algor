
export function createFunc(arg, code) {
    try {
        const f = new Function(arg, code);
        console.log('f', f);

        return f;
    } catch (e) {
        console.log("error", e)
        return "<p style='color: red;'>Error: " + e + "</p>"; //продумати що правильно повернути і куди
    }
}

export function myEqual(rec, exp, spec) {
    if (myDeepEqual(rec, exp)) {
        return `<div class="test"><p class="ok">OK&nbsp;&nbsp;&nbsp;${spec};</p><p>expected:</p><pre>${exp}</pre> result: <pre>${rec}</pre></div>`;
    } else {
        return `<div class="test"><p class="failed">Failed&nbsp;&nbsp;&nbsp;${spec};</p><p>expected:</p><pre>${exp}</pre> result: <pre>${rec}</pre></div>`;
    }
}

function myDeepEqual(rec, exp) {
    if (typeof (rec) != "object" && typeof (exp) != "object") return rec === exp;
    else return JSON.stringify(rec) === JSON.stringify(exp);
}