// Mock in-memory storage for Vercel-compatible persistence
// Data is stored in module-level arrays (persists per server instance)
// In production: replace with Firestore/Supabase

export interface DonationRecord {
  id: string;
  name: string;
  email: string;
  phone: string;
  amount: number;
  cause: string;
  message?: string;
  timestamp: string;
  status: "pending" | "confirmed";
}

export interface EnrollmentRecord {
  id: string;
  name: string;
  email: string;
  phone: string;
  program: string;
  experience: string;
  motivation: string;
  timestamp: string;
  status: "pending" | "approved";
}

export interface VolunteerRecord {
  id: string;
  name: string;
  email: string;
  phone: string;
  skills: string;
  availability: string;
  message: string;
  timestamp: string;
}

export interface ContactRecord {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: string;
}

// Module-level store
const store = {
  donations:   [] as DonationRecord[],
  enrollments: [] as EnrollmentRecord[],
  volunteers:  [] as VolunteerRecord[],
  contacts:    [] as ContactRecord[],
};

function uid() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

export const db = {
  donations: {
    add: (data: Omit<DonationRecord, "id" | "timestamp" | "status">): DonationRecord => {
      const rec: DonationRecord = { ...data, id: uid(), timestamp: new Date().toISOString(), status: "pending" };
      store.donations.unshift(rec);
      return rec;
    },
    getAll: () => [...store.donations],
  },
  enrollments: {
    add: (data: Omit<EnrollmentRecord, "id" | "timestamp" | "status">): EnrollmentRecord => {
      const rec: EnrollmentRecord = { ...data, id: uid(), timestamp: new Date().toISOString(), status: "pending" };
      store.enrollments.unshift(rec);
      return rec;
    },
    getAll: () => [...store.enrollments],
  },
  volunteers: {
    add: (data: Omit<VolunteerRecord, "id" | "timestamp">): VolunteerRecord => {
      const rec: VolunteerRecord = { ...data, id: uid(), timestamp: new Date().toISOString() };
      store.volunteers.unshift(rec);
      return rec;
    },
    getAll: () => [...store.volunteers],
  },
  contacts: {
    add: (data: Omit<ContactRecord, "id" | "timestamp">): ContactRecord => {
      const rec: ContactRecord = { ...data, id: uid(), timestamp: new Date().toISOString() };
      store.contacts.unshift(rec);
      return rec;
    },
    getAll: () => [...store.contacts],
  },
};
