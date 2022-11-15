import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosRequestHeaders } from "axios";
import { ElMessage } from 'element-plus';
import { url } from "inspector";
import { stringify } from "querystring";
const config = {
    //baseURL为我们的请求地址，上线的时候就是一个域名
    baseURL: 'http://localhost:8089',
    timeout: 10000
}
//定义返回值类型   <T = any> 表示如果我们传入T则data就是T类型比如（Result<number>则data就是number类型）不传就是any类型
export interface Result<T = any>{
    code:number,
    msg:string,
    data:T
}
class Http {
    //请求实例
    private instance:AxiosInstance;
    //构造函数
    constructor(config:AxiosRequestConfig) {
        this.instance = axios.create(config)
        //定义拦截器
        this.interceptors()
    }
    //拦截器
    private interceptors() {
        //请求发送前的处理一般就是将token加入到请求头中
        this.instance.interceptors.request.use((config:AxiosRequestConfig) => {
            let token = '' //token 一般存放在cokies或者sessionStorage中
            if(token) {
                config.headers!['token'] = token //！代表token这个字段必然存在于headers中 不加会提示token没有定义
            }
            return config
        },(error:any)=>{
            error.data = {}
            error.data.msg = '服务器异常，请联系管理员!'
            return error;
        })
        // 请求发送后的拦截器一般适用于根据后端反馈的状态码输出相应的信息
        this.instance.interceptors.response.use((res:AxiosResponse)=>{
            if (res.data.code != 200) {
                ElMessage.error(res.data.msg || '服务器出错!') //如果没有 res.data.msg的话就会返回 “服务器出错！”
                return Promise.reject(res.data.msg || '服务器出错')
            } else {
                return res.data
            }
        },(error:any)=>{
            console.log('进入错误')
            error.data = {};
            if (error && error.response) {
                switch (error.response.status) {
                    case 400:
                        error.data.msg = '错误请求';
                        ElMessage.error(error.data.msg)
                        break
                    case 401:
                        error.data.msg = '未授权，请重新登录';
                        ElMessage.error(error.data.msg)
                        break
                    case 403:
                        error.data.msg = '拒绝访问';
                        ElMessage.error(error.data.msg)
                        break
                    case 404:
                        error.data.msg = '请求错误,未找到该资源';
                        ElMessage.error(error.data.msg)
                        break
                    case 405:
                        error.data.msg = '请求方法未允许';
                        ElMessage.error(error.data.msg)
                        break
                    case 408:
                        error.data.msg = '请求超时';
                        ElMessage.error(error.data.msg)
                        break
                    case 500:
                        error.data.msg = '服务器端出错';
                        ElMessage.error(error.data.msg)
                        break
                    case 501:
                        error.data.msg = '网络未实现';
                        ElMessage.error(error.data.msg)
                        break
                    case 502:
                        error.data.msg = '网络错误';
                        ElMessage.error(error.data.msg)
                        break
                    case 503:
                        error.data.msg = '服务不可用';
                        ElMessage.error(error.data.msg)
                        break
                    case 504:
                        error.data.msg = '网络超时';
                        ElMessage.error(error.data.msg)
                        break
                    case 505:
                        error.data.msg = 'http版本不支持该请求';
                        ElMessage.error(error.data.msg)
                        break
                    default:
                        error.data.msg = `连接错误${error.response.status}`;
                        ElMessage.error(error.data.msg)
                }
            } else {
                error.data.msg = "连接到服务器失败";
                ElMessage.error(error.data.msg)
            }
            return Promise.reject(error)
        })
    }
    //resful api封装
    // GET请求
    get<T = Result>(url: string, params?: object):Promise<T> {
        return this.instance.get(url,{params})
    }
    // POST请求
    post<T = Result>(url: string, data?: object) : Promise<T> {
        return this.instance.post(url,data)
    }
    //PUT请求
    put<T = Result>(url: string, data?: object) : Promise<T> {
        return this.instance.put(url,data)
    }
    //DELETE请求
    delete<T = Result>(url:string):Promise<T> {
        return this.instance.delete(url)
    }
}
export default new Http(config)