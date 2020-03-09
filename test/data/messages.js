class Message {
    notEligibleMessageDesjardin() {
        return 'Sorry, based on your contract number and certificate number you do not appear to be eligible.';
    };

    eligibleMessageDesjardins() {
        return 'Good news!';
    };

    eligibleDesjardinsBtnText() {
        return 'Send me my activation link';
    }

    signupPageCardTitle() {
        return 'Let\'s get your account set up!';
    };
}

export default new Message()