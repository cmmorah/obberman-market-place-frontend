class Urls {
// authentication
    static
    loginUrl = '/authentication/login'
    static
    initiateEnrollmentUrl = '/authentication/initiate-enrollment'
    static
    completeEnrollmentUrl = '/authentication/complete-enrollment'
    static
    getUserDetailsUrl = '/authentication/user-details'
    static
    productImageTos3Url = '/uploadimage2s3'
    static
    initiateResetPasswordUrl = '/authentication/initiate-password-reset'
    static
    completeResetPasswordUrl = '/authentication/complete-password-reset'
    static
    resendOtpUrl = '/authentication/resend-otp'
    static
    logOutUrl = '/authentication/logout'


//product
    static
    createProductUrl = '/product/create'
    static
    readProductUrl = '/product/read'
    static
    readProductByIdUrl = `/product/read-by-id/`
    static
    readProductByUserIdUrl = '/product/read-by-user-id'
    static
    deleteUrl = `/product/delete/:productId`


}

export default Urls