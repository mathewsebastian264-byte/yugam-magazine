import React, { useState, useEffect } from 'react';
import { magazineInfo as seedMagazineInfo, MagazineMeta } from '../data/magazineInfo';
import { messages as seedMessages, MessageItem } from '../data/messages';
import { patrons as seedPatrons, advisors as seedAdvisors, editorialTeam as seedEditorialTeam, unionCouncil as seedUnionCouncil, nccPanel as seedNccPanel, EditorialMember } from '../data/editorial';
import { unionReportData as seedUnionReport } from '../data/unionReport';
import { eventsData as seedEvents, EventItem } from '../data/events';
import { literaryPieces as seedLiterary, LiteraryPiece } from '../data/literary';
import { bestOutgoingStudents as seedOutgoing, featuredArtists as seedArtists, kalolsavamWinners as seedKalolsavam, AchieverItem } from '../data/achievers';
import { archivePages as seedArchive, ArchivePage } from '../data/archivePages';

const STORAGE_KEY = 'yugam_magazine_master_cms_v2';

export interface PersonItem {
  id: string;
  name: string;
  role: string;
  category: 'Staff' | 'Student' | 'Editorial' | 'Union' | 'NCC' | 'Custom';
  department?: string;
  batch?: string;
  image?: string;
  bio?: string;
  pageRef?: number;
  featured?: boolean;
  published?: boolean;
  order?: number;
}

export interface PersonGroup {
  id: string;
  slug: string;
  title: string;
  categoryTag: string;
  description: string;
  layout: 'grid' | 'asymmetric' | 'featured' | 'compact';
  members: PersonItem[];
  published: boolean;
  order: number;
}

export interface HomepageSectionConfig {
  id: string;
  type: 'hero' | 'toc' | 'intro' | 'messages' | 'trionza' | 'union' | 'events' | 'centerpiece' | 'achievers' | 'gallery' | 'reader_cta';
  title: string;
  subtitle?: string;
  enabled: boolean;
  order: number;
}

export interface MediaItem {
  id: string;
  url: string;
  title: string;
  category: string;
  altText: string;
  uploadedAt: string;
}

export interface ActivityLogItem {
  id: string;
  action: string;
  entity: string;
  user: string;
  timestamp: string;
}

export interface AppContentState {
  magazineInfo: MagazineMeta;
  homepageSections: HomepageSectionConfig[];
  personGroups: PersonGroup[];
  messages: MessageItem[];
  patrons: EditorialMember[];
  advisors: EditorialMember[];
  editorialTeam: EditorialMember[];
  unionCouncil: EditorialMember[];
  nccPanel: EditorialMember[];
  unionReport: typeof seedUnionReport;
  events: EventItem[];
  literaryPieces: LiteraryPiece[];
  bestOutgoingStudents: AchieverItem[];
  featuredArtists: AchieverItem[];
  kalolsavamWinners: typeof seedKalolsavam;
  archivePages: ArchivePage[];
  mediaLibrary: MediaItem[];
  activityLogs: ActivityLogItem[];
}

const defaultHomepageSections: HomepageSectionConfig[] = [
  { id: 'sec-hero', type: 'hero', title: 'YUGAM Cover & Masthead', enabled: true, order: 1 },
  { id: 'sec-toc', type: 'toc', title: 'Table of Contents & Index Ribbon', enabled: true, order: 2 },
  { id: 'sec-messages', type: 'messages', title: 'Leadership Guidance & Notes', subtitle: 'From The Leadership Desk', enabled: true, order: 3 },
  { id: 'sec-trionza', type: 'trionza', title: 'TRIONZA 2K26 National Education Fest', subtitle: 'Fusion of Academics, Arts & Culture', enabled: true, order: 4 },
  { id: 'sec-centerpiece', type: 'centerpiece', title: 'Centerpiece Literary Anthology', subtitle: 'Our Voices / Our Generation', enabled: true, order: 5 },
  { id: 'sec-union', type: 'union', title: 'Astra College Union Council', subtitle: 'Elected Student Leaders 2025–26', enabled: true, order: 6 },
  { id: 'sec-events', type: 'events', title: 'Campus Highlights & Celebrations', subtitle: 'Sports, Arts, and Departmental Symposiums', enabled: true, order: 7 },
  { id: 'sec-achievers', type: 'achievers', title: 'Valedictory Achievers & Art Gallery', subtitle: 'Honoring Outgoing Students and Artists', enabled: true, order: 8 },
  { id: 'sec-gallery', type: 'gallery', title: 'Photo Stories & Moments', subtitle: 'Campus Life & Nostalgia', enabled: true, order: 9 },
  { id: 'sec-cta', type: 'reader_cta', title: '76-Page Digital Reader CTA', enabled: true, order: 10 },
];

