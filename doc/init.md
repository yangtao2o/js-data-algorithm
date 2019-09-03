### 安装

```bash
  npm install --save-dev jest
  npm install babel-jest babel-core@^7.0.0-bridge.0 @babel/core regenerator-runtime babel-preset-env
```

#### 编辑package.json

```bash
  {
    "scripts": {
      "test": "jest"
    }
  }
```

#### 编辑.babelrc

```bash
  {
    "presets": ["env", "react"]
  }
```

### 创建js文件

code/sum.js

```js
  function sum(a, b) {
    return a + b;
  }
  export default sum;
```

test/sum.test.js

```js
  import sum from './index'

  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
```

#### 启动测试

```bash
npm test

> js-data-algorithm@1.0.0 test /Users/yangtao/Documents/yangtao/js-data-algorithm
> jest ./test

 PASS  test/sum.test.js
  ✓ adds 1 + 2 to equal 3 (3ms)

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        1.733s
Ran all test suites matching /.\/test/i.
```

安装成功

### 工具安装

- IDE：Atom
- 插件：[platformio-ide-terminal](https://github.com/platformio/platformio-atom-ide-terminal)

