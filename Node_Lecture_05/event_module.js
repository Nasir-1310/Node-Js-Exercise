
const school = require('./school');


const school_var=new school();
//regester a listener for bellRing
school_var.on('bellRing',function({period, text}){
    console.log(`Bell rang ${period} ${text}`);
});


school_var.startPeriod();

