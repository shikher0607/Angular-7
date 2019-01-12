export class CounterService{
    activeToInactiveCounter = 0;
    inactiveToActiveCounter = 0;

    incrementActiveToInactiveCounter(){
        this.activeToInactiveCounter++;
        console.log('Increment Active To Inactive: ' + this.activeToInactiveCounter);
    }
    incrementInactiveToActiveCounter(){
        this.inactiveToActiveCounter++;
        console.log('Increment Inactive To Active: ' + this.inactiveToActiveCounter);
    }

}