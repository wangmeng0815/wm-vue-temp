import axios from 'axios';
import config from '../config';

export async function safeRequest(_options, callback) {
  let result = {
    code: 1,
    message: '',
    data: null
  }
  let options = {
    methods: 'get',
    timeout: 1000,
  };
  if (_options && _options.url) {
    options = Object.assign(_options, { timeout: 2000 }, {
      url: config.baseUrl + _options.url,
      headers: {
        'Content-Type': 'application/json'
      },
    })
  }

  let ajaxResult = axios(options);
  await ajaxResult.then(res => {
    if (res.status == 200 && res.statusText == 'OK') {
      result = res.data;
    } else {
      // 容错
    }
  });
  return result;
}
