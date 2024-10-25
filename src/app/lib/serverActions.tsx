"use server";
import { db } from "./db";
import { PresentAbsent } from "../../../interfaces";
import { revalidatePath } from "next/cache";

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

export async function addNewName(
  name: string,
  present: boolean
): Promise<void> {
  await db.query(`INSERT INTO present_absent (name, present) VALUES ($1, $2)`, [
    name,
    present,
  ]);
  revalidatePath("/");
}
