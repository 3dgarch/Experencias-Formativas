var images=new Array("images/tailandia1.jpg","images/sietecolores2.jpg","images/roma3.jpg","images/las-vegas4.jpg");
var c=0;

function carrosel() {
    var img=document.getElementById("imgcar");
    c++;
    if(c>=images.length)
    c=0;
    img.src = images[c];

    setTimeout("carrosel()",1000);

}

carrosel();


