// styling

export const redFail = "#b10909"
export const greenSuccess = "#3da00c"

// URLS

export const CHARACTER_SHEET_PURIST_URL =
  "https://matthewfee.github.io/OSECharacterServer/public/CharacterSheetTemplate7.pdf"

export const CHARACTER_SHEET_UNDERGROUND_URL =
  "https://matthewfee.github.io/OSECharacterServer/public/Underground10.pdf"

export const RANDOM_NUMBERS_API_URL = "https://api.random.org/json-rpc/4/invoke"

// default states

export const defaultAbilityScoresState = {
  strength: null,
  strengthOriginal: null,
  intelligence: null,
  intelligenceOriginal: null,
  wisdom: null,
  wisdomOriginal: null,
  dexterity: null,
  dexterityOriginal: null,
  constitution: null,
  constitutionOriginal: null,
  charisma: null,
  charismaOriginal: null,
}

// strings

export const abilityScoreNames = [
  "strength",
  "intelligence",
  "dexterity",
  "wisdom",
  "constitution",
  "charisma",
]

export const lngs = {
  en: { nativeName: "English" },
  de: { nativeName: "Deutsch" },
}

export const CHARACTER_STORAGE = "characterStorage"

export const primeRequisiteModifiers = [
  null,
  null,
  null,
  -20,
  -20,
  -20,
  -10,
  -10,
  -10,
  0,
  0,
  0,
  0,
  5,
  5,
  5,
  10,
  10,
  10,
]

//strings for class names

export const Cleric = "Cleric"
export const Fighter = "Fighter"
export const Elf = "Elf"
export const Dwarf = "Dwarf"
export const Halfling = "Halfling"
export const MagicUser = "Magic-User"
export const Thief = "Thief"

//strings for armour

export const armourTypes = {
  leather: "Leather",
  chainMail: "Chainmail",
  plateMail: "Plate mail",
  shield: "Shield",
  unarmoured: "Unarmoured",
}

//strings for first names

export const firstNames = [
  "Balthazar",
  "Arthwit",
  "Clewd",
  "Abernathy",
  "Ethex",
  "Tomumbolo",
  "Lambop",
  "Obolm",
  "Gremo",
  "Abernathy",
  "Oglom",
  "Bagnack",
  "Pestil",
  "Wumpus",
  "Ginger",
  "Misty",
  "Boots",
  "Gringle",
  "Mannog",
  "Melnax",
  "Melnoth",
  "Melwesh",
  "Orthax",
  "Yirmeor",
  "Canhoreal",
  "Breyir",
  "Breagle",
  "Cannora",
  "Agnel",
  "Beatrice",
  "Legwen",
  "Thegwin",
  "Lirann",
  "Gruwth",
  "Yirmeor",
  "Basil",
  "Bertram",
  "Blaxton",
  "Chadwick",
  "Clovis",
  "Jules",
  "Leopold",
  "Merrick",
  "Mortimer",
  "Ogden",
  "Orion",
  "Destrian",
  "Ellis",
  "Erasmus",
  "Faustus",
  "Finn",
  "Fitzhugh",
  "Oswald",
  "Percival",
  "Quentin",
  "Redmaine",
  "Reinhold",
  "Florian",
  "Fox",
  "Godwin",
  "Giles",
  "Hannibal",
  "Jasper",
  "Joffrey",
  "Jiles",
  "Silas",
  "Stilton",
  "Stratford",
  "Tenpiece",
  "Waverly",
  "Webster",
  "Adelaide",
  "Alma",
  "Barsaba",
  "Beatrix",
  "Bianca",
  "Cleopha",
  "Morgot",
  "Minerva",
  "Nerissa",
  "Odette",
  "Olga",
  "Orchid",
  "Clover",
  "Constance",
  "Damaris",
  "Daphne",
  "Demona",
  "Elsbeth",
  "Pepper",
  "Phoebe",
  "Piety",
  "Poppy",
  "Silence",
  "Sybil",
  "Esme",
  "Fern",
  "Hester",
  "Hippolyta",
  "Jessamine",
  "Jilly",
  "Trillby",
  "Tuesday",
  "Ursula",
  "Vivian",
  "Wendy",
  "Zora",
]

export const lastNames = [
  "Abernathy",
  "Addercapper",
  "Candleswick",
  "Cormick",
  "Dregger",
  "Crumwaller",
  "Getri",
  "Glas",
  "Gruewater",
  "Harper",
  "Lank",
  "Logueweaver",
  "Loomer",
  "Malksmilk",
  "Smith",
  "Sunderman",
  "Swinney",
  "Thatcher",
  "Tolmen",
  "Vulgamoore",
  "Wolder",
  "Belvedere",
  "Bithesea",
  "Calaver",
  "Carvolo",
  "De Rippe",
  "Drolle",
  "La Marque",
  "Malmora",
  "Miter",
  "Oblington",
  "Onymous",
  "Phillifent",
  "Dunlow",
  "Edevane",
  "Erelong",
  "Febland",
  "Fernsby",
  "Fisk",
  "Portendorfer",
  "Romatet",
  "Rothery",
  "Skorbeck",
  "Slora",
  "Southwark",
  "Gastrell",
  "Girdwood",
  "Gorgon",
  "Grimeson",
  "Gruger",
  "Hitheryon",
  "Stavish",
  "Vandermeer",
  "Wellbelove",
  "Westergren",
  "Wexley",
  "Wilberforce",

  "Barrow",
  "Beetleman",
  "Berrycloth",
  "Birdwhistle",
  "Bobich",
  "Chips",
  "Knibbs",
  "Midnighter",
  "Needle",
  "Nethercoat",
  "Pestle",
  "Relish",
  "Coffin",
  "Crumpling",
  "Culpepper",
  "Dankworth",
  "Digworthy",
  "Dreggs",
  "Rumbold",
  "Rummage",
  "Sallow",
  "Saltmarsh",
  "Silverless",
  "Skitter",
  "Gimble",
  "Graveworm",
  "Greelish",
  "Hardwick",
  "Hatman",
  "Hovel",
  "Slee",
  "Slitherly",
  "Stoker",
  "Tarwater",
  "Tumbler",
  "Villin",
]

