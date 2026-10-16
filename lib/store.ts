'use client';

import { useState, useEffect } from 'react';
import {
  Notice,
  Inquiry,
  GalleryItem,
  StudentResult,
  INITIAL_NOTICES,
  INITIAL_INQUIRIES,
  INITIAL_GALLERY,
  INITIAL_SCHOOL_PROFILE,
  SAMPLE_STUDENT_RESULTS,
  FEE_STRUCTURE_DATA
} from './school-data';

const STORAGE_KEYS = {
  NOTICES: 'fgphs_notices_v2',
  INQUIRIES: 'fgphs_inquiries_v2',
  GALLERY: 'fgphs_gallery_v3',
  PROFILE: 'fgphs_profile_v2',
  RESULTS: 'fgphs_results_v2',
  FEES: 'fgphs_fees_v2',
  AUTH: 'fgphs_auth_session_v2',
  PROPOSAL_APPROVED: 'fgphs_proposal_approved_v2'
};

export function getStoredNotices(): Notice[] {
  if (typeof window === 'undefined') return INITIAL_NOTICES;
  try {
    const item = localStorage.getItem(STORAGE_KEYS.NOTICES);
    return item ? JSON.parse(item) : INITIAL_NOTICES;
  } catch {
    return INITIAL_NOTICES;
  }
}

export function saveStoredNotices(notices: Notice[]) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEYS.NOTICES, JSON.stringify(notices));
  window.dispatchEvent(new Event('fgphs_data_changed'));
}

export function getStoredInquiries(): Inquiry[] {
  if (typeof window === 'undefined') return INITIAL_INQUIRIES;
  try {
    const item = localStorage.getItem(STORAGE_KEYS.INQUIRIES);
    return item ? JSON.parse(item) : INITIAL_INQUIRIES;
  } catch {
    return INITIAL_INQUIRIES;
  }
}

export function saveStoredInquiries(inquiries: Inquiry[]) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEYS.INQUIRIES, JSON.stringify(inquiries));
  window.dispatchEvent(new Event('fgphs_data_changed'));
}

export function addInquiry(inquiry: Omit<Inquiry, 'id' | 'submittedAt' | 'status'>) {
  const current = getStoredInquiries();
  const now = new Date();
  const dateStr = now.toLocaleDateString('en-PK', { year: 'numeric', month: 'short', day: 'numeric' }) +
    ' ' + now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  const newRecord: Inquiry = {
    ...inquiry,
    id: 'inq-' + Date.now().toString().slice(-5),
    status: 'Pending',
    submittedAt: dateStr
  };
  saveStoredInquiries([newRecord, ...current]);
  return newRecord;
}

export function getStoredGallery(): GalleryItem[] {
  if (typeof window === 'undefined') return INITIAL_GALLERY;
  try {
    const item = localStorage.getItem(STORAGE_KEYS.GALLERY);
    if (!item) return INITIAL_GALLERY;
    const parsed = JSON.parse(item);
    if (Array.isArray(parsed) && parsed.some(p => p.imageUrl?.includes('computer-lab') || p.imageUrl?.includes('sports-annual'))) {
      localStorage.setItem(STORAGE_KEYS.GALLERY, JSON.stringify(INITIAL_GALLERY));
      return INITIAL_GALLERY;
    }
    return parsed;
  } catch {
    return INITIAL_GALLERY;
  }
}

export function saveStoredGallery(items: GalleryItem[]) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEYS.GALLERY, JSON.stringify(items));
  window.dispatchEvent(new Event('fgphs_data_changed'));
}

export function getStoredProfile() {
  if (typeof window === 'undefined') return INITIAL_SCHOOL_PROFILE;
  try {
    const item = localStorage.getItem(STORAGE_KEYS.PROFILE);
    return item ? { ...INITIAL_SCHOOL_PROFILE, ...JSON.parse(item) } : INITIAL_SCHOOL_PROFILE;
  } catch {
    return INITIAL_SCHOOL_PROFILE;
  }
}

export function saveStoredProfile(profile: typeof INITIAL_SCHOOL_PROFILE) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEYS.PROFILE, JSON.stringify(profile));
  window.dispatchEvent(new Event('fgphs_data_changed'));
}

export function getStoredResults(): Record<string, StudentResult> {
  if (typeof window === 'undefined') return SAMPLE_STUDENT_RESULTS;
  try {
    const item = localStorage.getItem(STORAGE_KEYS.RESULTS);
    return item ? JSON.parse(item) : SAMPLE_STUDENT_RESULTS;
  } catch {
    return SAMPLE_STUDENT_RESULTS;
  }
}

export function saveStoredResults(results: Record<string, StudentResult>) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEYS.RESULTS, JSON.stringify(results));
  window.dispatchEvent(new Event('fgphs_data_changed'));
}

