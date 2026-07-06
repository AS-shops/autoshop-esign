import { useState, useRef, useMemo } from "react";
import SignatureCanvas from "react-signature-canvas";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import Modal from "./Modal";
import "./ContractForm.css";
import logoImage from "../assets/autoshop.jpg";

const CONTRACT_TEXT = `<strong>Auto Shop Software Service Agreement
(ဝန်ဆောင်မှု သဘောတူညီချက် စာချုပ်)</strong>

ဤဝန်ဆောင်မှုသဘောတူညီချက်စာချုပ်ကို OTAS Tech Solutions Co., Ltd. (နောင်တွင် "ကုမ္ပဏီ" ဟု ခေါ်ဆိုမည်) နှင့် ဝန်ဆောင်မှုရယူသူ ဝယ်ယူသူ (နောင်တွင် "အသုံးပြုသူ" ဟု ခေါ်ဆိုမည်) တို့အကြား အောက်ပါအချက်အလက်များအတိုင်း သဘောတူညီကြပါသည်။

<strong>၁။ ဝန်ဆောင်မှုအဓိပ္ပာယ်ဖွင့်ဆိုချက် (Service Scope)</strong>
Auto Shop Software သည် OTAS Tech Solutions မှ တီထွင်ထားသော Cloud-based POS (Point of Sale) နှင့် Management Software အမျိုးအစားဖြစ်ပါသည်။ ဤ Software တွင် AI Assistant Manager ပါဝင်ပြီး အသုံးပြုသူသည် အရောင်းအစီရင်ခံစာ (Sales Reports) များကို Text Message ပေးပို့၍ အလွယ်တကူ မေးမြန်းစစ်ဆေးနိုင်မည် ဖြစ်ပါသည်။

<strong>၂။ အသုံးပြုခွင့်နှင့် လိုင်စင်သတ်မှတ်ချက် (User & License Terms)</strong>
အသုံးပြုသူသည် Software ကို အသုံးပြုရာတွင် မိမိပိုင်ဆိုင်သော ဆိုင်ခွဲအရေအတွက် (Number of Shops) နှင့် အသုံးပြုသူအကောင့် (User Accounts) အရေအတွက် ကန့်သတ်ချက်မရှိဘဲ လွတ်လပ်စွာ အသုံးပြုနိုင်ခွင့်ရှိသည်။

<strong>၃။ ဝန်ဆောင်မှုကြေးနှင့် ငွေပေးချေမှု (Subscription & Fees)</strong>
အသုံးပြုသူသည် အောက်ဖော်ပြပါ ဝန်ဆောင်မှုနှုန်းထားများအတိုင်း ပေးချေရန် သဘောတူညီပါသည်။
• စတင်တပ်ဆင်ခ (Setup and Installation Fee): ၃၀၀,၀၀၀ ကျပ် (300,000 MMK) - တစ်ကြိမ်တည်း ပေးချေရန်။
• လစဉ်အသုံးပြုခ (Monthly Subscription Fee): ၈၀,၀၀၀ ကျပ် (80,000 MMK) - လစဉ်ပေးချေရန်။
• <b>အထူးခံစားခွင့် (Waiver Policy): အသုံးပြုသူမှ ဝန်ဆောင်မှုအသုံးပြုခကို  (၁) နှစ်စာ တစ်ပြိုင်နက်တည်း ကြိုတင်ပေးချေပါက စတင်တပ်ဆင်ခ (၃၀၀,၀၀၀ ကျပ်) ကို ပေးဆောင်ရန် မလိုဘဲ အခမဲ့ (Free) ခံစားခွင့်ရရှိမည် ဖြစ်သည်။</b>
• လစဉ် (Month-by-month) အစီအစဉ်ဖြင့် အသုံးပြုသူများသည် Setup and Installation Fee ကို အပြည့်အဝ ပေးဆောင်ရမည်။

<strong>၄။ ဒေတာပိုင်ဆိုင်မှုနှင့် ထိန်းသိမ်းခြင်း (Data Ownership & Storage)</strong>
• ပိုင်ဆိုင်မှု: Software အတွင်းရှိ Customers List, Inventory Data နှင့် အရောင်းအဝယ်မှတ်တမ်းများ အားလုံးသည် အသုံးပြုသူ (User) ၏ တရားဝင် ပိုင်ဆိုင်မှုသာ ဖြစ်သည်။ ကုမ္ပဏီမှ အဆိုပါ ဒေတာများကို တိုက်ရိုက်ကြည့်ရှုခြင်း၊ ရယူခြင်းနှင့် အခြားတစ်ပါးသူထံ လွှဲပြောင်းခြင်း လုံးဝပြုလုပ်မည်မဟုတ်ပါ။
• ဒေတာသိမ်းဆည်းမှု: Software ၏ မြန်ဆန်မှုနှင့် အသုံးပြုသူ၏ Experience ကောင်းမွန်စေရန်အတွက် 
 (Transaction Records) နှင့် Activity Logs များကို (၁) နှစ်အထိသာ Server ပေါ်တွင် သိမ်းဆည်းပေးမည် ဖြစ်သည်။
• ဒေတာကာကွယ်မှု: မမျှော်မှန်းနိုင်သည့် အခြေအနေများတွင် ဒေတာများ ဆုံးရှုံးမှုမရှိစေရန် အကောင်းဆုံး Data Backup Support ကို ကုမ္ပဏီမှ ပံ့ပိုးပေးပါမည်။
• ဒေတာဖျက်သိမ်းမှု: (၁) နှစ်ပြည့်၍ ဒေတာများ မဖျက်မီ ကုမ္ပဏီမှ အသုံးပြုသူထံ ကြိုတင် အကြောင်းကြားမည် ဖြစ်သည်။ အသုံးပြုသူအနေဖြင့် မိမိ၏ ဒေတာဟောင်းများကို Backup အနေဖြင့် Download ရယူထားရန် တာဝန်ရှိသည်။

<strong>၅။ ဝန်ဆောင်မှု ရပ်ဆိုင်းခြင်း (Suspension & Termination)</strong>
• စနစ်ပိတ်သိမ်းခြင်း: လစဉ်ကြေး (Subscription Fee) ပေးဆောင်ရန် ပျက်ကွက်ပါက သတ်မှတ်ရက် ကျော်လွန်သည်နှင့် စနစ်မှ အလိုအလျောက် အသုံးပြုခွင့်ကို ခေတ္တပိတ်သိမ်း (Freeze) မည်ဖြစ်သည်။
• အကောင့်ဖျက်သိမ်းခြင်း: အကောင့်ပိတ်သိမ်းပြီးနောက် (၃၀) ရက်အတွင်း ဆက်လက် ပေးဆောင်ခြင်း မရှိပါက အသုံးပြုသူ၏ အကောင့်နှင့်တကွ ဒေတာများအားလုံးကို စနစ်မှ အပြီးတိုင် ဖျက်သိမ်း (Permanently Delete) သွားမည်ဖြစ်သည်။

<strong>၆။ တာဝန်ယူမှုနှင့် ပံ့ပိုးမှု (Liability & Support)</strong>
• ဝန်ဆောင်မှုရရှိနိုင်မှု: ကုမ္ပဏီအနေဖြင့် ၁၀၀% Server Uptime ရရှိရန် အစွမ်းကုန် ကြိုးပမ်းသွားမည် ဖြစ်သည်။ သို့ရာတွင် မထိန်းချုပ်နိုင်သော အခြေအနေများ (Force Majeure) ကြောင့် ဖြစ်ပေါ်လာနိုင်သော ဝန်ဆောင်မှု အနှောင့်အယှက်များအတွက် အာမခံချက် ပေးနိုင်မည်မဟုတ်ပါ။
• ဒေတာကာကွယ်မှု: မမျှော်မှန်းနိုင်သည့် အခြေအနေများတွင် ဒေတာများ ဆုံးရှုံးမှုမရှိစေရန် အကောင်းဆုံး Data Backup Support ကို ကုမ္ပဏီမှ ပံ့ပိုးပေးပါမည်။

<strong>၇။ မူဝါဒများ ပြင်ဆင်ခြင်း (Policy Updates)</strong>
ကုမ္ပဏီအနေဖြင့် အနာဂတ်တွင် ဖြစ်ပေါ်လာနိုင်သော အခြေအနေများအပေါ် မူတည်၍ ဤမူဝါဒများကို လိုအပ်သလို ပြင်ဆင်မွမ်းမံမှုများ ပြုလုပ်နိုင်ပါသည်။ သို့ရာတွင် မည်သည့်ပြင်ဆင်မှုကိုမဆို အသုံးပြုသူများထံ ကြိုတင်အကြောင်းကြားပေးသွားမည် ဖြစ်သည်။

<strong>Acceptance of Agreement (သဘောတူညီချက်ကို လက်ခံခြင်း)</strong>
အောက်ပါအချက်အလက်များကို ဖြည့်စွက်ခြင်းဖြင့် ဤစာချုပ်ပါ စည်းကမ်းချက်များကို ဖတ်ရှုနားလည်ပြီး သဘောတူညီကြောင်း အတည်ပြုပါသည်။`;

