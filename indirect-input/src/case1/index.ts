import { fetchUserAge, userAge } from "./user";

export function doubleUserAge(): number {
  return userAge() * 2;
}
export async function fetchDoubleUserAge(): Promise<number> {
  const userAge = await fetchUserAge();
  return userAge * 2;
}
