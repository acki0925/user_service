const axios = require('axios')


class BinanceApiService {

    async klines(){
        const {ip,port}= await this.getService('user_service');
        return this.callService({
            method:'get',
            url:`http://${ip}:${port}/klines`
        })

    }
    async newOrder(bodyParam){
        const {ip,port}= await this.getService('user_service');
        return this.callService({
            method:'post',
            url:`http://${ip}:${port}/neworder`,
            data:bodyParam
        })

    }
    async queryOrder(){
        const {ip,port}= await this.getService('user_service');
        return this.callService({
            method:'get',
            url:`http://${ip}:${port}/queryorder`
        })

    }
    async cancelOrder(){
        const {ip,port}= await this.getService('user_service');
        return this.callService({
            method:'delete',
            url:`http://${ip}:${port}/cancelorder`
        })

    }
    async cancelAllOpenSymbol(){
        const {ip,port}= await this.getService('user_service');
        return this.callService({
            method:'delete',
            url:`http://${ip}:${port}/cancelallopensymbol`
        })

    }

    async currentOrder(){
        const {ip,port}= await this.getService('user_service');
        return this.callService({
            method:'get',
            url:`http://${ip}:${port}/currentorder`
        })

    }
    async allOrder(){
        const {ip,port}= await this.getService('user_service');
        return this.callService({
            method:'get',
            url:`http://${ip}:${port}/allorder`
        })

    }

    async callService(requestOptions) {
        const response = await axios(requestOptions);
        return response.data;
    }

    async getService(servicename) {
        const response = await axios.get(`http://localhost:3000/find/${servicename}/1`);
        return response.data;
    }
}

module.exports = BinanceApiService;