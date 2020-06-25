const hour  = process.argv[2]

if( hour < 24 ){
    console.log(hour)
}else{
    console.log(hour%24)
}