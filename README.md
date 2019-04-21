This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`

获取项目，安装依赖

### `npm start`

项目运行，端口和有页面的地址为：http://localhost:3000/#/three_1

### `npm run eject`

当前版本没有使用eject来暴露webpack配置，原本想eject一下，然后配置一下less-loader,但是感觉样式方面的工作并不多（几乎没有），所以就没有eject了

## about this project

写这个demo项目，旨在简化react项目中各种工具的搭建，让大家写react项目的时候，能够像vue那样简便

比如，vue的一些路由操作直接可以通过 this.$route 对象进行操作，有了这个demo，你也可以在react项目中实现上述简洁操作

又比如，vue中的状态管理工具VueX，对应react中也有redux,有了这个demo，你可以在页面中通过 this.$store 来访问和操作事先定义好的Reducer

后期将会复制其他在vue中便捷的操作到react中，例如axios，敬请期待


## 注意
为了实现上述功能，我们的所有组件/页面要继承自一个新的类：MiddleComponent；

它就在 /src/utils/MiddleComponent 下，当然这并不影响你像之前写页面的方式(继承自react的Component类)

如果你想采用新的方式写组件(继承自MiddleComponent)，你的单个组件/页面的js文件要这样写：

#### import {MiddleComponent,React} from '../../utils/MiddleComponent';
#### export class Frame extends MiddleComponent {}

哈哈，意思就是，先引入MiddleComponent这个类文件，然后基于这个类来编写你自己的组件/页面

还需注意的是，有两个文件夹/文件的位置最好不要随便移动，它们分别是：

#### /src/redux/index.js  
不难看出，这是redux的文件目录，我们在MiddleComponent.js文件中用相对路径引入了它，所以，你最好不要移动它

#### /src/utils  
这个文件夹下面已存在的文件，你最好不要动，它这个项目的核所在！

## 项目预览

![avatar](/public/temp.jpg)

## 结语
最后，希望大家都能开心的敲代码！

