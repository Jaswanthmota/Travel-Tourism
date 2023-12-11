import express from "express";
import {createTour, deleteTour, getAllTour, getSingleTour, updateTour, getTourSearch, getFeaturedTour, getTourCount} from "./../controllers/tourcontroller.js";


const router = express.Router();


router.post("/", createTour);
router.put("/:id", updateTour);
router.delete("/:id", deleteTour);
router.get("/:id", getSingleTour);
router.get("/", getAllTour);
router.get("/search/getTourSearch", getTourSearch);
router.get("/search/getFeaturedTour", getFeaturedTour);
router.get("/search/getTourCount", getTourCount);




export default router;