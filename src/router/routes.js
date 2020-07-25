import errors from "./modules/errors"
import loginRouter from "./modules/login";
import indexRouter from "./modules/index";
// 基础路由
const routes = [
    ...errors,
    ...indexRouter,
    loginRouter,

];
export default routes;
