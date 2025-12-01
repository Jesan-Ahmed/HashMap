class HashMap{
    constructor(){
        this.loadFactor = 0.75;
        this.capacity = 16;
        this.size = 0;
        this.buckets = new Array(this.capacity);
    }
    hash(key){
        let hashCode = 0;

        const primeNumber = 31;
        for(let i = 0; i < key.length; i++) hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
        return hashCode;
    }
    set(key, value){
        const index = this.hash(key);
        if(!this.buckets[index]){
            this.buckets[index] = [[key, value]];
            this.size++;
        }
        else{
            let isInBucket = false;
            for(const bucket of this.buckets[index]){
                if(bucket[0] === key){
                    bucket[1] = value;
                    isInBucket = true;
                    break;
                }
            }
            if(!isInBucket){
                this.buckets[index].push([key, value]);
                this.size++;
            }
        }
        
    }
}