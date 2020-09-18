/*
@AUTHOR:  zeng_xiao_yu
@GITHUB:  https://github.com/zengxiaolou
@EMAIL:   zengevent@gmail.com
@TIME:    2020/9/18-14:17
*/
import {
    Select, Option, OptionGroup, Input, Row, Button, Image, Col, Dialog, Form, FormItem, Divider,Upload,Radio,Backtop,
    Card, Timeline,Breadcrumb,TimelineItem,BreadcrumbItem,Pagination,RadioGroup,CheckboxGroup,Checkbox,Avatar,Tooltip,
    Tag, Menu, MenuItem, Link, Container, Aside, Main
} from "_element-ui@2.13.2@element-ui";


const element = {
    install: function (Vue) {
        Vue.use(Select),
        Vue.use(Option),
        Vue.use(OptionGroup),
        Vue.use(Input),
        Vue.use(Row),
        Vue.use(Col),
        Vue.use(Button),
        Vue.use(Image),
        Vue.use(Dialog),
        Vue.use(Form),
        Vue.use(FormItem),
        Vue.use(Divider),
        Vue.use(Card),
        Vue.use(Timeline),
        Vue.use(TimelineItem),
        Vue.use(Breadcrumb),
        Vue.use(BreadcrumbItem),
        Vue.use(Pagination),
        Vue.use(RadioGroup),
        Vue.use(Upload),
        Vue.use(Radio),
        Vue.use(CheckboxGroup),
        Vue.use(Checkbox),
        Vue.use(Backtop),
        Vue.use(Avatar),
        Vue.use(Tooltip),
        Vue.use(Tag),
        Vue.use(Menu),
        Vue.use(MenuItem),
        Vue.use(Link),
        Vue.use(Container),
        Vue.use(Aside),
        Vue.use(Main)
    }
}
export default element
