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

function createMenu(title, arr) {
  let list = ''
  arr.forEach(item => {
    let anchor = item.replace('.', '')
    list = list + `| [${item}](#${anchor})      |        |\n`
  })
  return `
**${title}**
| 题目      | 描述 |
| ----------- | ----------- |
${list}  
`
}

function createTag(arr) {
  let tagData = require('./config/class.json')
  let data = {
  }
  let lastList = []
  arr.forEach(fileName => {
    let finded = false
    for (let tag in tagData) {
      data[tag] = data[tag] || []
      let taglist = tagData[tag]
      let nameIndex = +fileName.split('.')[0]
      if (taglist.includes(nameIndex)) {
        data[tag].push(fileName)
        finded = true
      }
    }
    if (!finded) {
      lastList.push(fileName)
    }
  })
  data['未分类'] = lastList
  console.log('分类数据', data)

  let ret = ''
  Object.keys(data).forEach(tag => {
    ret += createMenu(tag, data[tag])
  })
  return ret
}

async function main() {
  const header = `
# Javascript常见面试手写题
此文档由\`npm run docs\` 自动生成  

本仓库通过自动化脚本，每次push会自动跑单测  
**100%单测通过**,每一个方法都使用jest单元测试进行了验证  

后续会持续更新  

## 单测报告
每次push自动生成测试报告  
- [覆盖率](https://www.haoqi123.com/shouxieti/coverage/lcov-report/index.html)
- [单测概览](https://www.haoqi123.com/shouxieti/html-report/index.html)
![image](./static/ut1.pic.jpg)
![image](./static/ut2.pic.jpg)
`
  let { names, content } = await readFilesInSrc()
  let menu = createTag(names.split(',')) // 目录表格
  let success = await writeDoc(header + menu + content)
  if (success) {
    console.log('创建doc成功~')
  } else {
    console.log('创建doc失败！')
  }
}
main()
