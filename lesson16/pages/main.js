async function func1(){
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '14f785c7ccmsh8b6ec6839c01ff4p1d3790jsnc7ad860c6ab4',
            'X-RapidAPI-Host': 'hotels4.p.rapidapi.com'
            }
            };
            
    await fetch('https://hotels4.p.rapidapi.com/v2/get-meta-data', options)
         .then(response => response.json())
         .then(response => console.log(response))
         .catch(err => console.error(err))
}

function func2(){
    console.log(2)
}

function func3(){
    console.log(3)
}

async function go(){
    let a = await func1()
    console.log(a)

    let b = await func2()
    console.log(b)

    let c = await func3()
    console.log(c)
}
go()