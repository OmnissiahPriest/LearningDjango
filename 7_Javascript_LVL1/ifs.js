var hot=false;
var temp=20;
if (temp>80) {
  hot=true;
  console.log("Hot outside")
}else if(temp<30){
  console.log("it's cold");
}else {
  console.log("It's not hot today");
}
var ham=0;
var cheese=0;
var report="blank";
if (ham>=10&&cheese>=10) {
  report="Strong sales of items"
}else if (ham==0&&cheese==0) {
  report="Nothing sold!"
}else {
  report="We had some sales of items"
}
console.log(report);
