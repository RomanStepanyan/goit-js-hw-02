const checkForSpam = function(message) {
    const spamOrNotSpam = message.toLowerCase().split(' ').includes('spam') || message.toLowerCase().split(' ').includes('sale');    
    return spamOrNotSpam;
  };


