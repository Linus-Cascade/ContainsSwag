function swagTest(swag){
    if(swag.toLowerCase().includes('swag')){
        return true;
    }
    else{
        return false;
    }
}

module.exports = {swagTest};
