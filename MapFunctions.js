/**
 * Return the map function that map documents of every 5 minutes to the same key.
 * @param statInterval time in milliseconds
 */
const metric5MMap = () => {
    const key = Math.round(this.createTime.getTime() / 300000);
    let val = 1; //error or message
    if (this.type === 'time')
        val = this.time;
    else if (this.type === 'count')
        val = this.count;

    emit(key, val);
};

export {metric5MMap};