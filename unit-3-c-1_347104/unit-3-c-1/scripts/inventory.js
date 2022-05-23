

var getdata=JSON.parse(localStorage.getItem("products"));

getdata.map(function(ele,index){

    var div=document.createElement("div");

    var type=document.createElement("p");
    type.innerText=ele.type;

    var desc=document.createElement("p");
    desc.innerText=ele.desc;

    var price=document.createElement("p");
    price.innerText=ele.price;

    var image=document.createElement("img");
    image.src=ele.image;

    var btn=document.createElement("button");
    btn.innerText="Delete"
    btn.addEventListener("click", function(){

        getdata.splice(index,1);
        localStorage.setItem("products",JSON.stringify(getdata));
        div.remove()
    });
    div.append(image,type,desc,price,btn);
    document.getElementById("all_products").append(div)
})