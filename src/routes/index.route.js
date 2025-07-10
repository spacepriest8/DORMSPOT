import{Router} from "express"
import hostelRoutes from "./hostel.routes.js"
import roomRoutes from "./room.routes.js"

const router=Router({mergeParams:true})

router.use("/hostels", hostelRoutes)
router.use("/room", roomRoutes)

export default router