import {Random} from 'mockjs'
const summaryList = () => {
    let data = [];
    for(let i = 0; i < 50; i++) {
        const item = {
            id: Random.guid(),
            account: Random.string(16),
            alias: Random.cword(8, 15),
            presonName: Random.cname(),
            reason: Random.csentence(),
            date: Random.date(),
            avator: Random.image('64x64','red')
        }
        data.push(item);
    }
    console.log('/summary', data);
    return data;
}
export default {
    summaryList
}