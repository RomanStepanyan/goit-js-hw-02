const formatString = function(string) {
    if (string.length > 40){
        const slisedString = string.slice(0, 40) + '...';
        return slisedString;
    }
    else{
        return string;
    }    
};




