import nc from "next-connect";
import dbConnect from "@/backend/config/dbConnect";

import { checkoutSession } from "@/backend/controllers/orderControllers";

const handler = nc();

dbConnect();

handler.post(checkoutSession);

export default handler;
