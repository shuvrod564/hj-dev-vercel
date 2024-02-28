
import { Resend } from "resend" 
import { NextResponse } from "next/server";

export const POST = async (request) => {
    const la_reqData = await request.json();
    // console.log("la_reqData",la_reqData)
    try {
        const resend = new Resend(process.env.RESENT_API_KEY);
        let bodypart = ` 
            <table width="100%" cellspacing="0" cellpadding="0" border="0">  
                <tr>
                    <td style="border:1px solid #d5d2d2;border-bottom:0;padding:5px 10px;font-size:12px;font-weight:600;" width="90">Subject</td>
                    <td style="border:1px solid #d5d2d2;border-bottom:0;padding:5px 10px;font-size:14px;border-left:0;">New Service Provider Enquiry Recieved</td>
                </tr>   
                <tr>
                    <td style="border:1px solid #d5d2d2;border-bottom:0;padding:5px 10px;font-size:12px;font-weight:600;" width="90">Entity Name</td>
                    <td style="border:1px solid #d5d2d2;border-bottom:0;padding:5px 10px;font-size:14px;border-left:0;">${la_reqData.entity_name}</td>
                </tr> 
                <tr>
                    <td style="border:1px solid #d5d2d2;border-bottom:0;padding:5px 10px;font-size:12px;font-weight:600;" width="90">Entity Type</td>
                    <td style="border:1px solid #d5d2d2;border-bottom:0;padding:5px 10px;font-size:14px;border-left:0;">${la_reqData.entity_type}</td>
                </tr> 
                <tr>
                    <td style="border:1px solid #d5d2d2;border-bottom:0;padding:5px 10px;font-size:12px;font-weight:600;" width="90">Location</td>
                    <td style="border:1px solid #d5d2d2;border-bottom:0;padding:5px 10px;font-size:14px;border-left:0;">${la_reqData.location}</td>
                </tr> 
                <tr>
                    <td style="border:1px solid #d5d2d2;border-bottom:0;padding:5px 10px;font-size:12px;font-weight:600;" width="90">Email Address</td>
                    <td style="border:1px solid #d5d2d2;border-bottom:0;padding:5px 10px;font-size:14px;border-left:0;">${la_reqData.email}</td>
                </tr>
                <tr>
                    <td style="border:1px solid #d5d2d2;padding:5px 10px;font-size:12px;font-weight:600;" width="90">Phone Number</td>
                    <td style="border:1px solid #d5d2d2;padding:5px 10px;font-size:14px;border-left:0;">${la_reqData.phone}</td>
                </tr>  
            </table>
        `
        resend.emails.send({
            from: 'onboarding@resend.dev',
            to: process.env.REQUEST_PRIMARY_MAIL,
            subject: 'Contact Request',
            html:  bodypart
        });
  
        return NextResponse.json({ message: "success"}, {status: 200 });
    } catch (err) {
       
      console.log("error data",err)
     
      return NextResponse.json({ message: "error"}, {status: 500 });
    }
  };
  