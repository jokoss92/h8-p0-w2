//1. Menyusun Barisan Bintang
var rows1 = 10;
for(i=1; i<=rows1; i++){
    console.log("*");
}

//2. Menyusun Barisan Bintang dengan Nested Loop
var rows2 = 5;
var star2 ="";
for(l=0;l<rows2;l++){
    for(m=0; m<rows2;m++){
        star2 += "*";
        
    } 
    console.log(star2);
    star2='';
}

//3. Menyusun Barisan Tangga Bintang dengan Nested Looping
// var rows2 = 5;
// for(j=1; j<=rows2; j++){
//     console.log('*'.repeat(j));
// }
var rows3 = 5;
for(j=rows3; j>=1; j--){
    var star = "";
    for(k=j; k<=rows3; k++){
        star +="*";
    } console.log(star);
}
