function perehod(){
    
    p=window.localStorage.getItem('perehod')
    if(p==1){
        window.open('html/profile.html')
    }
    else{
        window.open('html/log.html')
    }
}