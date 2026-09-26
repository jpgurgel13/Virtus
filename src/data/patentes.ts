export type Patente = {
  id: string;
  nome: string;
  xpMinimo: number;
  cor: string;
};

export const patentes: Patente[] = [
  { id: "noob", nome: "Noob", xpMnimo: 0, cor: "#94A3B8" },
  { id: "recruta", nome: "Recruta", xpMinimo: 500, cor: "#7FAF89" },
  { id: "executor", nome: "Executor", xpMinimo: 1500, cor: "#60A5FA" },
  { id: "veterano", nome: "Veterano", xpMinimo: 3000, cor: "#22D3EE" },
  { id: "elite", nome: "Elite", xpMinimo: 5000, cor: "#A78BFA" },
  { id: "mestre", nome: "Mestre", xpMinimo: 7500, cor: "#E879F9" },
  { id: "supremo", nome: "Supremo", xpMinimo: 10000, cor: "#FACC15" },
  { id: "lendario", nome: "Lendário", xpMinimo: 15000, cor: "#FF7A18" },
];
