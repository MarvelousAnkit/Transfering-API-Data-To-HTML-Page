<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        form{display: flex;
        align-items: center;
        justify-content: center;
        align-content: center;
    }
    </style>
    
    
    

</head>

<body>
    <form  >
        <select id="mycar" >
            
           
    
        </select>
        
                    
    </form>
    <script>
    <!-- // The fetch API - provide a fetch() method defined on the window object, which you can used to perform  request. This method return a Promise  -->
    fetch('https://api.covid19api.com/countries')
    .then((apidata) => {
        console.log(apidata) // All data coming from URL get stored in apidata
        return apidata.json() // This will Convert JSON to object 
    } )
    .then( (actualdata) => {  // This is the object which get converted from the json
            console.log(actualdata)
            let actualdatas = "" // 
            actualdata.map((values)=>{ // This is Map function. Value store all the object of array column wise.
                console.log(values.Country) // This will filter the country Column Wise

                //Why you Use Map Function. As We Know Map Function iss applicable on array. To get each object of array columnwise we use map function.
                //Values print  array element  one time in a row. and next element in next column

                //Ways To print that element on DOM !!!! 
                actualdatas += `
                
                
                    
                <option value="none" >${values.Country} </option> 
                   
            `
                document.getElementById('mycar').innerHTML= actualdatas
                

            })
    } )

    .catch( (error) => {
        console.log(error)
    } )
    
    
</script>

</body>
</html>