const PDF_TEXT = `<strong>Auto Shop Software Service Agreement
(ဝန်ဆောင်မှု သဘောတူညီချက် စာချုပ်)</strong>

ဤဝန်ဆောင်မှုသဘောတူညီချက်စာချုပ်ကို OTAS Tech Solutions Co., Ltd. (နောင်တွင် "ကုမ္ပဏီ" ဟု ခေါ်ဆိုမည်) နှင့် ဝန်ဆောင်မှုရယူသူ ဝယ်ယူသူ (နောင်တွင် "အသုံးပြုသူ" ဟု ခေါ်ဆိုမည်) တို့အကြား အောက်ပါအချက်အလက်များအတိုင်း သဘောတူညီကြပါသည်။

<strong>၁။ ဝန်ဆောင်မှုအဓိပ္ပာယ်ဖွင့်ဆိုချက် (Service Scope)</strong>
Auto Shop Software သည် OTAS Tech Solutions မှ တီထွင်ထားသော Cloud-based POS (Point of Sale) နှင့် Management Software အမျိုးအစားဖြစ်ပါသည်။ ဤ Software တွင် AI Assistant Manager ပါဝင်ပြီး အသုံးပြုသူသည် အရောင်းအစီရင်ခံစာ (Sales Reports) များကို Text Message ပေးပို့၍ အလွယ်တကူ မေးမြန်းစစ်ဆေးနိုင်မည် ဖြစ်ပါသည်။

<strong>၂။ အသုံးပြုခွင့်နှင့် လိုင်စင်သတ်မှတ်ချက် (User & License Terms)</strong>
အသုံးပြုသူသည် Software ကို အသုံးပြုရာတွင် မိမိပိုင်ဆိုင်သော ဆိုင်ခွဲအရေအတွက် (Number of Shops) နှင့် အသုံးပြုသူအကောင့် (User Accounts) အရေအတွက် ကန့်သတ်ချက်မရှိဘဲ လွတ်လပ်စွာ အသုံးပြုနိုင်ခွင့်ရှိသည်။

<strong>၃။ ဝန်ဆောင်မှုကြေးနှင့် ငွေပေးချေမှု (Subscription & Fees)</strong>
အသုံးပြုသူသည် အောက်ဖော်ပြပါ ဝန်ဆောင်မှုနှုန်းထားများအတိုင်း ပေးချေရန် သဘောတူညီပါသည်။
• စတင်တပ်ဆင်ခ (Setup and Installation Fee): ၃၀၀,၀၀၀ ကျပ် (300,000 MMK) - တစ်ကြိမ်တည်း ပေးချေရန်။
• လစဉ်အသုံးပြုခ (Monthly Subscription Fee): ၈၀,၀၀၀ ကျပ် (80,000 MMK) - လစဉ်ပေးချေရန်။
• <b>အထူးခံစားခွင့် (Waiver Policy): အသုံးပြုသူမှ ဝန်ဆောင်မှုအသုံးပြုခကို (၆) လစာ တစ်ပြိုင်နက်တည်း ကြိုတင်ပေးချေပါက စတင်တပ်ဆင်ခ (၃၀၀,၀၀၀ ကျပ်) ကို ပေးဆောင်ရန် မလိုဘဲ အခမဲ့ (Free) ခံစားခွင့်ရရှိမည် ဖြစ်သည်။</b>
• လစဉ် (Month-by-month) အစီအစဉ်ဖြင့် အသုံးပြုသူများသည် Setup and Installation Fee ကို အပြည့်အဝ ပေးဆောင်ရမည်။





<strong>၄။ ဒေတာပိုင်ဆိုင်မှုနှင့် ထိန်းသိမ်းခြင်း (Data Ownership & Storage)</strong>
• ပိုင်ဆိုင်မှု: Software အတွင်းရှိ Customers List, Inventory Data နှင့် အရောင်းအဝယ်မှတ်တမ်းများ အားလုံးသည် အသုံးပြုသူ (User) ၏ တရားဝင် ပိုင်ဆိုင်မှုသာ ဖြစ်သည်။ ကုမ္ပဏီမှ အဆိုပါ ဒေတာများကို တိုက်ရိုက်ကြည့်ရှုခြင်း၊ ရယူခြင်းနှင့် အခြားတစ်ပါးသူထံ လွှဲပြောင်းခြင်း လုံးဝပြုလုပ်မည်မဟုတ်ပါ။
• ဒေတာသိမ်းဆည်းမှု: Software ၏ မြန်ဆန်မှုနှင့် အသုံးပြုသူ၏ Experience ကောင်းမွန်စေရန်အတွက် 
 (Transaction Records) နှင့် Activity Logs များကို (၁) နှစ်အထိသာ Server ပေါ်တွင် သိမ်းဆည်းပေးမည် ဖြစ်သည်။
• ဒေတာကာကွယ်မှု: မမျှော်မှန်းနိုင်သည့် အခြေအနေများတွင် ဒေတာများ ဆုံးရှုံးမှုမရှိစေရန် အကောင်းဆုံး Data Backup Support ကို ကုမ္ပဏီမှ ပံ့ပိုးပေးပါမည်။
• ဒေတာဖျက်သိမ်းမှု: (၁) နှစ်ပြည့်၍ ဒေတာများ မဖျက်မီ ကုမ္ပဏီမှ အသုံးပြုသူထံ ကြိုတင် အကြောင်းကြားမည် ဖြစ်သည်။ အသုံးပြုသူအနေဖြင့် မိမိ၏ ဒေတာဟောင်းများကို Backup အနေဖြင့် Download ရယူထားရန် တာဝန်ရှိသည်။

<strong>၅။ ဝန်ဆောင်မှု ရပ်ဆိုင်းခြင်း (Suspension & Termination)</strong>
• စနစ်ပိတ်သိမ်းခြင်း: လစဉ်ကြေး (Subscription Fee) ပေးဆောင်ရန် ပျက်ကွက်ပါက သတ်မှတ်ရက် ကျော်လွန်သည်နှင့် စနစ်မှ အလိုအလျောက် အသုံးပြုခွင့်ကို ခေတ္တပိတ်သိမ်း (Freeze) မည်ဖြစ်သည်။
• အကောင့်ဖျက်သိမ်းခြင်း: အကောင့်ပိတ်သိမ်းပြီးနောက် (၃၀) ရက်အတွင်း ဆက်လက် ပေးဆောင်ခြင်း မရှိပါက အသုံးပြုသူ၏ အကောင့်နှင့်တကွ ဒေတာများအားလုံးကို စနစ်မှ အပြီးတိုင် ဖျက်သိမ်း (Permanently Delete) သွားမည်ဖြစ်သည်။

<strong>၆။ တာဝန်ယူမှုနှင့် ပံ့ပိုးမှု (Liability & Support)</strong>
• ဝန်ဆောင်မှုရရှိနိုင်မှု: ကုမ္ပဏီအနေဖြင့် ၁၀၀% Server Uptime ရရှိရန် အစွမ်းကုန် ကြိုးပမ်းသွားမည် ဖြစ်သည်။ သို့ရာတွင် မထိန်းချုပ်နိုင်သော အခြေအနေများ (Force Majeure) ကြောင့် ဖြစ်ပေါ်လာနိုင်သော ဝန်ဆောင်မှု အနှောင့်အယှက်များအတွက် အာမခံချက် ပေးနိုင်မည်မဟုတ်ပါ။
• ဒေတာကာကွယ်မှု: မမျှော်မှန်းနိုင်သည့် အခြေအနေများတွင် ဒေတာများ ဆုံးရှုံးမှုမရှိစေရန် အကောင်းဆုံး Data Backup Support ကို ကုမ္ပဏီမှ ပံ့ပိုးပေးပါမည်။
• AI တာဝန်ယူမှု: AI Assistant မှ ထွက်ပေါ်လာသော အစီရင်ခံစာများအပေါ် အခြေခံ၍ အသုံးပြုသူ၏ လုပ်ငန်းဆိုင်ရာ ဆုံးဖြတ်ချက်များ ချမှတ်ရာတွင် ဖြစ်ပေါ်လာနိုင်သော အကျိုးအမြတ် သို့မဟုတ် ဆုံးရှုံးမှုများအတွက် ကုမ္ပဏီမှ တာဝန်ယူမည် မဟုတ်ပါ။

<strong>၇။ မူဝါဒများ ပြင်ဆင်ခြင်း (Policy Updates)</strong>
ကုမ္ပဏီအနေဖြင့် အနာဂတ်တွင် ဖြစ်ပေါ်လာနိုင်သော အခြေအနေများအပေါ် မူတည်၍ ဤမူဝါဒများကို လိုအပ်သလို ပြင်ဆင်မွမ်းမံမှုများ ပြုလုပ်နိုင်ပါသည်။ သို့ရာတွင် မည်သည့်ပြင်ဆင်မှုကိုမဆို အသုံးပြုသူများထံ ကြိုတင်အကြောင်းကြားပေးသွားမည် ဖြစ်သည်။

<strong>Acceptance of Agreement (သဘောတူညီချက်ကို လက်ခံခြင်း)</strong>
အောက်ပါအချက်အလက်များကို ဖြည့်စွက်ခြင်းဖြင့် ဤစာချုပ်ပါ စည်းကမ်းချက်များကို ဖတ်ရှုနားလည်ပြီး သဘောတူညီကြောင်း အတည်ပြုပါသည်။`;