const seedPersonGroups: PersonGroup[] = [
  {
    id: 'grp-union',
    slug: 'union-council',
    title: 'Astra College Union Council 2025–26',
    categoryTag: 'Student Leadership',
    description: 'Elected student representatives leading student welfare and campus activities (Featured on Page 10).',
    layout: 'grid',
    order: 1,
    published: true,
    members: seedUnionCouncil.map((m, i) => ({
      id: `union-mem-${i}`,
      name: m.name,
      role: m.role,
      category: 'Union',
      department: m.department || '',
      pageRef: 10,
      order: i + 1,
      published: true,
    })),
  },
  {
    id: 'grp-editorial',
    slug: 'editorial-board',
    title: 'Editorial Board & Staff Curators',
    categoryTag: 'Curators & Editors',
    description: 'Guiding the literary, artistic, and journal production of the Yugam publication (Featured on Page 9).',
    layout: 'asymmetric',
    order: 2,
    published: true,
    members: seedEditorialTeam.map((m, i) => ({
      id: `edit-mem-${i}`,
      name: m.name,
      role: m.role,
      category: 'Editorial',
      department: m.department || '',
      image: m.image,
      bio: m.bio,
      pageRef: m.pageRef || 9,
      order: i + 1,
      published: true,
    })),
  },
  {
    id: 'grp-patrons',
    slug: 'patrons-management',
    title: 'Patrons & Executive Management',
    categoryTag: 'College Leadership',
    description: 'Executive leadership of St. Joseph’s College (Autonomous), Moolamattom (Featured on Page 4).',
    layout: 'featured',
    order: 3,
    published: true,
    members: seedPatrons.map((m, i) => ({
      id: `patron-mem-${i}`,
      name: m.name,
      role: m.role,
      category: 'Staff',
      image: m.image,
      bio: m.bio,
      pageRef: m.pageRef || 4,
      order: i + 1,
      published: true,
    })),
  },
  {
    id: 'grp-ncc',
    slug: 'ncc-panel',
    title: '18(K) Battalion NCC Senior Panel 2025–26',
    categoryTag: 'Discipline & Valour',
    description: 'Cadre of St. Joseph’s College, Moolamattom | NCC Muvattupuzha (Featured on Pages 18 & 19).',
    layout: 'grid',
    order: 4,
    published: true,
    members: seedNccPanel.map((m, i) => ({
      id: `ncc-mem-${i}`,
      name: m.name,
      role: m.role,
      category: 'NCC',
      pageRef: m.pageRef || 18,
      order: i + 1,
      published: true,
    })),
  },
];

const seedMediaLibrary: MediaItem[] = Array.from({ length: 76 }, (_, i) => {
  const num = String(i + 1).padStart(2, '0');
  return {
    id: `page-${num}`,
    url: `/images/magazine/page-${num}.jpg`,
    title: `Magazine Scan Page ${i + 1}`,
    category: i === 0 ? 'Cover' : i < 11 ? 'Editorial' : i < 23 ? 'Events' : i < 41 ? 'Literature' : 'Campus',
    altText: `YUGAM 2025-26 Page ${i + 1}`,
    uploadedAt: '2026-02-28',
  };
});

