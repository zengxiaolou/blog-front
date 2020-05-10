import errors from "@/router/modules/errors"
import loginRouter from "./modules/login";
// 基础路由
const routes = [
    ...errors,
    loginRouter,

];
export default routes;
