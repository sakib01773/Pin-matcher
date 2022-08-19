function generatePin(){
   const random =  Math.round(Math.random()*10000);
   const numberString = random + ""
   if(numberString.length === 4){
        return numberString;
   }else{
        return generatePin()
   }
   
}