import{Router} from "express"
import hostelRoutes from "./hostel.routes.js"
import roomRoutes from "./room.routes.js"
import paymentRoute from "./payment.routes.js"

const router=Router({mergeParams:true})

router.use("/hostels", hostelRoutes)
router.use("/room", roomRoutes)
router.use("/payments",paymentRoute)

export default router