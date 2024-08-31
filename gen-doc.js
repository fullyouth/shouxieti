const fs = require('fs');
const path = require('path');

const srcDirectory = path.join(__dirname, 'src');

function readFilesInSrc() {
  return new Promise(resolveWrap => {
    let ret = ''
    let names = ''
    fs.readdir(srcDirectory, async (err, files) => {
      if (err) {
        console.error('Error reading directory:', err);
        return;
      }

      // 过滤出仅.js 文件
      let jsFiles = files.filter(file => path.extname(file) === '.js');
      // 根据文件名排序
      let sortedFiles = jsFiles.sort((a, b) => {
        const numA = parseInt(a.match(/^\d+\./)[0].replace('.', ''));
        const numB = parseInt(b.match(/^\d+\./)[0].replace('.', ''));
        return numA - numB;
      });

      for(let i = 0; i< sortedFiles.length; i++) {
        let curFile = sortedFiles[i]
        await readFile(curFile)
      }
      resolveWrap({
        names: names,
        content: ret
      })

      function readFile(file) {
        return new Promise(resolve => {
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
                  console.log(`【${file}】读取成功`)
                  let title = file.replace('.js', '');
                  names = names ? names + ',' + title : title
                  ret = ret + format(file, content)
                }
                resolve()
              });
            }
          });
        })
      }
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

function createMenu(arr) {
  let list = ''
  arr.forEach(item => {
    list = list + `| [${item}](./src/${item}.js)      |        |\n`
  })
  return `

| 题目      | 描述 |
| ----------- | ----------- |
${list}  
`
}

async function main() {
  const header = `
# Javascript常见面试手写题

每一个方法都使用jest单元测试进行了验证，自己手写练习的时候可以跑单测进行验证

## 单测报告
- [覆盖率](https://www.haoqi123.com/shouxieti/coverage/lcov-report/index.html)
- [单测概览](https://www.haoqi123.com/shouxieti/html-report/index.html)
`
  let { names, content } = await readFilesInSrc()
  let menu = createMenu(names.split(',')) // 目录表格
  let success = await writeDoc(header + menu + content)
  if (success) {
    console.log('创建doc成功~')
  } else {
    console.log('创建doc失败！')
  }
}
main()
