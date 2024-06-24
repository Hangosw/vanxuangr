var var_xOffset = 0;
var var_yOffset = 0;

document.addEventListener('mousemove', function(e) {
    var_xOffset = (e.clientX / window.innerWidth) * 20;
    var_yOffset = (e.clientY / window.innerHeight) * 20;
    
    document.getElementById('box').style.transform = 'translate(' + var_xOffset + 'px, ' + var_yOffset + 'px)';
});


var var1_xOffset = 0;
var var1_yOffset = 0;

document.addEventListener('mousemove', function(e) {
    var1_xOffset = (e.clientX / window.innerWidth) * 20;
    var1_yOffset = (e.clientY / window.innerHeight) * 20;
    
    document.getElementById('box1').style.transform = 'translate(' + var1_xOffset + 'px, ' + var1_yOffset + 'px)';
});



var var2_xOffset = 0;
var var2_yOffset = 0;

document.addEventListener('mousemove', function(e) {
    var2_xOffset = (e.clientX / window.innerWidth) * 30;
    var2_yOffset = (e.clientY / window.innerHeight) * 30;
    
    document.getElementById('box2').style.transform = 'translate(' + var2_xOffset + 'px, ' + var2_yOffset + 'px)';
});

var var3_xOffset = 0;
var var3_yOffset = 0;

document.addEventListener('mousemove', function(e) {
    var3_xOffset = (e.clientX / window.innerWidth) * 30;
    var3_yOffset = (e.clientY / window.innerHeight) * 30;
    
    document.getElementById('box3').style.transform = 'translate(' + var3_xOffset + 'px, ' + var3_yOffset + 'px)';
});

var var4_xOffset = 0;
var var4_yOffset = 0;

document.addEventListener('mousemove', function(e) {
    var4_xOffset = (e.clientX / window.innerWidth) * 30;
    var4_yOffset = (e.clientY / window.innerHeight) * 30;
    
    document.getElementById('box4').style.transform = 'translate(' + var4_xOffset + 'px, ' + var4_yOffset + 'px)';
});