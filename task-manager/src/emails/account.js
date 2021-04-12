const sgMail = require('@sendgrid/mail')

const sendgridAPIKey = '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'

sgMail.setApiKey(sendgridAPIKey)

sgMail.send({
    to: 'thereallouiew@gmail.com',
    from: 'thereallouiew@gmail.com',
    subject: 'This is my first creation!',
    text: 'I hope this one actually gets to you.'
});