//Set title
(() => {
    document.getElementById("title").innerText = document.getElementsByTagName("title")[0].innerText
})()

function drawCircle(radius) {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        //graph
        ctx.stroke()
    }
}

drawCircle(50)