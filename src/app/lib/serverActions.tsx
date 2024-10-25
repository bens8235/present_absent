"use server";
import { db } from "./db";
import { PresentAbsent } from "../../../types";

export async function getAllInfo(): Promise<PresentAbsent[]> {
  const info = await db.query(`SELECT * from present_absent ORDER BY name ASC`);
  return info.rows as PresentAbsent[];
}
