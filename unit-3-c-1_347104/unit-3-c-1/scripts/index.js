//store the products array in localstorage as "products"


document.getElementById("products").addEventListener("submit",myfunc);
var ProdArr=JSON.parse(localStorage.getItem("products"))||[]

function myfunc(){
    event.preventDefault();

    var type=document.getElementById("type").value;
    var desc=document.getElementById("desc").value
    var price=document.getElementById("price").value
    var image=document.getElementById("image").value;
    
    // console.log(type,desc,price,image);

    function Product(type,desc,price,image){
        this.type=type;
        this.desc=desc;
        this.price=price;
        this.image=image;
    }
    var Prod=new Product(type,desc,price,image);
    ProdArr.push(Prod);
    console.log(ProdArr);
    document.getElementById("products").value=null
    localStorage.setItem("products",JSON.stringify(ProdArr))
    window.location.href="inventory.html"
    
}