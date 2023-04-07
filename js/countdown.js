simplyCountdown('#cuenta', {
    year: 2023, 
    month: 4, 
    day: 7, 
    hours: 23, 
    minutes: 59, 
    seconds: 59, 
    words: { 
        days: { singular: 'day', plural: 'days' },
        hours: { singular: 'hour', plural: 'hours' },
        minutes: { singular: 'minute', plural: 'minutes' },
        seconds: { singular: 'second', plural: 'seconds' }
    },
    plural: true, 
    inline: false, 
    enableUtc: false, 
    onEnd: function() { 
        alert("¿THE END?");
        return; 
    }, 
    refresh: 1000, 
    sectionClass: 'simply-section', 
    amountClass: 'simply-amount', 
    wordClass: 'simply-word', 
    zeroPad: false,
    countUp: false
});