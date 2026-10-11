export interface UserProfile {
  name: string;
  grade: string;
  character: string;
}

export interface ProgressItem {
  completed: boolean;
  stars: number;
}

export interface UserProgress {
  elementary: Record<string, ProgressItem>;
  middle: Record<string, ProgressItem>;
  high: Record<string, ProgressItem>;
}

export interface UserData {
  profile: UserProfile;
  progress: UserProgress;
  badges: string[];
  streak: {
    current: number;
    lastDate: string;
  };
}

export interface Problem {
  id: string;
  question: string;
  answer: string;
  type: "input" | "choice";
}

export interface Unit {
  title: string;
  order: number;
  problems: Problem[];
}
