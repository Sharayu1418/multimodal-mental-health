import { AssessmentResult } from '../types';

export function calculateScore(answers: number[]): number {
  return answers.reduce((sum, value) => sum + value, 0);
}

export function getSeverity(score: number): AssessmentResult {
  if (score <= 4) {
    return { 
      level: "None-minimal",
      recommendation: "No treatment may be needed"
    };
  }
  if (score <= 9) {
    return {
      level: "Mild",
      recommendation: "Watchful waiting; repeat PHQ-9 at follow-up"
    };
  }
  if (score <= 14) {
    return {
      level: "Moderate",
      recommendation: "Treatment plan, considering counseling, follow-up and/or pharmacotherapy"
    };
  }
  if (score <= 19) {
    return {
      level: "Moderately Severe",
      recommendation: "Active treatment with pharmacotherapy and/or psychotherapy"
    };
  }
  return {
    level: "Severe",
    recommendation: "Immediate initiation of pharmacotherapy and, if severe impairment or poor response to therapy, expedited referral to a mental health specialist for psychotherapy and/or collaborative management"
  };
}