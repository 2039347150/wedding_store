import Mock from 'mockjs';
import clothComment from './clothComment.config';
import shoeComment from './shoeComment.config';
import ringComment from './ringComment.config';
import flowerComment from './flowerComment.config';
import bedComment from './bedComment.config';
import candyComment from './candyComment.config';
import necklaceComment from './necklaceComment.config';
import cakeComment from './cakeComment.config';
import headImg from './headImg.config';

// 模拟 评论信息
const mockComment = Mock.mock('http://localhost:8080/api/clothComment', {
  'comments|8': [
    {
      name: '@cname',
      email: '@email',
      'age|18-20': 5,
      'content|1': clothComment,
      'headImg|1': headImg,
      // datetime: '@now(yyyy-MM-dd hh:mm:ss)',
      datetime: '@now(yyyy-MM-dd) @increment(1):00:00',
      'star|4-5': 5,
      'isVIP|0-1': 0,
    },
  ],
});
const mockComment2 = Mock.mock('http://localhost:8080/api/shoeComment', {
  'comments|8': [
    {
      name: '@cname',
      email: '@email',
      'age|18-20': 5,
      'content|1': shoeComment,
      'headImg|1': headImg,
      // datetime: '@now(yyyy-MM-dd hh:mm:ss)',
      datetime: '@now(yyyy-MM-dd) @increment(1):00:00',
      'star|4-5': 5,
      'isVIP|0-1': 0,
    },
  ],
});
const mockComment3 = Mock.mock('http://localhost:8080/api/ringComment', {
  'comments|8': [
    {
      name: '@cname',
      email: '@email',
      'age|18-20': 5,
      'content|1': ringComment,
      'headImg|1': headImg,
      // datetime: '@now(yyyy-MM-dd hh:mm:ss)',
      datetime: '@now(yyyy-MM-dd) @increment(1):00:00',
      'star|4-5': 5,
      'isVIP|0-1': 0,
    },
  ],
});
const mockComment4 = Mock.mock('http://localhost:8080/api/flowerComment', {
  'comments|8': [
    {
      name: '@cname',
      email: '@email',
      'age|18-20': 5,
      'content|1': flowerComment,
      'headImg|1': headImg,
      // datetime: '@now(yyyy-MM-dd hh:mm:ss)',
      datetime: '@now(yyyy-MM-dd) @increment(1):00:00',
      'star|4-5': 5,
      'isVIP|0-1': 0,
    },
  ],
});
const mockComment5 = Mock.mock('http://localhost:8080/api/bedComment', {
  'comments|8': [
    {
      name: '@cname',
      email: '@email',
      'age|18-20': 5,
      'content|1': bedComment,
      'headImg|1': headImg,
      // datetime: '@now(yyyy-MM-dd hh:mm:ss)',
      datetime: '@now(yyyy-MM-dd) @increment(1):00:00',
      'star|4-5': 5,
      'isVIP|0-1': 0,
    },
  ],
});
const mockComment6 = Mock.mock('http://localhost:8080/api/candyComment', {
  'comments|8': [
    {
      name: '@cname',
      email: '@email',
      'age|18-20': 5,
      'content|1': candyComment,
      'headImg|1': headImg,
      // datetime: '@now(yyyy-MM-dd hh:mm:ss)',
      datetime: '@now(yyyy-MM-dd) @increment(1):00:00',
      'star|4-5': 5,
      'isVIP|0-1': 0,
    },
  ],
});
const mockComment7 = Mock.mock('http://localhost:8080/api/necklaceComment', {
  'comments|8': [
    {
      name: '@cname',
      email: '@email',
      'age|18-20': 5,
      'content|1': necklaceComment,
      'headImg|1': headImg,
      // datetime: '@now(yyyy-MM-dd hh:mm:ss)',
      datetime: '@now(yyyy-MM-dd) @increment(1):00:00',
      'star|4-5': 5,
      'isVIP|0-1': 0,
    },
  ],
});
const mockComment8 = Mock.mock('http://localhost:8080/api/cakeComment', {
  'comments|8': [
    {
      name: '@cname',
      email: '@email',
      'age|18-20': 5,
      'content|1': cakeComment,
      'headImg|1': headImg,
      // datetime: '@now(yyyy-MM-dd hh:mm:ss)',
      datetime: '@now(yyyy-MM-dd) @increment(1):00:00',
      'star|4-5': 5,
      'isVIP|0-1': 0,
    },
  ],
});
export default {
  mockComment,
  mockComment2,
  mockComment3,
  mockComment4,
  mockComment5,
  mockComment6,
  mockComment7,
  mockComment8,
};
