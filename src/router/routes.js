import errors from "./modules/errors"
import indexRouter from "./modules/index";
// 基础路由
const routes = [
    ...errors,
    ...indexRouter,


];
export default routes;
