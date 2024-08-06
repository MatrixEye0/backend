class Apiresponse{
    constructor(statusCode,data,message="Success"){
        this.statuscode=statuscode
        this.data=null
        this.message=message
        this.success=statusCode<400
    }
}