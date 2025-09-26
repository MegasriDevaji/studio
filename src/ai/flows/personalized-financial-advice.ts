'use server';

/**
 * @fileOverview Personalized financial advice flow.
 *
 * This file defines a Genkit flow that analyzes a user's spending habits and provides tailored recommendations on budgeting and saving.
 *
 * @fileOverview
 * - `getPersonalizedFinancialAdvice`: Asynchronously provides financial advice based on user spending.
 * - `PersonalizedFinancialAdviceInput`: Defines the input schema for user spending data.
 * - `PersonalizedFinancialAdviceOutput`: Defines the structure of the financial advice output.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

// Define the input schema for the flow
const PersonalizedFinancialAdviceInputSchema = z.object({
  spendingData: z
    .string()
    .describe("A string containing the user's spending data, with each transaction including amount, category, date, and description."),
  income: z.number().describe('The users monthly income'),
});
export type PersonalizedFinancialAdviceInput = z.infer<
  typeof PersonalizedFinancialAdviceInputSchema
>;

// Define the output schema for the flow
const PersonalizedFinancialAdviceOutputSchema = z.object({
  advice: z
    .string()
    .describe(
      'Personalized financial advice based on the user provided spending data.'
    ),
});
export type PersonalizedFinancialAdviceOutput = z.infer<
  typeof PersonalizedFinancialAdviceOutputSchema
>;

// Exported function to get personalized financial advice
export async function getPersonalizedFinancialAdvice(
  input: PersonalizedFinancialAdviceInput
): Promise<PersonalizedFinancialAdviceOutput> {
  return personalizedFinancialAdviceFlow(input);
}

// Define the prompt for the flow
const personalizedFinancialAdvicePrompt = ai.definePrompt({
  name: 'personalizedFinancialAdvicePrompt',
  input: {schema: PersonalizedFinancialAdviceInputSchema},
  output: {schema: PersonalizedFinancialAdviceOutputSchema},
  prompt: `You are a personal finance advisor. Analyze the user's spending habits and provide personalized recommendations on budgeting and saving. Use the provided income to give more accurate, helpful, and relevant recommendations.

Spending Data: {{{spendingData}}}
Income: {{{income}}}

Provide advice that is specific and actionable.`,
});

// Define the Genkit flow
const personalizedFinancialAdviceFlow = ai.defineFlow(
  {
    name: 'personalizedFinancialAdviceFlow',
    inputSchema: PersonalizedFinancialAdviceInputSchema,
    outputSchema: PersonalizedFinancialAdviceOutputSchema,
  },
  async input => {
    const {output} = await personalizedFinancialAdvicePrompt(input);
    return output!;
  }
);
