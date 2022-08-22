import {Router} from 'express'

const router = Router();
router.get("/posts", (req, res)=> {
    console.log("Post list")
})
export default router;