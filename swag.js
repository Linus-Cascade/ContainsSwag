function containsSwag(coolword){
function swagTest(swag){
    if(swag.toLowerCase().includes('swag')){
        return true;
    }
    else{
        return false;
    }
}


console.log("is " + coolWord + ' swag? ');
console.log('testing swag...');
console.log(coolWord + "'s swag status is: " + swagTest(coolWord));
}