function getQuote() {
  quotes = new Array(5);
  sources = new Array(5);

  quotes[0] = "To be or not to be, that is the question";
  sources[0] = "William Shakespeare";

  quotes[1] = "An eye for an eye makes the whole world go blind";
  sources[1] = "Gandhi";

  quotes[2] = "There are more things in heaven and earth than are dreamed of in your philosophy Horatio";
  sources[2] = "William Shakespeare";

  quotes[3] = "In the court of the Crimson King";
  sources[3] = "King Crimson";

  quotes[4] = "That there, that's not me";
  sources[4] = "Radiohead";

  i = Math.floor(Math.random() * quotes.length)

  document.write("<dl>\n");
  document.write("<dt" + "\"<i>" + quotes[i] + "</i>\"\n");
  document.write("<dd>" + "- " + sources[i] + "\n");
  document.write("<dl>\n");
}
function changecolor(id){
  document.getElementById('quotebox').style.background = document.getElementById(id).innerHTML;
  if(id === 'red'){
    document.getElementById('quotebox').style.color = 'black';
    document.getElementById('quotebox').style.borderColor = '#ffb3b3';
    document.getElementById('quotebox').style.fontSize = 'x-large';
    document.getElementById('quotebox').style.fontFamily = 'SetDefaultValue';
  } else if (id === 'yellow'){
    document.getElementById('quotebox').style.color = '#00001a';
    document.getElementById('quotebox').style.borderColor = '#ffdd99';
    document.getElementById('quotebox').style.fontSize = 'xx-large';
    document.getElementById('quotebox').style.fontFamily = 'Times New roman, Times, serif';
  } else if (id === 'green'){
    document.getElementById('quotebox').style.color = 'white';
    document.getElementById('quotebox').style.borderColor = '#006666';
    document.getElementById('quotebox').style.fontSize = 'larger';
    document.getElementById('quotebox').style.fontFamily = 'Arial, Helvetica, sans-serif';
  } else if (id === 'orange') {
    document.getElementById('quotebox').style.color = 'white';
    document.getElementById('quotebox').style.borderColor = '#ff6600';
    document.getElementById('quotebox').style.fontSize = '150%';
    document.getElementById('quotebox').style.fontFamily = 'Arial, Helvetica, sans-serif';
  } else {
    document.getElementById('quotebox').style.background = black;
    document.getElementById('quotebox').style.color = 'white';
    document.getElementById('quotebox').style.borderColor = 'white';
    document.getElementById('quotebox').style.fontFamily = 'Russo One,sans-serif';

  }
}

function weightConverter(id){
  var x = document.getElementById(id).value;
  if(document.getElementById("weight").value === "kg"){
      document.getElementById("output").innerHTML = x * 0.4536 + " kilograms";
  } else {
      document.getElementById("output").innerHTML = x * 2.2046 + " pounds";
  }

}

function SetDefaultValue(){
  var populateField = document.getElementById("input").value = 0;
  var populateFieldTwo = document.getElementById("numSeries").value = 0;
  var populateFieldThree = document.getElementById("textarea").value = "";
}

window.onload = function(){
  SetDefaultValue();
};

function mathFun(){
  var str = document.getElementById("numSeries").value;
  var myArray = str.split(',');
  //for(var i = 0; i<myArray.length; i++){ myArray[i] = parseInt(myArray[i], 10);}
  document.getElementById("max").innerHTML = Math.max(...myArray);
  document.getElementById("min").innerHTML = Math.min.apply(null, myArray);
  //const s = myArray => myArray.reduce((a,b) => a + b, 0);
  document.getElementById("sum").innerHTML = mathSum(myArray);
  document.getElementById("avg").innerHTML = mathAvg(myArray, document.getElementById("sum").innerHTML);
  document.getElementById("rev").innerHTML = myArray.reverse();
}

function mathSum(array){
  var sum = 0;
  for (var i = 0; i<array.length; i++){
    sum += Number(array[i]);
  }
  return sum;
}

function mathAvg(array, sum){
  return sum/array.length;
}

function deleteText(){
  var data = document.getElementById("textarea").value;
  for(var i = 0; i<data.length; i++){
    textarea.value = "";
  }
}

function capitalize(){
  var data = document.getElementById("textarea").value;
  for(var i = 0; i<data.length; i++){
    if(data.charCodeAt(i)>= 65 && data.charCodeAt(i)<=90){
      textarea.value = textarea.value.toLowerCase(i);
    } else {
      textarea.value = textarea.value.toUpperCase(i);
    }
  }
}

function sort(){
  var text = document.getElementById("textarea").value;
  var lineArray = text.split("\n");
  lineArray.sort();
  document.getElementById("textarea").value = lineArray.join("\n");
}

function revMagic(){
  var text = document.getElementById("textarea").value;
  var lineArray = text.split("\n");
  var revLineArray = "";
  for(var i = 0; i<lineArray.length; i++){
    revLineArray = lineArray[i].split(" ");
    revLineArray = revLineArray.reverse();
    lineArray[i] = revLineArray.join(" ");
  }
  document.getElementById("textarea").value = lineArray.join("\n");
}
function stripBlank(){
  var text = document.getElementById("textarea").value;
  //text = text.replace("/^\s*|\s*$/g,");
  //text.trim();
  // array = text.split("\n");
  // var temp;
  // for (var i = 0; i < array.length; i++) {
  //   if(array[i] == "\n"){
  //     array[i] = " ";
  //   }
  // }
  // text = array.join();

  // text = text.replace(/ /g,'');
  //


  text = text.replace(/(^\s*)|(\s*$)/gi,"");
  text = text.replace(/[ ]{2,}/gi," ");
  text = text.replace(/\n /, "\n");
  text = text.trim();
  var array = text.split("\n");
  console.log(array);
  var filtered = array.filter(Boolean);
  document.getElementById("textarea").value = filtered.join("\n");
}

function addNumbers(){
  var text = document.getElementById("textarea").value;
  var array = text.split("\n");
  for(var i = 0; i<array.length; i++){
    array[i] = (i+1) + ". " + array[i];
  }
  document.getElementById("textarea").value = array.join("\n");
}

function shuffle(){
  var text = document.getElementById("textarea").value;
  var array = text.split("\n");
  for (var i = 0; i<array.length; i++){
    var j = Math.floor(Math.random()*array.length);
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  document.getElementById("textarea").value = array.join("\n");
}
