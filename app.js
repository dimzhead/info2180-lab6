function dothis(){
    var xhr =  new XMLHttpRequest();
    xhr.open('GET',"superheroes.php",true);
    console.log(xhr)
    xhr.onload = function(){
        
        if(this.status == 200){
            console.log("ok")
            document.getElementById("result").innerHTML = this.responseText;
        }
    }
     xhr.send(); 
}