const getInitialState = (): AppContentState => {
  if (typeof window === 'undefined') {
    return {
      magazineInfo: seedMagazineInfo,
      homepageSections: defaultHomepageSections,
      personGroups: seedPersonGroups,
      messages: seedMessages,
      patrons: seedPatrons,
      advisors: seedAdvisors,
      editorialTeam: seedEditorialTeam,
      unionCouncil: seedUnionCouncil,
      nccPanel: seedNccPanel,
      unionReport: seedUnionReport,
      events: seedEvents,
      literaryPieces: seedLiterary,
      bestOutgoingStudents: seedOutgoing,
      featuredArtists: seedArtists,
      kalolsavamWinners: seedKalolsavam,
      archivePages: seedArchive,
      mediaLibrary: seedMediaLibrary,
      activityLogs: [
        { id: 'log-1', action: 'System Initialized', entity: 'Core Platform', user: 'System', timestamp: new Date().toISOString() },
      ],
    };
  }

  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      return JSON.parse(saved);
    }
  } catch (e) {
    console.error('Failed to load content from localStorage', e);
  }

  return {
    magazineInfo: seedMagazineInfo,
    homepageSections: defaultHomepageSections,
    personGroups: seedPersonGroups,
    messages: seedMessages,
    patrons: seedPatrons,
    advisors: seedAdvisors,
    editorialTeam: seedEditorialTeam,
    unionCouncil: seedUnionCouncil,
    nccPanel: seedNccPanel,
    unionReport: seedUnionReport,
    events: seedEvents,
    literaryPieces: seedLiterary,
    bestOutgoingStudents: seedOutgoing,
    featuredArtists: seedArtists,
    kalolsavamWinners: seedKalolsavam,
    archivePages: seedArchive,
    mediaLibrary: seedMediaLibrary,
    activityLogs: [
      { id: 'log-1', action: 'System Initialized', entity: 'Core Platform', user: 'System', timestamp: new Date().toISOString() },
    ],
  };
};

let globalState = getInitialState();
const listeners = new Set<() => void>();

function notify(actionName?: string, entityName?: string) {
  if (typeof window !== 'undefined') {
    try {
      if (actionName) {
        const newLog: ActivityLogItem = {
          id: `log-${Date.now()}`,
          action: actionName,
          entity: entityName || 'Content CMS',
          user: 'Admin',
          timestamp: new Date().toISOString(),
        };
        globalState = {
          ...globalState,
          activityLogs: [newLog, ...globalState.activityLogs.slice(0, 49)],
        };
      }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(globalState));
    } catch (e) {
      console.error('Failed to save content to localStorage', e);
    }
  }
  listeners.forEach((listener) => listener());
}

