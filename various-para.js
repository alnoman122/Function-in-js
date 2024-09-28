function evenString(str){
    const size = str.length;
    if(size %2===0){
        console.log('even')
        return true;
    }
    else{
        console.log('odd');
        return false;
    }
    console.log(str, size);

}

evenString ('Dhaka');