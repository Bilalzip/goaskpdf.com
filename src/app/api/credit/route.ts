import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest , res: NextResponse){

    try {
        const {userId } = await req.json();

        console.log(userId)
                 
        if (!userId){
            return NextResponse.json({
                message: "Authentication failed"
            })
        }
    
        const CHIPP_API_KEY="test_bab15c62-f3ce-45e8-8486-3228fabd55ac"
            const config = {
                headers: {
                  'Authorization': `Bearer ${CHIPP_API_KEY}`
                }
              };
    
            const chip_api_url = `https://api.chipp.ai/packages/hosted-purchase-page-url?${userId}=a-consumer-identifier&returnToUrl=http://localhost:3000/`
    
            const payment_url = await axios.get(chip_api_url , config);
    
            console.log(payment_url)
    
            NextResponse.json({
                payment_url
            })
    } catch (error) {
        console.log(error)
    }

   
    
}