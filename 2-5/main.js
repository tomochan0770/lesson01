const price = process.argv[2]
const hundred = Math.floor(price/100)
const ten = Math.floor(price%100/10)
const one = Math.floor(price%100%10)



if( price%100 === 0 ){
    console.log(`100円玉${hundred}枚`)
}else if( price%100/10 === 0 ){
    console.log(`100円玉${hundred}枚 10円玉${ten}枚`)
}else{
    console.log(`100円玉${hundred}枚 10円玉${ten}枚 1円玉${one}枚`)
}