export const contentStore = {
  get: () => globalState,

  updateMagazineInfo: (info: Partial<MagazineMeta>) => {
    globalState = {
      ...globalState,
      magazineInfo: { ...globalState.magazineInfo, ...info },
    };
    notify('Updated Settings', 'Magazine Metadata');
  },

  updateHomepageSections: (sections: HomepageSectionConfig[]) => {
    globalState = { ...globalState, homepageSections: sections };
    notify('Reordered Sections', 'Homepage Layout');
  },

  // Person Groups CMS (Universal People System)
  updatePersonGroups: (groups: PersonGroup[]) => {
    globalState = { ...globalState, personGroups: groups };
    notify('Updated People Groups', 'People CMS');
  },

  addPersonGroup: (group: PersonGroup) => {
    globalState = { ...globalState, personGroups: [...globalState.personGroups, group] };
    notify('Created Group', group.title);
  },

  updatePersonGroup: (id: string, updated: Partial<PersonGroup>) => {
    globalState = {
      ...globalState,
      personGroups: globalState.personGroups.map((g) => (g.id === id ? { ...g, ...updated } : g)),
    };
    notify('Updated Group', updated.title || id);
  },

  deletePersonGroup: (id: string) => {
    globalState = {
      ...globalState,
      personGroups: globalState.personGroups.filter((g) => g.id !== id),
    };
    notify('Deleted Group', id);
  },

  addMemberToGroup: (groupId: string, member: PersonItem) => {
    globalState = {
      ...globalState,
      personGroups: globalState.personGroups.map((g) => {
        if (g.id === groupId) {
          return { ...g, members: [...g.members, member] };
        }
        return g;
      }),
    };
    notify('Added Member', member.name);
  },

  updateMemberInGroup: (groupId: string, memberId: string, updated: Partial<PersonItem>) => {
    let syncedName: string | undefined = undefined;
    let syncedRole: string | undefined = undefined;
    let syncedImage: string | undefined = undefined;

    const updatedGroups = globalState.personGroups.map((g) => {
      if (g.id === groupId) {
        return {
          ...g,
          members: g.members.map((m) => {
            if (m.id === memberId) {
              const res = { ...m, ...updated };
              syncedName = res.name;
              syncedRole = res.role;
              syncedImage = res.image;
              return res;
            }
            return m;
          }),
        };
      }
      return g;
    });

    let newUnion = globalState.unionCouncil;
    if (groupId === 'grp-union' || groupId === 'union-council') {
      newUnion = globalState.unionCouncil.map((u) => {
        if (syncedName && u.name.toLowerCase() === syncedName.toLowerCase()) {
          return { ...u, role: syncedRole || u.role, image: syncedImage ?? u.image };
        }
        return u;
      });
    }

    globalState = {
      ...globalState,
      personGroups: updatedGroups,
      unionCouncil: newUnion,
    };
    notify('Updated Member', updated.name || memberId);
  },

  deleteMemberFromGroup: (groupId: string, memberId: string) => {
    const targetGroup = globalState.personGroups.find((g) => g.id === groupId);
    const targetMember = targetGroup?.members.find((m) => m.id === memberId);

    const updatedGroups = globalState.personGroups.map((g) => {
      if (g.id === groupId) {
        return { ...g, members: g.members.filter((m) => m.id !== memberId) };
      }
      return g;
    });

    let newUnion = globalState.unionCouncil;
    if (groupId === 'grp-union' && targetMember) {
      newUnion = globalState.unionCouncil.filter((u) => u.name.toLowerCase() !== targetMember.name.toLowerCase());
    }

    globalState = {
      ...globalState,
      personGroups: updatedGroups,
      unionCouncil: newUnion,
    };
    notify('Deleted Member', targetMember?.name || memberId);
  },

  // Union Council Specific Helpers (Synced with personGroups)
  updateUnionMember: (index: number, updated: Partial<EditorialMember>) => {
    const newCouncil = [...globalState.unionCouncil];
    const prevMember = newCouncil[index];
    newCouncil[index] = { ...prevMember, ...updated } as EditorialMember;

    // Sync to grp-union in personGroups
    const updatedGroups = globalState.personGroups.map((g) => {
      if (g.id === 'grp-union' || g.slug === 'union-council') {
        const newMembers = [...g.members];
        if (newMembers[index]) {
          newMembers[index] = {
            ...newMembers[index],
            name: updated.name ?? newMembers[index].name,
            role: updated.role ?? newMembers[index].role,
            department: updated.department ?? newMembers[index].department,
            image: updated.image ?? newMembers[index].image,
            bio: updated.bio ?? newMembers[index].bio,
            pageRef: updated.pageRef ?? newMembers[index].pageRef,
          };
        } else {
          newMembers.push({
            id: `union-mem-${Date.now()}`,
            name: updated.name || '',
            role: updated.role || '',
            category: 'Union',
            department: updated.department || '',
            image: updated.image,
            bio: updated.bio,
            pageRef: updated.pageRef || 10,
            published: true,
          });
        }
        return { ...g, members: newMembers };
      }
      return g;
    });

    globalState = {
      ...globalState,
      unionCouncil: newCouncil,
      personGroups: updatedGroups,
    };
    notify('Updated Union Member', updated.name || `Member ${index + 1}`);
  },

  addUnionMember: (member: EditorialMember) => {
    const newCouncil = [...globalState.unionCouncil, member];
    const newPersonItem: PersonItem = {
      id: `union-mem-${Date.now()}`,
      name: member.name,
      role: member.role,
      category: 'Union',
      department: member.department || '',
      image: member.image,
      bio: member.bio,
      pageRef: member.pageRef || 10,
      published: true,
    };

    const updatedGroups = globalState.personGroups.map((g) => {
      if (g.id === 'grp-union' || g.slug === 'union-council') {
        return { ...g, members: [...g.members, newPersonItem] };
      }
      return g;
    });

    globalState = {
      ...globalState,
      unionCouncil: newCouncil,
      personGroups: updatedGroups,
    };
    notify('Added Union Member', member.name);
  },

  deleteUnionMember: (index: number) => {
    const target = globalState.unionCouncil[index];
    const newCouncil = globalState.unionCouncil.filter((_, i) => i !== index);

    const updatedGroups = globalState.personGroups.map((g) => {
      if (g.id === 'grp-union' || g.slug === 'union-council') {
        return {
          ...g,
          members: g.members.filter((m, idx) => {
            if (target && m.name === target.name) return false;
            return idx !== index;
          }),
        };
      }
      return g;
    });

    globalState = {
      ...globalState,
      unionCouncil: newCouncil,
      personGroups: updatedGroups,
    };
    notify('Deleted Union Member', target?.name || `Member ${index + 1}`);
  },

  // Messages
  updateMessage: (id: string, updated: Partial<MessageItem>) => {
    globalState = {
      ...globalState,
      messages: globalState.messages.map((m) => (m.id === id ? { ...m, ...updated } : m)),
    };
    notify('Updated Message', updated.author || id);
  },

  // Events
  addEvent: (event: EventItem) => {
    globalState = { ...globalState, events: [event, ...globalState.events] };
    notify('Created Event', event.title);
  },

  updateEvent: (id: string, updated: Partial<EventItem>) => {
    globalState = {
      ...globalState,
      events: globalState.events.map((e) => (e.id === id ? { ...e, ...updated } : e)),
    };
    notify('Updated Event', updated.title || id);
  },

  deleteEvent: (id: string) => {
    globalState = {
      ...globalState,
      events: globalState.events.filter((e) => e.id !== id),
    };
    notify('Deleted Event', id);
  },

  // Literary Pieces
  addLiteraryPiece: (piece: LiteraryPiece) => {
    globalState = { ...globalState, literaryPieces: [piece, ...globalState.literaryPieces] };
    notify('Created Literature', piece.title);
  },

  updateLiteraryPiece: (id: string, updated: Partial<LiteraryPiece>) => {
    globalState = {
      ...globalState,
      literaryPieces: globalState.literaryPieces.map((p) => (p.id === id ? { ...p, ...updated } : p)),
    };
    notify('Updated Literature', updated.title || id);
  },

  deleteLiteraryPiece: (id: string) => {
    globalState = {
      ...globalState,
      literaryPieces: globalState.literaryPieces.filter((p) => p.id !== id),
    };
    notify('Deleted Literature', id);
  },

  // Achievers
  updateBestOutgoingStudent: (id: string, updated: Partial<AchieverItem>) => {
    globalState = {
      ...globalState,
      bestOutgoingStudents: globalState.bestOutgoingStudents.map((s) => (s.id === id ? { ...s, ...updated } : s)),
    };
    notify('Updated Achiever', updated.name || id);
  },

  updateFeaturedArtist: (id: string, updated: Partial<AchieverItem>) => {
    globalState = {
      ...globalState,
      featuredArtists: globalState.featuredArtists.map((a) => (a.id === id ? { ...a, ...updated } : a)),
    };
    notify('Updated Artist', updated.title || id);
  },

  // Media
  addMedia: (media: MediaItem) => {
    globalState = { ...globalState, mediaLibrary: [media, ...globalState.mediaLibrary] };
    notify('Uploaded Media', media.title);
  },

  deleteMedia: (id: string) => {
    globalState = {
      ...globalState,
      mediaLibrary: globalState.mediaLibrary.filter((m) => m.id !== id),
    };
    notify('Deleted Media', id);
  },

  // Factory Reset
  resetToDefaults: () => {
    globalState = {
      magazineInfo: seedMagazineInfo,
      homepageSections: defaultHomepageSections,
      personGroups: seedPersonGroups,
      messages: seedMessages,
      patrons: seedPatrons,
      advisors: seedAdvisors,
      editorialTeam: seedEditorialTeam,
      unionCouncil: seedUnionCouncil,
      nccPanel: seedNccPanel,
      unionReport: seedUnionReport,
      events: seedEvents,
      literaryPieces: seedLiterary,
      bestOutgoingStudents: seedOutgoing,
      featuredArtists: seedArtists,
      kalolsavamWinners: seedKalolsavam,
      archivePages: seedArchive,
      mediaLibrary: seedMediaLibrary,
      activityLogs: [
        { id: `log-${Date.now()}`, action: 'Reset to Factory Seed', entity: 'All Content', user: 'Admin', timestamp: new Date().toISOString() },
      ],
    };
    notify('Reset Dataset', 'All Records');
  },
};

export function useContentStore(): AppContentState {
  const [state, setState] = useState(globalState);

  useEffect(() => {
    const handleChange = () => setState(globalState);
    listeners.add(handleChange);
    return () => {
      listeners.delete(handleChange);
    };
  }, []);

  return state;
}
