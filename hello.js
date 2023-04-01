const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(8090, () => {
    console.log('示例应用正在监听 8090 端口 !');
});
