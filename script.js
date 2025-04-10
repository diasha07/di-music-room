function perehod(){
    
    p=window.localStorage.getItem('perehod')
    if(p==1){
        window.open('profile.html')
    }
    else{
        window.open('log.html')
    }
}