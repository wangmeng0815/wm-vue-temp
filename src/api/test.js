/**
 *  test调用接口
 */
import { safeRequest } from '../utils/';


// const _jsonData = [{
//     "id": 1, "title": 'test1', "content": "content1", "nums": '15'
// }, {
//     "id": 2, "title": 'test2', "content": "content2", "nums": '14'
// }, {
//     "id": 3, "title": 'test3', "content": "content3", "nums": '41'
// }];

export default {
    getData(params, cb){
        let url = '/test/list?';
        const { id, title, content } = params;
        if(id !== ''){
            url += `id=${id}`;
        }
        if(title !== ''){
            url += `title=${title}`;
        }
        if(content !== ''){
            url += `content=${content}`; 
        }
        safeRequest({
            url,
        }).then( res => {
            cb(res);
        });
        // setTimeout( ()=> cb({
        //     code: 0,
        //     message: 'success',
        //     data: _jsonData
        // }), 100);
    }
}