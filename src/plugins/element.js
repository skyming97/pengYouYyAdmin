import Vue from 'vue'
// 完整引入
// import Element from 'element-ui'

// 按需引入
import {
    Button, Form, FormItem, Input, Container, Row, Col, Menu, MenuItem, Submenu, Breadcrumb, BreadcrumbItem, DatePicker, Select, Option,
    Table, TableColumn, Header, Aside, Main, Tooltip, Card, Dropdown, DropdownItem, DropdownMenu, Dialog, Scrollbar, Avatar, Upload
} from 'element-ui'

import '../element-variables.scss'

// Vue.use(Element)

// 全局配置
Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 };
Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Row)
Vue.use(Col)

Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Submenu)

Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)

Vue.use(DatePicker)
Vue.use(Select)
Vue.use(Option)

Vue.use(TableColumn)
Vue.use(Table)

Vue.use(Tooltip)

Vue.use(Card)
Vue.use(Dropdown)
Vue.use(DropdownItem)
Vue.use(DropdownMenu)
Vue.use(Dialog)

Vue.use(Scrollbar) // 官方未开放,但源码中存在

Vue.use(Avatar)
Vue.use(Upload)