function getme(num){
    for(let i=1;i<=num;i++){
        switch(i<=num){
            case (i%15==0):
                console.log("fizbuz");
                break;
            case(i%3==0):
                console.log("fiz");
                break;
            case(i%5==0):
                console.log('buzz') 
                break;

            default:
                console.log(i)
        
        }
    }
    
}
getme(15)