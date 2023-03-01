class AppRequest{
    static createDocument = {
        fileUpload:{
            username: null,
            base64: null,
            region: "us-east-1",
            source: 'quickgem',
            s3bucket: 'quikgem-repo'
        }
    }
    static createProduct = {
        category :null,
        user_id :null,
        location :null,
        pictures :null,
        youtube_link :null,
        title :null,
        brand :null,
        condition :null,
        description :null,
        price :null,
        seller_phone :null,
        seller_name :null,
    }

}

export default AppRequest
