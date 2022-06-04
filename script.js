
var tile = document.getElementsByClassName('tile');
var h3 = document.getElementsByTagName('h3');
var tileT = document.getElementsByClassName('tileText');
var img = document.getElementsByTagName('img');
console.log('Testing console');

function fun(){

var input = document.getElementById('searchInput');
console.log(searchInput.value);
  hide();
  for (let i = 0; i < 30; i++) {
    if(searchInput.value.localeCompare(obj.product[i].title.value)>= 0 ){
      tile[i].style.display = 'block';
    }
    //console.log(tile[i] + obj['product'][i]['title']);
  }

}
function hide(){
  for (let i = 0; i < 30; i++) {
      tile[i].style.display = 'none';
    
}

  var img = document.getElementsByTagName("img");
  for (let i = 0; i < 30; i++) {
    h3[i].innerHTML = obj['product'][i]['title'].value;
    tileT[i].innerHTML = obj['product'][i]['description'].value + "<br>price: $"+ obj['product'][i]['price'].value;

    img[i].src = obj['product'][i]['thumbnail'].value;
    //console.log(tile[i] + obj['product'][i]['title']);
  }
}