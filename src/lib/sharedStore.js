const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || '';
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const isSupabaseEnabled = Boolean(SUPABASE_URL && SUPABASE_ANON_KEY);

const storageKeys = {
  users: 'users',
  threads: 'nihon_threads',
  dictionary: 'nihon_dict',
  roleplay: 'nihon_role'
};

const apiPaths = {
  threads: '/community-api/threads',
  dictionary: '/community-api/dictionary',
  roleplay: '/community-api/roleplay'
};

function localKey(key) {
  return storageKeys[key] || key;
}

function readLocal(key, fallback) {
  const raw = localStorage.getItem(localKey(key));
  if (!raw) return fallback;
  try {
    return JSON.parse(raw);
  } catch {
    return fallback;
  }
}

function writeLocal(key, value) {
  localStorage.setItem(localKey(key), JSON.stringify(value));
}

async function readSupabase(key) {
  const url = `${SUPABASE_URL}/rest/v1/app_state?key=eq.${encodeURIComponent(key)}&select=value`;
  const res = await fetch(url, {
    headers: {
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`
    }
  });
  if (!res.ok) throw new Error(`Supabase read ${res.status}`);
  const rows = await res.json();
  return rows[0]?.value;
}

async function writeSupabase(key, value) {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/app_state`, {
    method: 'POST',
    headers: {
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      'Content-Type': 'application/json',
      Prefer: 'resolution=merge-duplicates'
    },
    body: JSON.stringify({ key, value })
  });
  if (!res.ok) throw new Error(`Supabase write ${res.status}`);
}

async function readLocalApi(key) {
  const path = apiPaths[key];
  if (!path) return undefined;
  const res = await fetch(path);
  if (!res.ok) throw new Error(`Local API read ${res.status}`);
  return res.json();
}

async function writeLocalApi(key, value) {
  const path = apiPaths[key];
  if (!path) return;
  const res = await fetch(path, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(value)
  });
  if (!res.ok) throw new Error(`Local API write ${res.status}`);
}

export async function getSharedArray(key, fallback = []) {
  try {
    if (isSupabaseEnabled) {
      const value = await readSupabase(key);
      if (Array.isArray(value)) {
        writeLocal(key, value);
        return value;
      }
    }
  } catch {
    // Continue to local API/localStorage fallback.
  }

  try {
    const value = await readLocalApi(key);
    if (Array.isArray(value)) {
      writeLocal(key, value);
      return value;
    }
  } catch {
    // Continue to localStorage fallback.
  }

  const value = readLocal(key, fallback);
  writeLocal(key, value);
  return value;
}

export async function setSharedArray(key, value) {
  writeLocal(key, value);

  try {
    if (isSupabaseEnabled) {
      await writeSupabase(key, value);
      return 'supabase';
    }
  } catch {
    // Continue to local API fallback.
  }

  try {
    await writeLocalApi(key, value);
    return 'local-api';
  } catch {
    return 'local';
  }
}

export async function seedSharedArray(key, fallback = []) {
  const value = await getSharedArray(key, fallback);
  if (Array.isArray(value) && value.length > 0) return value;
  await setSharedArray(key, fallback);
  return fallback;
}
