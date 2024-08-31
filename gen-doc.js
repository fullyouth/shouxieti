const fs = require('fs');
const path = require('path');

const srcDirectory = path.join(__dirname, 'src');

function readFilesInSrc() {
  return new Promise(resolve => {
    let ret = ''
    fs.readdir(srcDirectory, (err, files) => {
      if (err) {
        console.error('Error reading directory:', err);
        return;
      }

      // 过滤出仅.js 文件
      let jsFiles = files.filter(file => path.extname(file) === '.js');

      // 自定义排序函数
      jsFiles = jsFiles.sort((a, b) => {
        const numA = parseInt(a.match(/^\d+\./)?.[0].replace('.', ''));
        const numB = parseInt(b.match(/^\d+\./)?.[0].replace('.', ''));
        return numA - numB;
      });

      jsFiles.forEach((file, index) => {
        const filePath = path.join(srcDirectory, file);
        fs.stat(filePath, (statErr, stats) => {
          if (statErr) {
            console.error('Error getting file stats:', statErr);
            return;
          }

          if (stats.isFile()) {
            fs.readFile(filePath, 'utf8', (readErr, content) => {
              if (readErr) {
                console.error(`Error reading file ${filePath}:`, readErr);
              } else {
                ret = ret + format(file, content)
              }
              if (index === files.length - 1) {
                resolve(ret)
              }
            });
          }
        });
      });
    });
  })
}

function format(name, content) {
  let fileName = name
  let title = name.replace('.js', '');
  content = `
\#\#\# [${title}](./src/${fileName})
\`\`\`js
${content}
\`\`\`
  `
  console.log(path)
  return content
}

function writeDoc(content) {
  return new Promise(resolve => {
    const filePath = 'readme.md';

    fs.writeFile(filePath, content, (err) => {
      if (err) {
        resolve(false)
      } else {
        resolve(true)
      }
    });
  })
}

async function main() {
  const header = `
# Javascript常见面试手写题

每一个方法都使用jest单元测试进行了验证，自己手写练习的时候可以跑单测进行验证

## 单测报告
- [覆盖率](https://www.haoqi123.com/shouxieti/coverage/lcov-report/index.html)
- [单测概览](https://www.haoqi123.com/shouxieti/html-report/index.html)
`
  let content = await readFilesInSrc()
  let success = await writeDoc(header + content)
  if (success) {
    console.log('创建doc成功~')
  } else {
    console.log('创建doc失败！')
  }
}
main()
