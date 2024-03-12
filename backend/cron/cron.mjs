import cron from 'node-cron';
import Task from "../models/Task.mjs";
import emailjs from "@emailjs/nodejs";
import axios from 'axios';
import { emailServiceID, emailTemplateID, emailPublicKey } from "../config/index.mjs";

const getAllTaks = async (req, res) => {
    // try {
        // const tasks = await Task.find({}).sort({
        //     date: -1,
        // }).exec();
        // let newDate = new Date()
        // let currTime = newDate.getHours() + ":" + newDate.getMinutes();
        // console.log("==========",currTime);
        // currTime = Math.floor(parseInt(currTime) * 60);

        // let allTasks = [...tasks];

        // var template_params = {
        //     name: 'James',
        //     email:'abc100@yopmail.com',
        //     message: 'Check this out!',
        //   };
          
        // for (let tesk of allTasks) {
        //     let tsTime = Math.floor(parseInt(tesk.time) * 60)

        //     if (currTime === tsTime && !tesk.done) {
                // emailjs
                //     .send(
                //         emailServiceID,
                //         emailTemplateID,
                //         template_params,
                //         emailPublicKey,
                //         {
                //             publicKey: emailPublicKey
                //         }
                //     )
                //     .then((res) => console.log('SUCCESS!', res.status, res.text))
                //     .catch((err) => console.log('FAILED...', err));



                //     //=============================================================
                //     // code fragment
                //         var data = {
                //             service_id: emailServiceID,
                //             template_id: emailTemplateID,
                //             user_id: emailPublicKey,
                //             template_params: {
                //                 'name': 'James',
                //                 'email':'abc100@yopmail.com',
                //                 'message': 'Check this out!',
                //                 'username': 'James',
                //                 'g-recaptcha-response': '03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...'
                //             }
                //         };
                //         let url = 'https://api.emailjs.com/api/v1.0/email/send'
    //         }
    //     }
    //     console.log('currTime=============:', currTime);

    // } catch (error) {
    //     console.error(error);
    // }
};

function logMessage() {

    // let m1 = new Map();
    // for (let event of newEvents) {
    //     let presentDate = `${moment(event.date).format("MMMM YYYY")}`;
    //     let a = m1.get(presentDate);
    //     if (!event.trashed) {
    //         if (!a) m1.set(presentDate, [event]);
    //         else m1.set(presentDate, [...a, event]);
    //     }
    // }
    // let newArr = [];
    // for (const [key, value] of m1) {
    //     newArr = [
    //         ...newArr,
    //         {
    //             month: key,
    //             eventsOfMonth: value,
    //         },
    //     ];
    // }

    console.log('Cron job executed at:', new Date().toLocaleString());
}
// Schedule the cron job to run every minute
cron.schedule('* * * * *', () => {
    logMessage();
});

const cronJob = async () => {
    getAllTaks();
    return logMessage()
}; 

export default cronJob;