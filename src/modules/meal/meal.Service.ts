import { prisma } from "../../lib/prisma.js";

const createMealDB = async (providerId: string, payload: any) => {
    return await prisma.meal.create({
        data: {
            name: payload.name,
            description: payload.description,
            price: payload.price,
            image: payload.image,
            isAvailable: payload.isAvailable ?? true,
            categoryId: payload.categoryId, 
            providerId: providerId,        
        }
    });
};


const updateMealDB = async (id:string, providerId: string, payload: any) => {
    return await prisma.meal.update({
        where: { 
            id,
            providerId 
        },
        data: payload
    });
};

const deleteMealDB = async (id: string, providerId: string) => {
    return await prisma.meal.delete({
        where: { 
            id,
            providerId 
        }
    });
};


export const mealService = {
    createMealDB,
    updateMealDB,
    deleteMealDB
};