import { serviceItems } from "@/components/data/servicesData";
import { z } from "zod";

/**
 * Extracts the titles from an array of service items.
 *
 * @param items - The collection of service items.
 * @returns An array of strings where each string is the title from the corresponding service item.
 */
export function services() {
    const list: string[] = [];

    serviceItems.forEach((item) => {
        list.push(item.title);
    });

    return list;
}

export const contactFormSchema = z.object({
    subject: z.string().min(2, { message: "Subject should have at least 2 letters" }),
    name: z.string().min(2, { message: "Name should have at least 2 letters" }),
    address: z
        .string()
        .min(2, { message: "Address should have atleast 2 letters" }),
    email: z.string().email({ message: "Invalid Email Address" }),
    description: z.string().min(50, {
        message:
            "Your detail should be atleast 50 characters. Describe what you want in detail",
    }),
    service: z.enum(services() as [string, ...string[]]),
});

export type contactFormType = z.infer<typeof contactFormSchema>;
