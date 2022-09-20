var wrapper = document.getElementById("wrap");

var alisher = parseInt(prompt("Alisherning byudjetini kiriting so'mda:"));
console.log(`Alisher kiritgan pul miqdori ${alisher} so'mda`);
var ticket = 10900 * 500;
var hotel = 10900 * 250;
var museum = 12272 * 120;
var allPay = ticket + hotel + museum;
if(alisher >= allPay){
    console.log("Oq yo'l");
    wrapper.innerText = "oq yo'l";
}
else{
    console.log("Alisher, ozgina sabr qilish kerak bo'lar ekan");
    wrapper.innerText = "Alisher, ozgina sabr qilish kerak bo'lar ekan";
}