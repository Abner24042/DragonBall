import {useEffect, useState,} from "react";
import type { Persona } from "../types";

type CharacterAPI = {
  id: number;
  name: string;
  image: string;
  ki: string;
  maxKi: string;
  race: string;
};

const usePersonas = () => {
  const [personas, setPersonas] = useState<Persona[]>([]);

  useEffect(() => {
    const traerPersonas = async () => {
      try {
        const respuesta = await fetch("https://dragonball-api.com/api/characters");
        const datos = await respuesta.json();

        const listadoReal: Persona[] = datos.items.map((p: CharacterAPI) => ({
          id: p.id,
          name: p.name,
          image: p.image,
          ki: p.ki,
          maxki: p.maxKi,
          race: p.race,
        }));
        setPersonas(listadoReal);
      } catch (error) {
        console.error("Error al traer las personas:", error);
      }
    };

    traerPersonas();
  }, []);

  return {
    personas
  }
}

export default usePersonas