export const appearances = [
  "stylish",
  "tattooed",
  "thin",
  "warm",
  "cold",
  "healthy",
  "sickly",
  "old-fashioned",
  "shiny",
  "disheveld",
  "bloody",
  "old-fashioned",
  "adorable",
  "misty",
  "colorful",
  "monochromatic",
  "snobbish",
  "plain",
  "alluring",
  "filthy",
  "clean",
  "muddy",
  "elegant",
  "slippery",
  "sunburned",
  "grimy",
  "slender",
  "charming",
  "rugged",
  "rough",
  "clean-cut",
  "aged",
  "elderly",
  "young",
  "seasoned",
  "youthful",
  "burly",
  "sturdy",
  "malodorous",
  "luminous",
  "cloudy",
  "obscure",
  "mysterious",
  "hooded",
  "shadowy",
  "radiant",
  "affluent",
  "ghostly",
  "nimble",
  "aquiline",
  "athletic",
  "barrel-chested",
  "boney",
  "brawny",
  "brutish",
  "bullnecked",
  "chiseled",
  "cultish",
  "corpulent",
  "craggy",
  "delicate",
  "furrowed",
  "gaunt",
  "gorgeous",
  "grizzled",
  "haggard",
  "handsome",
  "hideous",
  "lanky",
  "pudgy",
  "ripped",
  "rosy",
  "scrawny",
  "sinewy",
  "slender",
  "slumped",
  "solid",
  "square-jawed",
  "statuesque",
  "towering",
  "tall",
  "short",
  "muscular",
  "scrawny",
  "trim",
  "weathered",
  "willowy",
  "wiry",
  "wrinkly",
]

export const traits = [
  "stoic",
  "doomed",
  "proud",
  "stern",
  "sociable",
  "admirable",
  "calm",
  "dramatic",
  "unforgiving",
  "dishonest",
  "logical",
  "impatient",
  "romantic",
  "scholarly",
  "sentimental",
  "sophisticated",
  "wise",
  "contradictory",
  "dreamy",
  "earthy",
  "folksy",
  "abrasive",
  "inquisitive",
  "old-fashioned",
  "mystical",
  "mellow",
  "experimental",
  "cute",
  "determined",
  "artful",
  "absentminded",
  "self-conscious",
  "anxious",
  "calculating",
  "desperate",
  "respectful",
  "extravagant",
  "forgetful",
  "fiery",
  "gloomy",
  "decisive",
  "messy",
  "weak-willed",
  "wishful",
  "reliable",
  "boorish",
  "aggressive",
  "arrogant",
  "cruel",
  "compulsive",
  "rude",
  "paranoid",
  "greedy",
  "hateful",
  "ambitious",
  "insane",
  "intolerant",
  "lustful",
  "pessimistic",
  "absent-minded",
  "amiable",
  "nervous",
  "eccentric",
  "bookish",
  "chill",
  "mischievous",
  "loquacious",
  "homesick",
  "humble",
  "curious",
  "flirtatious",
  "foolhardy",
  "flamboyant",
  "stoic",
  "gregarious",
  "secretive",
  "naive",
  "proud",
  "taciturn",
  "superstitious",
  "devoted",
  "friendly",
  "faithful",
  "eloquent",
  "brave",
  "cautious",
  "celibate",
  "generous",
  "cheerful",
  "confident",
  "polite",
  "resolute",
  "persuasive",
  "industrious",
  "strict",
  "merciful",
  "gentle-hearted",
  "protective",
  "helpful",
  "honorable",
  "loyal",
  "shrewd",
  "pure",
  "jealous",
  "vengeful",
  "shrewd",
  "impulsive",
  "charitable",
  "daring",
  "reckless",
  "ambitious",
]

export const misfortunes = [
  "rejected",
  "accused",
  "debt",
  "hunted",
  "abandoned",
  "addicted",
  "blackmailed",
  "burgled",
  "challenged",
  "framed",
  "neglected",
  "bullied",
  "haunted",
  "humiliated",
  "impoverished",
  "kidnapped",
  "lost",
  "condemned",
  "cursed",
  "injured",
  "imprisoned",
  "banished",
  "defrauded",
  "demoted",
  "depressed",
  "betrayed",
  "mobbed",
  "overworked",
  "unemployed",
  "poisoned",
  "pursued",
  "rejected",
  "discredited",
  "dismissed",
  "disowned",
  "exiled",
  "famished",
  "forgotten",
  "replaced",
  "robbed",
  "sick",
  "sued",
  "suspected",
  "transformed",
  "shunned",
  "forsaken",
  "damned",
  "murdered",
  "followed",
  "misunderstood",
  "unappreciated",
  "unpopular",
  "destitute",
  "heartbroken",
]

export const languageOptions = [
  "Bugbear",
  "Doppelganger",
  "Dragon",
  "Dwarvish",
  "Elvish",
  "Gargoyle",
  "Gnoll",
  "Gnomish",
  "Goblin",
  "Halfling",
  "Harpy",
  "Hobgoblin",
  "Kobold",
  "Lizard man",
  "Medusa",
  "Minotaur",
  "Ogre",
  "Orcish",
  "Pixie",
  "Human dialect",
]