const generatePDF = async (formData, signature, contractId) => {
  try {
    // Create a temporary div with proper styling
    const tempDiv = document.createElement("div");
    tempDiv.style.cssText = `
      position: absolute;
      left: -9999px;
      top: -9999px;
      width: 800px;
      padding: 40px;
      font-family: 'Noto Sans Myanmar', 'Pyidaungsu', sans-serif;
      font-size: 14px;
      line-height: 1.8;
      background: white;
      color: black;
      border: 1px solid #ddd;
    `;

    tempDiv.innerHTML = `
      <style>
        strong { font-size: 16px; display: inline-block; margin-top: 5px; }
        b { font-weight: bold; }
      </style>
      <div style="text-align: center; margin-bottom: 30px; font-family: Arial, sans-serif;">
        <img src="${logoImage}" style="width: 80px; height: 80px; border-radius: 50%; object-fit: cover; border: 2px solid #2216a8; margin-bottom: 15px;" />
        <h1 style="font-size: 28px; margin: 0; font-weight: bold; color: #2216a8;">OTAS Tech Solutions Co., Ltd.</h1>
        <h2 style="font-size: 22px; margin: 10px 0; font-weight: normal; color: #444;">Auto Shop Software Service Agreement</h2>
        <p style="font-size: 16px; color: #666; margin: 5px 0;">Contract ID: ${contractId} | Date: ${new Date().toLocaleDateString("my-MM")}</p>
      </div>
      
      <div style="margin-bottom: 30px;">
        <h3 style="font-size: 20px; font-weight: bold; margin-bottom: 15px; color: #2216a8; border-bottom: 2px solid #2216a8; padding-bottom: 5px; font-family: Arial, sans-serif;">SERVICE AGREEMENT</h3>
        <div style="font-family: 'Noto Sans Myanmar', 'Pyidaungsu', sans-serif; white-space: pre-wrap; font-size: 14px; line-height: 1.8;">${PDF_TEXT}</div>
      </div>
      
      <div style="margin-top: 200px; margin-bottom: 30px; font-family: Arial, sans-serif;">
        <h3 style="font-size: 20px; font-weight: bold; margin-bottom: 15px; color: #2216a8; border-bottom: 2px solid #2216a8; padding-bottom: 5px;">SIGNATORY INFORMATION</h3>
        <div style="font-size: 15px; line-height: 1.8;">
          <p><strong>Full Name:</strong> ${formData.fullName}</p>
          <p><strong>Phone Number:</strong> ${formData.phoneNumber}</p>
          <p><strong>Position:</strong> ${formData.position}</p>
          <p><strong>Business Name:</strong> ${formData.businessName}</p>
          <p><strong>Subscription Plan:</strong> ${formData.plan.charAt(0).toUpperCase() + formData.plan.slice(1)}</p>
          <p><strong>Start Date:</strong> ${formData.startDate}</p>
        </div>
      </div>


      
      <div style="margin-bottom: 30px; font-family: Arial, sans-serif;">
        <h3 style="font-size: 20px; font-weight: bold; margin-bottom: 10px; color: #2216a8; border-bottom: 2px solid #2216a8; padding-bottom: 5px;">DIGITAL SIGNATURE:</h3>
        ${signature ? `<img src="${signature}" style="max-width: 200px; height: auto; border: 1px solid #ddd; margin-top: 10px;" />` : "<p>[Signature on file]</p>"}
      </div>
      
      <div style="margin-bottom: 30px; font-family: Arial, sans-serif;">
        <h3 style="font-size: 20px; font-weight: bold; margin-bottom: 10px; color: #2216a8; border-bottom: 2px solid #2216a8; padding-bottom: 5px;">AGREEMENT STATUS: ACCEPTED</h3>
        <p style="font-size: 15px;">Terms and Conditions have been accepted by the signatory.</p>
      </div>
      
      <div style="border-top: 2px solid #2216a8; padding-top: 20px; margin-top: 30px; font-family: Arial, sans-serif;">
        <p style="font-size: 12px; color: #666; margin: 5px 0;">OTAS Tech Solutions Co., Ltd.</p>
        <p style="font-size: 12px; color: #666; margin: 5px 0;">Contact: info@autoshopmm.com</p>
      </div>
    `;

    document.body.appendChild(tempDiv);

    // Wait for the content to render
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Use html2canvas to capture the content
    const canvas = await html2canvas(tempDiv, {
      scale: 2,
      useCORS: true,
      allowTaint: true,
      backgroundColor: "#ffffff",
      width: 800,
      height: tempDiv.scrollHeight,
      scrollX: 0,
      scrollY: 0,
    });

    // Create PDF from canvas
    const imgData = canvas.toDataURL("image/png");
    const pdf = new jsPDF("p", "mm", "a4");
    const imgWidth = 210; // A4 width in mm
    const pageHeight = 295; // A4 height in mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    let heightLeft = imgHeight;
    let position = 0;

    pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    while (heightLeft >= 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    pdf.save(
      `Contract_${contractId}_${formData.businessName.replace(/\s+/g, "_")}.pdf`,
    );
    document.body.removeChild(tempDiv);
  } catch (error) {
    console.error("Error generating PDF:", error);
    alert("PDF generation failed. Please try again or contact support.");
  }
};

export default function ContractForm() {
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    position: "",
    businessName: "",
    plan: "",
    startDate: "",
  });
  const [agreed, setAgreed] = useState(false);
  const [signature, setSignature] = useState("");
  const [signatureEmpty, setSignatureEmpty] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const signatureRef = useRef(null);

  const isFormValid = useMemo(() => {
    return (
      formData.fullName.trim() !== "" &&
      formData.phoneNumber.trim() !== "" &&
      formData.position.trim() !== "" &&
      formData.businessName.trim() !== "" &&
      formData.plan.trim() !== "" &&
      formData.startDate.trim() !== "" &&
      agreed &&
      !signatureEmpty
    );
  }, [
    formData.fullName,
    formData.phoneNumber,
    formData.position,
    formData.businessName,
    formData.plan,
    formData.startDate,
    agreed,
    signatureEmpty,
  ]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignatureEnd = () => {
    if (signatureRef.current) {
      const isEmpty = signatureRef.current.isEmpty();
      setSignatureEmpty(isEmpty);
      if (!isEmpty) {
        setSignature(signatureRef.current.toDataURL());
      }
    }
  };

  const handleClearSignature = () => {
    signatureRef.current?.clear();
    setSignature("");
    setSignatureEmpty(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch(`${API_BASE_URL}/contracts`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          signature,
          agreed,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({ success: true, message: data.message });
        await generatePDF(formData, signature, data.id);
        setFormData({
          fullName: "",
          phoneNumber: "",
          position: "",
          businessName: "",
          plan: "",
          startDate: "",
        });
        setAgreed(false);
        signatureRef.current?.clear();
        setSignature("");
        setSignatureEmpty(true);
      } else {
        setSubmitStatus({ success: false, message: data.error });
      }
    } catch {
      setSubmitStatus({
        success: false,
        message: "Connection error. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contract-container bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen">
      <header className="contract-header">
        <div className="company-logo">
          <img
            src={logoImage}
            alt="OTAS Tech Solutions Logo"
            className="logo-img"
          />
          <div className="logo-text">
            <h1>OTAS Tech Solutions Co., Ltd.</h1>
            <p>Auto Shop Software Service Agreement</p>
          </div>
        </div>
      </header>

      <div className="contract-content">
        <div className="contract-text-section">
          <h2 className="section-title">Service Agreement</h2>
          <div
            className="contract-text"
            dangerouslySetInnerHTML={{ __html: CONTRACT_TEXT }}
          />
        </div>

        <form className="contract-form" onSubmit={handleSubmit}>
          <h3 className="form-title">Signatory Information</h3>

          <div className="form-group">
            <label htmlFor="fullName">Full Name (အမည်အပြည့်အစုံ) *</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Enter your full name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number (ဖုန်းနံပါတ်) *</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              placeholder="09-XXXXXXXXX"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="position">Position (ရာထူး) *</label>
            <input
              type="text"
              id="position"
              name="position"
              value={formData.position}
              onChange={handleInputChange}
              placeholder="e.g., Owner, Manager"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="businessName">Business Name (လုပ်ငန်းအမည်) *</label>
            <input
              type="text"
              id="businessName"
              name="businessName"
              value={formData.businessName}
              onChange={handleInputChange}
              placeholder="Enter your business name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="plan">
              Subscription Plan (စီမံခန့်ခွဲမှုအစီအစဉ်) *
            </label>
            <select
              id="plan"
              name="plan"
              value={formData.plan}
              onChange={handleInputChange}
              required
            >
              <option value="">Select a plan</option>
              <option value="basic">Basic Plan (1 month)</option>
              <option value="investment">Investment Plan (6 months)</option>
              <option value="premium">Premium Plan (1 year)</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="startDate">Start Date (စတင်သည့်ရက်) *</label>
            <input
              type="date"
              id="startDate"
              name="startDate"
              value={formData.startDate}
              min={new Date().toISOString().split("T")[0]}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group signature-group">
            <label>Digital Signature (လက်မှတ်) *</label>
            <div className="signature-canvas-wrapper">
              <SignatureCanvas
                ref={signatureRef}
                canvasProps={{
                  className: "signature-canvas",
                  touchAction: "none",
                }}
                penColor="#1a1a1a"
                onEnd={handleSignatureEnd}
                onBegin={() => {
                  // Prevent mobile keyboard and cursor issues
                  if (signatureRef.current) {
                    const canvas = signatureRef.current.canvas;
                    canvas.style.touchAction = "none";
                    canvas.style.pointerEvents = "auto";
                    canvas.focus();
                  }
                }}
              />
            </div>
            <button
              type="button"
              className="clear-btn"
              onClick={handleClearSignature}
            >
              Clear Signature
            </button>
          </div>

          <div className="form-group checkbox-group flex items-center ">
            <div className="checkbox-label">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
              />

              <p className="agreement-text">
                ဤဝန်ဆောင်မှုသဘောတူညီချက် (Terms and Conditions) အားလုံးကို
                ဖတ်ရှုပြီး သဘောတူညီပါသည်။
              </p>
            </div>
          </div>

          {submitStatus && (
            <div
              className={`status-message ${submitStatus.success ? "success" : "error"}`}
            >
              {submitStatus.message}
            </div>
          )}

          <button
            type="submit"
            className="submit-btn transform transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg"
            disabled={!isFormValid || isSubmitting}
          >
            {isSubmitting ? (
              <>
                <span className="spinner"></span>
                Submitting...
              </>
            ) : (
              "Submit Agreement"
            )}
          </button>

          {!isFormValid && (
            <p className="validation-hint">
              Please complete all fields, provide your signature, and accept the
              terms.
            </p>
          )}
        </form>
      </div>

      <Modal isOpen={isSubmitting || !!submitStatus}>
        {isSubmitting && !submitStatus && (
          <>
            <div className="loading-spinner"></div>
            <h2 className="modal-title">Submitting Agreement...</h2>
            <p className="modal-message">Please wait, generating PDF.</p>
          </>
        )}
        {submitStatus && (
          <>
            <div className="modal-icon">{submitStatus.success ? "✓" : "✗"}</div>
            <h2 className="modal-title">
              {submitStatus.success
                ? "Contract Signed Successfully!"
                : "Submission Failed"}
            </h2>
            <p className="modal-subtitle">
              {submitStatus.success
                ? "သဘောတူညီမှု တင်ပြပြီးပါပြီ။"
                : "Error occurred"}
            </p>
            <p className="modal-message">
              {submitStatus.success
                ? "PDF will be downloaded to your device."
                : submitStatus.message}
            </p>
            <button
              onClick={() => setSubmitStatus(null)}
              className="modal-button"
            >
              Close
            </button>
          </>
        )}
      </Modal>

      <footer className="contract-footer">
        <p>
          OTAS Tech Solutions Co., Ltd. | Contact: info@autoshopmm.com | Version
          1.0
        </p>
      </footer>
    </div>
  );
}
