class Message {
    notEligibleMessageDesjardin () {
        return 'Sorry, based on your contract number and certificate number you do not appear to be eligible.';
    };

    eligibleMessageDesjardins (messageNumber) {
        let message = '';
        if(messageNumber === 2){
            message = 'Good news!';
        }
        else if (messageNumber === 3){
            message = 'Your account is eligible for a Medisys on Demand membership.';
        }
        else if (messageNumber === 4){
            message = 'To verify your identity, we\'ll send you a welcome email with an activation link.';
        }
        return message;
    };

    eligibleDesjardinsBtnText(){
        return 'Send me my activation link';
    }

    signupPageCardTitle () {
        return 'Let\'s get your account set up!';
    };
}

export default new Message()