import axios from 'axios'
import { axiosInstance, baseUrl } from '@/api/config'
const request = axios.create({
    baseURL: baseUrl
})
import cloneDeep from 'lodash/cloneDeep'
let requestObjext={},countObjext={};
request.interceptors.request.use(
    config => {
        let {method = 'get', url, data,params} = config;
        data=params || data || {};
        let strParams=`${Object.keys(data).map((k) => `${k}=${encodeURI(data[k])}`).join('&')}`;
        let countFlag=strParams?`${strParams}`:url;
        if(typeof countObjext[countFlag]==='undefined'){
            countObjext[countFlag]=0
        }
        requestObjext[countFlag]=cloneDeep(config)
        if (method === 'get') {
            if(/\?/.test(url)){
                url += `&_t=${new Date().getTime()}`;
            }else {
                if(!config.params){
                    config.params={_t:new Date().getTime()}
                }else {
                    config.params._t=new Date().getTime()
                }
            }
        } else {
            if(/\?/.test(url)){
                url += `&_t=${new Date().getTime()}`;
            }else {
                if(!config.data){
                    config.data={_t:new Date().getTime()}
                }else {
                    config.data._t=new Date().getTime()
                }
            }
        }
        config.url=url
        return config
    }
)
request.interceptors.response.use(
    async response => {
        if (response.status === 200) {
            let {method = 'get', url, data,params} = response.config;
            data=params || data || {};
            delete data._t
            let strParams=`${Object.keys(data).map((k) => `${k}=${encodeURI(data[k])}`).join('&')}`;
            let countFlag=strParams?`${strParams}`:url;
          console.log(response)
            if (response.data.code > 9999) {
                countObjext[countFlag]++
                if (countObjext[countFlag] < 2) {
                    const result = await axiosInstance(requestObjext[countFlag])
                    return {data:result}
                }
            }else {
                delete countObjext[countFlag]
                delete requestObjext[countFlag]
            }
            return response
        }
    },
    error => Promise.reject(error)
)

export default request
