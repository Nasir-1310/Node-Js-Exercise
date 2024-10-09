const EventEmitter=require('events');


class school extends EventEmitter{

     startPeriod(){
        console.log('class started');
    
        //rase event when bell rings
        
    //rase an event
    setTimeout(() => {
        this.emit('bellRing',{
            period:'first',
            text:'period ended',
        });
    }, 2000);
    
    }
}

module.exports=school;