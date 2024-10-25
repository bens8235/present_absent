"use server";
import { db } from "./db";
import { PresentAbsent } from "../../../types";

export async function getAllInfo(): Promise<PresentAbsent[]> {
  const info = await db.query(`SELECT * from present_absent ORDER BY name ASC`);
  return info.rows as PresentAbsent[];
}

export async function toggleAttendance(name: string): Promise<void> {
  await db.query(
    `UPDATE present_absent SET present = NOT present WHERE name = $1`,
    [name]
  );
}
