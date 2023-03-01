class AuthRequest {
    static initiateEnrolment = {
        name:null,
        email:null
    }
    static completeEnrolment = {
        email:null,
        otp:null,
        password:null,
        passwordConfirmation:null,
    }
    static login = {
        email:null,
        password:null,
    }
    static initiatePasswordReset = {
        email: null
    }
    static completePasswordReset = {
        email:null,
        otp:null,
        password:null,
        passwordConfirmation:null,
    }
    static resendOtp = {
        email: null
    }
}

export default AuthRequest