"use server"
import {Resend} from "resend"

const resend = new Resend(process.env.BUZI_EMAIL_API)

interface  Details {
	name: FormDataEntryValue |null
		email: FormDataEntryValue |null
	category: FormDataEntryValue |null
	service: FormDataEntryValue |null
	description: FormDataEntryValue |null
		tools: FormDataEntryValue |null
	timeline: FormDataEntryValue |null


}
export const sendEmail = async (data:Details)=>{
	try{
		Object.entries(data).forEach(([key,val])=>{
			if (!val){
				throw new Error("Please input a valid "+key)
			}
		})

		await resend.emails.send({
			to:"technerds200@gmail.com",
			from:"buzizgrowthplatform@buzigrowth.com",
			text:JSON.stringify(data),
			subject:"New Customer"
		})
	}catch (err){
		return err instanceof Error && err.message
	}
}