require('dotenv').config();
const Joi = require('joi');
const nodemailer = require('nodemailer');

exports.handleContactForm = async (req, res) => {
    const schema = Joi.object({
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        message: Joi.string().required()
    });

    const { error, value } = schema.validate(req.body);

    if (error) {
        return res.status(400).json({ error: error.details[0].message });
    }

    const { name, email, message } = value;

    try {
        // Set up nodemailer transporter with your email service provider's SMTP details
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,  // Your email address (akashchopade1000@gmail.com)
                pass: process.env.EMAIL_PASS   // App-specific password you generated
            },
            tls: {
                rejectUnauthorized: false  // This can help avoid issues with self-signed certificates
            }
        });

        // Set up email data
        const mailOptions = {
            from: process.env.EMAIL_USER,  // The sender's email address
            to: 'akashchopade8686@gmail.com',  // Recipient's email address
            subject: 'New Contact Form Submission',
            html: `
                <html>
                <head>
                    <style>
                        body {
                            font-family: Arial, sans-serif;
                            color: #333;
                            background-color: #f4f4f4;
                            margin: 0;
                            padding: 20px;
                        }
                        .container {
                            background-color: #fff;
                            padding: 20px;
                            border-radius: 8px;
                            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                        }
                        .header {
                            text-align: center;
                            background-color: #4CAF50;
                            color: white;
                            padding: 10px 0;
                            border-radius: 4px;
                            font-size: 20px;
                        }
                        .content {
                            margin-top: 20px;
                        }
                        .content p {
                            font-size: 16px;
                            line-height: 1.5;
                        }
                        .footer {
                            margin-top: 30px;
                            text-align: center;
                            font-size: 14px;
                            color: #777;
                        }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <div class="header">
                            New Contact Form Submission
                        </div>
                        <div class="content">
                            <p><strong>Name:</strong> ${name}</p>
                            <p><strong>Email:</strong> ${email}</p>
                            <p><strong>Message:</strong></p>
                            <p>${message}</p>
                        </div>
                        <div class="footer">
                            <p>Thank you for using our contact form.</p>
                        </div>
                    </div>
                </body>
                </html>
            `
        };        

        // Send the email
        await transporter.sendMail(mailOptions);
        
        const mailResponse = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: "Thank You for Reaching Out!",
            html: `
                <p>Hi there,</p>
                <p>Thank you for getting in touch! I appreciate you reaching out through my portfolio site. I'll review your message and respond as soon as possible.</p>
                <p>In the meantime, feel free to connect with me on <a href="https://www.linkedin.com/in/akash-chopade-b130221b1/">LinkedIn</a> or check out my projects on <a href="https://github.com/Akash-Chopade">GitHub</a>.</p>
                <p>Best regards,<br>
                <strong>Akash Chopade</strong><br>
                [Software Developer]<br>
                <a href="https://akashchopade.netlify.app/">https://akashchopade.netlify.app/</a></p>
            `,
        };        

        await transporter.sendMail(mailResponse);
        
        // Send a successful response
        res.status(200).json({ message: 'Form submitted successfully, and email sent!' });

    } catch (err) {
        console.error('Error while sending email:', err);  // More detailed logging
        res.status(500).json({ error: 'Failed to submit the form or send email.', details: err.message });
    }
};
