import z from 'zod';

export const productSchema = z.object({
    title: z.string().min(3),
    price: z.number().min(0, 'Giá khong được để '),
    description: z.string().optional(),
});
export const productUpdateSchema = z.object({
    title: z.string().min(3, 'Sản phẩm không được dưới 3 kí tự').optional(),
    price: z.number().min(0, 'Giá khong được để âm').optional(),
    description: z.string().optional(),
});
