
document.getElementById('calculator').addEventListener('click', function(){
    console.log('clicked')
    msg = ''
    entry = document.getElementById('entry').value
    exit = document.getElementById('exit').value
    qty = document.getElementById('qty').value
    document.getElementById('msgContainer').style.display = 'none'
    console.log(entry);

    document.getElementById('msgContainer').style.display = 'block'
    if(entry > 0 && exit >=0 && qty>0){
        if(entry>exit){
            loss = (entry - exit)*qty
            lossPerc = (loss/entry) * 100
            msg = `${lossPerc}% of loss resulting in loss of ${loss} ` 
        }
        else if(entry < exit ){
            profit = (exit - entry) * qty
            profitPerc = (profit/entry) *100
            msg = `${profitPerc}% of profit resulting in profit of ${profit} ` 
        }
        else{
            msg = `NO PROFIT NO LOSS..but maybe brokerage won't leave you😁 `
        }
        document.getElementById('msg').innerHTML = msg
    }
    else{
        document.getElementById('msg').innerHTML = "😣 Enter values properly!!"
    }
    
})

