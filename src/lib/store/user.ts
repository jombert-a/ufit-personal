import { writable } from "svelte/store";

interface User {
  email: string
  name: string
  age: number
}

export const user = writable<User | null>(null);