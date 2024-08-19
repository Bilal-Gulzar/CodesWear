require("dotenv").config();
import dbConnect from "@/app/middleWare/mongoose";
import user from "@/app/models/user";
var jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");


export  const POST = async (req,res)=>{
try{
const body = await req.json()
await dbConnect()
let userEmail = await user.findOne({email:body.email})
if(!userEmail){
      return Response.json({success:false,message:"No account associated with this email."})

}
else{
    const resetToken = jwt.sign({ id: userEmail._id }, process.env.JWT_SECRET_KEY, {
  expiresIn: "5m",
});
     // return Response.json({ success: false, message: resetToken });

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.error("Error during SMTP connection verification:", error);
  } else {
    console.log("SMTP connection is ready:", success);
  }
});


 const resetUrl = `${process.env.NEXT_PUBLIC_HOST}/forgot?token=${resetToken}`;

const mailOptions = {
  from: process.env.EMAIL_USER,
  to: userEmail.email,
  subject: "Password Reset Request for Your Codeswear Account",
  text: `
Dear User,

We received a request to reset the password for your Codeswear account associated with ${userEmail.email}. If you did not request a password reset, please ignore this email. Your account security is our top priority.

To reset your password, please click the link below:

Reset Your Password: ${process.env.NEXT_PUBLIC_HOST}/forgot?token=${resetToken}

This link will expire in 5 minutes for security reasons. If the link has expired, you can request another password reset by following the same steps.

### Why Reset Your Password?

We encourage you to regularly update your password to keep your account secure. If you suspect that your account may have been compromised, please reset your password immediately.

### Steps to Reset Your Password:

1. Click on the "Reset Your Password" link above.
2. Enter your new password. Make sure it’s strong and secure!
3. Confirm your new password and submit the form.
4. You will receive a confirmation that your password has been updated successfully.

### Need More Help?

If you encounter any issues during this process or have questions about your account, feel free to contact our support team at support@codeswear.com.

Thank you for being a valued member of the Codeswear community!

Best regards,  
The Codeswear Team

**Note**: This email was generated automatically. Please do not reply to this email.
`,
};

  await transporter.sendMail(mailOptions);
  return Response.json({success:true, message: "Reset link sent" });
}
}


catch(error){

     return Response.json(error)
}



}
