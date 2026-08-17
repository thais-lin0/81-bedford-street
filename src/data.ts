import lyricsSource from "./letras.txt?raw";

export const TRACKS: [string, string][] = [
  ["sunday", "4:14"],
  ["on the bonnet of a car", "2:41"],
  ["loose plans", "3:27"],
  ["in between", "3:18"],
  ["walking around", "2:50"],
  ["maybe later", "2:56"],
  ["small town", "3:12"],
  ["no rush", "2:35"],
  ["coffee and gray", "2:34"],
  ["may 28", "2:38"],
];

const TRACK_TITLES = new Set(TRACKS.map(([title]) => title));

/**
 * Remove indicações de arranjo, nomes de seções e a descrição musical que
 * aparecem no arquivo-fonte, mantendo apenas a letra e os espaços entre versos.
 */
function cleanLyrics(rawLyrics: string) {
  const paragraphs = rawLyrics.trim().split(/\n\s*\n/);

  // Algumas faixas têm uma descrição musical isolada antes da primeira seção.
  if (
    paragraphs.length > 1 &&
    !paragraphs[0].includes("\n") &&
    !paragraphs[0].trim().startsWith("[") &&
    paragraphs[1].trim().startsWith("[")
  ) {
    paragraphs.shift();
  }

  return paragraphs
    .join("\n\n")
    .replace(/\s*\[[^\]\n]+\]\s*/g, "\n\n")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

/**
 * Lê src/letras.txt e separa as letras pelos títulos definidos em TRACKS.
 * Para editar ou adicionar letras, altere apenas letras.txt. O título de cada
 * bloco precisa ser exatamente igual ao título correspondente em TRACKS.
 */
function parseLyrics(source: string): Record<string, string> {
  const songs: Record<string, string> = {};
  let currentTitle: string | null = null;
  let currentLines: string[] = [];

  function saveCurrentSong() {
    if (!currentTitle) return;
    songs[currentTitle] = cleanLyrics(currentLines.join("\n"));
  }

  for (const line of source.replace(/\r\n?/g, "\n").split("\n")) {
    const possibleTitle = line.trim();

    if (TRACK_TITLES.has(possibleTitle)) {
      saveCurrentSong();
      currentTitle = possibleTitle;
      currentLines = [];
    } else if (currentTitle) {
      currentLines.push(line);
    }
  }

  saveCurrentSong();
  return songs;
}

/** Letras carregadas automaticamente de src/letras.txt. */
export const SONGS: Record<string, string> = parseLyrics(lyricsSource);
