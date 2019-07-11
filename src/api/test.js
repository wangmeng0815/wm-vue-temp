/**
 * Mock client-server processing
 */

const _jsonData = [{
    "id": 1, "title": 'test1', "content": "content1", "nums": '15'
}, {
    "id": 2, "title": 'test2', "content": "content2", "nums": '14'
}, {
    "id": 3, "title": 'test3', "content": "content3", "nums": '41'
}];

export default {
    getData(cb){
        setTimeout( ()=> cb({
            code: 0,
            message: 'success',
            data: _jsonData
        }), 100);
    }
}