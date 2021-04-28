import Vue from 'vue'
import { FormItem,Form,Input,Message,Button,Container,Aside,Main,Footer ,Header,Menu,Submenu,MenuItem,MenuItemGroup,Row,Slider,Image,Carousel,CarouselItem,Option, Select,Switch} from 'element-ui'
// 按需导入时需要进行导入
Vue.use(Button)
Vue.use(FormItem)
Vue.use(Form)
Vue.use(Input)
Vue.use(Container)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Footer)
Vue.use(Header)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Row)
Vue.use(Slider)
Vue.use(Carousel)
Vue.use(CarouselItem)
Vue.use(Image)
Vue.use(Option);
Vue.use(Select);
Vue.use(Switch);


//挂载弹框=>用户可以直接使用this.$message.error()/this.$message.success()/this.$message.warning()进行相关设置
//其中弹框的引入需要引入Message
Vue.prototype.$message=Message
