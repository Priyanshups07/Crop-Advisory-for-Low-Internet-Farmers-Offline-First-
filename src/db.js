import Dexie from "dexie";

export const db = new Dexie("FarmDB");

db.version(1).stores({
  reports: "++id, crop, issue, soil, stage, synced"
});