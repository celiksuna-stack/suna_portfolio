'use server';

import { z } from 'zod';

// Contact Form Action
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

export async function submitContactAction(data: { name: string; email: string; message: string; }) {
  const validatedFields = contactFormSchema.safeParse(data);

  if (!validatedFields.success) {
    const firstError = Object.values(validatedFields.error.flatten().fieldErrors)[0]?.[0];
    return { success: false, error: firstError || "Invalid input. Please check the form and try again." };
  }

  // In a real app, you would integrate an email service like Resend or SendGrid here.
  // For this portfolio, we'll simulate the action by logging it to the server console.
  console.log('New Contact Form Submission:');
  console.log('Name:', validatedFields.data.name);
  console.log('Email:', validatedFields.data.email);
  console.log('Message:', validatedFields.data.message);

  return { success: true, message: 'Thank you for your message! I will get back to you soon.' };
}
