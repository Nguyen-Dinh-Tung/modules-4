import { rateLimit } from "express-rate-limit";

export const loginLimiter = rateLimit({
  windowMs : 60*60*1000 ,
  max : 3 ,
  standardHeaders : true ,
  legacyHeaders : false
})