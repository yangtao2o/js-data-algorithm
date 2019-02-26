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
```

### 工具安装

- IDE：Atom
- 插件：[platformio-ide-terminal](https://github.com/platformio/platformio-atom-ide-terminal)