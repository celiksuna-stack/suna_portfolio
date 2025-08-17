'use server';
/**
 * @fileOverview A flow for generating personalized Turkish proverbs based on user input.
 *
 * - generateTurkishProverb - A function that generates a Turkish proverb.
 * - GenerateTurkishProverbInput - The input type for the generateTurkishProverb function.
 * - GenerateTurkishProverbOutput - The return type for the generateTurkishProverb function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateTurkishProverbInputSchema = z.object({
  keywords: z
    .string()
    .describe(
      'Keywords or a short description to generate a personalized Turkish proverb.'
    ),
});
export type GenerateTurkishProverbInput = z.infer<typeof GenerateTurkishProverbInputSchema>;

const GenerateTurkishProverbOutputSchema = z.object({
  proverb: z.string().describe('The generated Turkish proverb.'),
});
export type GenerateTurkishProverbOutput = z.infer<typeof GenerateTurkishProverbOutputSchema>;

export async function generateTurkishProverb(
  input: GenerateTurkishProverbInput
): Promise<GenerateTurkishProverbOutput> {
  return generateTurkishProverbFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateTurkishProverbPrompt',
  input: {schema: GenerateTurkishProverbInputSchema},
  output: {schema: GenerateTurkishProverbOutputSchema},
  prompt: `You are a Turkish proverb generator. Generate a proverb in Turkish that reflects the following input: {{{keywords}}}. The proverb should be wise, short and memorable.`,
});

const generateTurkishProverbFlow = ai.defineFlow(
  {
    name: 'generateTurkishProverbFlow',
    inputSchema: GenerateTurkishProverbInputSchema,
    outputSchema: GenerateTurkishProverbOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
