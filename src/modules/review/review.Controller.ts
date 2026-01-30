import { NextFunction, Request, Response } from "express";
import { reviewService } from "./review.Service.js";

const createReview = async (req: Request ,res: Response, next: NextFunction) => {
    try {
        const { mealId, rating, comment } = req.body;
        const userId = req.user?.id!;

        const result = await reviewService.createReviewDB(userId, mealId, rating, comment);

        res.status(201).json({
            success: true,
            message: "Review submitted successfully",
            data: result
        });
    } catch (error: any) {
        next(error);
    }
};

export const reviewController = {
    createReview
}