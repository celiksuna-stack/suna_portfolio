'use server';

import { z } from 'zod';
import { generateTurkishProverb } from '@/ai/flows/generate-turkish-proverb';

// Proverb Generation Action
export async function generateProverbAction(keywords: string): Promise<{ proverb?: string; error?: string; }> {
  if (!keywords || keywords.trim().length < 3) {
    return { error: 'Please enter a more descriptive keyword.' };
  }

  try {
    const result = await generateTurkishProverb({ keywords });
    if (result.proverb) {
      return { proverb: result.proverb };
    }
    return { error: 'Could not generate a proverb. Please try a different keyword.' };
  } catch (error) {
    console.error('Proverb generation error:', error);
    return { error: 'An unexpected error occurred while generating the proverb.' };
  }
}


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
