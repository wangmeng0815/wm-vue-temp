/**
 *  test调用接口
 */
import { safeRequest } from '../utils/';

const getData = (params, cb) => {

}

export default {
  getData(params, cb) {
    let url = '/test/list?';
    const { id, title, content } = params;
    if (id !== '') {
      url += `id=${id}`;
    }
    if (title !== '') {
      url += `title=${title}`;
    }
    if (content !== '') {
      url += `content=${content}`;
    }
    safeRequest({
      url,
    }).then(res => {
      cb(res);
    });
    // setTimeout( ()=> cb({
    //     code: 0,
    //     message: 'success',
    //     data: _jsonData
    // }), 100);
  }
}