export function getStoredFees(): typeof FEE_STRUCTURE_DATA {
  if (typeof window === 'undefined') return FEE_STRUCTURE_DATA;
  try {
    const item = localStorage.getItem(STORAGE_KEYS.FEES);
    return item ? JSON.parse(item) : FEE_STRUCTURE_DATA;
  } catch {
    return FEE_STRUCTURE_DATA;
  }
}

export function saveStoredFees(fees: typeof FEE_STRUCTURE_DATA) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEYS.FEES, JSON.stringify(fees));
  window.dispatchEvent(new Event('fgphs_data_changed'));
}

export function isProposalApproved(): boolean {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem(STORAGE_KEYS.PROPOSAL_APPROVED) === 'true';
}

export function setProposalApproved(approved: boolean) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEYS.PROPOSAL_APPROVED, approved ? 'true' : 'false');
  window.dispatchEvent(new Event('fgphs_proposal_changed'));
}

export function checkIsAdminLoggedIn(): boolean {
  if (typeof window === 'undefined') return false;
  return localStorage.getItem(STORAGE_KEYS.AUTH) === 'active_admin_session';
}

export function setAdminLogin(isLoggedIn: boolean) {
  if (typeof window === 'undefined') return;
  if (isLoggedIn) {
    localStorage.setItem(STORAGE_KEYS.AUTH, 'active_admin_session');
  } else {
    localStorage.removeItem(STORAGE_KEYS.AUTH);
  }
}

// React custom hook to subscribe to state changes
export function useSchoolStore() {
  const [notices, setNotices] = useState<Notice[]>(INITIAL_NOTICES);
  const [inquiries, setInquiries] = useState<Inquiry[]>(INITIAL_INQUIRIES);
  const [gallery, setGallery] = useState<GalleryItem[]>(INITIAL_GALLERY);
  const [profile, setProfile] = useState(INITIAL_SCHOOL_PROFILE);
  const [results, setResults] = useState<Record<string, StudentResult>>(SAMPLE_STUDENT_RESULTS);
  const [fees, setFees] = useState<typeof FEE_STRUCTURE_DATA>(FEE_STRUCTURE_DATA);
  const [proposalApproved, setProposalApprovedState] = useState<boolean>(false);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const refresh = () => {
    setNotices(getStoredNotices());
    setInquiries(getStoredInquiries());
    setGallery(getStoredGallery());
    setProfile(getStoredProfile());
    setResults(getStoredResults());
    setFees(getStoredFees());
    setProposalApprovedState(isProposalApproved());
    setIsAdmin(checkIsAdminLoggedIn());
  };

  useEffect(() => {
    refresh();
    setIsLoaded(true);

    const handleSync = () => refresh();
    window.addEventListener('storage', handleSync);
    window.addEventListener('fgphs_data_changed', handleSync);
    window.addEventListener('fgphs_proposal_changed', handleSync);

    return () => {
      window.removeEventListener('storage', handleSync);
      window.removeEventListener('fgphs_data_changed', handleSync);
      window.removeEventListener('fgphs_proposal_changed', handleSync);
    };
  }, []);

  const resetAllToDefault = () => {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(STORAGE_KEYS.NOTICES);
    localStorage.removeItem(STORAGE_KEYS.INQUIRIES);
    localStorage.removeItem(STORAGE_KEYS.GALLERY);
    localStorage.removeItem(STORAGE_KEYS.PROFILE);
    localStorage.removeItem(STORAGE_KEYS.RESULTS);
    localStorage.removeItem(STORAGE_KEYS.FEES);
    localStorage.removeItem(STORAGE_KEYS.PROPOSAL_APPROVED);
    refresh();
  };

  return {
    notices,
    inquiries,
    gallery,
    profile,
    results,
    fees,
    proposalApproved,
    isAdmin,
    isLoaded,
    saveNotices: (items: Notice[]) => {
      saveStoredNotices(items);
      setNotices(items);
    },
    saveInquiries: (items: Inquiry[]) => {
      saveStoredInquiries(items);
      setInquiries(items);
    },
    addInquiry: (item: Omit<Inquiry, 'id' | 'submittedAt' | 'status'>) => {
      const created = addInquiry(item);
      refresh();
      return created;
    },
    saveGallery: (items: GalleryItem[]) => {
      saveStoredGallery(items);
      setGallery(items);
    },
    saveProfile: (p: typeof INITIAL_SCHOOL_PROFILE) => {
      saveStoredProfile(p);
      setProfile(p);
    },
    saveResults: (r: Record<string, StudentResult>) => {
      saveStoredResults(r);
      setResults(r);
    },
    saveFees: (f: typeof FEE_STRUCTURE_DATA) => {
      saveStoredFees(f);
      setFees(f);
    },
    setProposalApproved: (status: boolean) => {
      setProposalApproved(status);
      setProposalApprovedState(status);
    },
    setAdminLogin: (status: boolean) => {
      setAdminLogin(status);
      setIsAdmin(status);
    },
    resetAllToDefault
  };
}
