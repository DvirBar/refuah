import nodemailer, { SendMailOptions } from "nodemailer";

async function createTransporter() {
	const transporter = nodemailer.createTransport({
		host: "smtp.zoho.com",
		secure: true,
		port: 465,
		auth: {
			user: process.env.ZOHO_EMAIL,
			pass: process.env.ZOHO_PASSWORD,
		},
	});

	return transporter;
}

export async function sendEmail(options: SendMailOptions) {
	const transporter = await createTransporter();

	const info = await transporter.sendMail(options);

	return info;
}

export default createTransporter;
